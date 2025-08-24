import request from 'supertest'
import express from 'express'
import gamesRouter from '../../src/routes/games'

// Mock Prisma client
jest.mock('../../src/db', () => ({
  game: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}))

import prisma from '../../src/db'

const app = express()
app.use(express.json())
app.use('/api/games', gamesRouter)

describe('Games API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/games', () => {
    it('should return all games with question counts', async () => {
      const mockGames = [
        {
          id: 'game1',
          name: 'Test Game',
          type: 'ANSWER_SMASH',
          description: 'A test game',
          questions: [{id: 'q1'}, {id: 'q2'}],
          createdAt: new Date(),
        },
      ]

      const mockedFindMany = prisma.game.findMany as jest.MockedFunction<typeof prisma.game.findMany>
      mockedFindMany.mockResolvedValue(mockGames)

      const response = await request(app).get('/api/games')

      expect(response.status).toBe(200)
      expect(response.body).toHaveLength(1)
      expect(response.body[0]).toHaveProperty('questionCount', 2)
      expect(response.body[0]).not.toHaveProperty('questions')
    })

    it('should handle database errors', async () => {
      const mockedFindMany = prisma.game.findMany as jest.MockedFunction<typeof prisma.game.findMany>
      mockedFindMany.mockRejectedValue(new Error('DB Error'))

      const response = await request(app).get('/api/games')

      expect(response.status).toBe(500)
      expect(response.body).toEqual({ error: 'Failed to fetch games' })
    })
  })

  describe('GET /api/games/:id', () => {
    it('should return a specific game with questions', async () => {
      const mockGame = {
        id: 'game1',
        name: 'Test Game',
        type: 'ANSWER_SMASH',
        questions: [
          { id: 'q1', content: 'Test question 1' },
          { id: 'q2', content: 'Test question 2' },
        ],
      }

      const mockedFindUnique = prisma.game.findUnique as jest.MockedFunction<typeof prisma.game.findUnique>
      mockedFindUnique.mockResolvedValue(mockGame)

      const response = await request(app).get('/api/games/game1')

      expect(response.status).toBe(200)
      expect(response.body).toEqual(mockGame)
      expect(prisma.game.findUnique).toHaveBeenCalledWith({
        where: { id: 'game1' },
        include: {
          questions: {
            orderBy: { createdAt: 'desc' }
          }
        }
      })
    })

    it('should return 404 for non-existent game', async () => {
      const mockedFindUnique = prisma.game.findUnique as jest.MockedFunction<typeof prisma.game.findUnique>
      mockedFindUnique.mockResolvedValue(null)

      const response = await request(app).get('/api/games/nonexistent')

      expect(response.status).toBe(404)
      expect(response.body).toEqual({ error: 'Game not found' })
    })
  })

  describe('POST /api/games', () => {
    it('should create a new game', async () => {
      const newGame = {
        name: 'New Game',
        type: 'RHYME_TIME',
        description: 'A new game',
      }

      const createdGame = {
        id: 'new-game-id',
        ...newGame,
        createdAt: new Date(),
      }

      const mockedCreate = prisma.game.create as jest.MockedFunction<typeof prisma.game.create>
      mockedCreate.mockResolvedValue(createdGame)

      const response = await request(app)
        .post('/api/games')
        .send(newGame)

      expect(response.status).toBe(201)
      expect(response.body).toEqual(createdGame)
      expect(prisma.game.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          name: 'New Game',
          type: 'RHYME_TIME',
          description: 'A new game',
        })
      })
    })

    it('should return 400 for missing required fields', async () => {
      const response = await request(app)
        .post('/api/games')
        .send({ name: 'Test Game' }) // Missing type

      expect(response.status).toBe(400)
      expect(response.body).toEqual({ error: 'Name and type are required' })
    })

    it('should return 400 for invalid game type', async () => {
      const response = await request(app)
        .post('/api/games')
        .send({ name: 'Test Game', type: 'INVALID_TYPE' })

      expect(response.status).toBe(400)
      expect(response.body).toEqual({ error: 'Invalid game type' })
    })
  })
})
