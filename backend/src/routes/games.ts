import { Router } from 'express'
import prisma from '../db'
import { GameType } from '../generated/prisma'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        questions: {
          select: { id: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    
    const gamesWithCounts = games.map(game => ({
      ...game,
      questionCount: game.questions.length,
      questions: undefined
    }))
    
    res.json(gamesWithCounts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch games' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const game = await prisma.game.findUnique({
      where: { id },
      include: {
        questions: {
          orderBy: { createdAt: 'desc' }
        }
      }
    })
    
    if (!game) {
      return res.status(404).json({ error: 'Game not found' })
    }
    
    res.json(game)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch game' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, type, description, rules, round } = req.body
    
    if (!name || !type) {
      return res.status(400).json({ error: 'Name and type are required' })
    }
    
    if (!Object.values(GameType).includes(type)) {
      return res.status(400).json({ error: 'Invalid game type' })
    }
    
    const game = await prisma.game.create({
      data: {
        name,
        type,
        description,
        rules,
        round: round ? parseInt(round) : null
      }
    })
    
    res.status(201).json(game)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create game' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, type, description, rules, round, isActive } = req.body
    
    const updateData: any = {}
    if (name !== undefined) updateData.name = name
    if (type !== undefined) {
      if (!Object.values(GameType).includes(type)) {
        return res.status(400).json({ error: 'Invalid game type' })
      }
      updateData.type = type
    }
    if (description !== undefined) updateData.description = description
    if (rules !== undefined) updateData.rules = rules
    if (round !== undefined) updateData.round = round ? parseInt(round) : null
    if (isActive !== undefined) updateData.isActive = isActive
    
    const game = await prisma.game.update({
      where: { id },
      data: updateData
    })
    
    res.json(game)
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Game not found' })
    }
    res.status(500).json({ error: 'Failed to update game' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.game.delete({
      where: { id }
    })
    
    res.status(204).send()
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Game not found' })
    }
    res.status(500).json({ error: 'Failed to delete game' })
  }
})

export default router