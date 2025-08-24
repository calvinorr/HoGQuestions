import { Router } from 'express'
import prisma from '../db'
import { Difficulty } from '../generated/prisma'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const { gameId, difficulty, category, page = '1', limit = '20' } = req.query
    
    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const offset = (pageNum - 1) * limitNum
    
    const where: any = {}
    if (gameId) where.gameId = gameId as string
    if (difficulty) where.difficulty = difficulty as Difficulty
    if (category) where.category = { contains: category as string, mode: 'insensitive' }
    
    const [questions, total] = await Promise.all([
      prisma.question.findMany({
        where,
        include: {
          game: {
            select: { id: true, name: true, type: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limitNum
      }),
      prisma.question.count({ where })
    ])
    
    res.json({
      questions,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const question = await prisma.question.findUnique({
      where: { id },
      include: {
        game: true
      }
    })
    
    if (!question) {
      return res.status(404).json({ error: 'Question not found' })
    }
    
    res.json(question)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch question' })
  }
})

router.post('/', async (req, res) => {
  try {
    const {
      gameId,
      content,
      answer,
      hints,
      explanation,
      difficulty,
      category,
      points,
      imageUrl,
      audioUrl,
      metadata
    } = req.body
    
    if (!gameId || !content || !answer) {
      return res.status(400).json({ error: 'GameId, content, and answer are required' })
    }
    
    const gameExists = await prisma.game.findUnique({ where: { id: gameId } })
    if (!gameExists) {
      return res.status(400).json({ error: 'Game not found' })
    }
    
    if (difficulty && !Object.values(Difficulty).includes(difficulty)) {
      return res.status(400).json({ error: 'Invalid difficulty level' })
    }
    
    const question = await prisma.question.create({
      data: {
        gameId,
        content,
        answer,
        hints: hints ? JSON.stringify(hints) : null,
        explanation,
        difficulty: difficulty || Difficulty.MEDIUM,
        category,
        points: points ? parseInt(points) : 1,
        imageUrl,
        audioUrl,
        metadata: metadata ? JSON.stringify(metadata) : null
      },
      include: {
        game: {
          select: { id: true, name: true, type: true }
        }
      }
    })
    
    res.status(201).json(question)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create question' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updateData: any = {}
    
    const allowedFields = [
      'content', 'answer', 'hints', 'explanation', 'difficulty',
      'category', 'points', 'imageUrl', 'audioUrl', 'metadata', 'isActive'
    ]
    
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        if (field === 'hints' || field === 'metadata') {
          updateData[field] = req.body[field] ? JSON.stringify(req.body[field]) : null
        } else if (field === 'points') {
          updateData[field] = parseInt(req.body[field])
        } else if (field === 'difficulty') {
          if (!Object.values(Difficulty).includes(req.body[field])) {
            return res.status(400).json({ error: 'Invalid difficulty level' })
          }
          updateData[field] = req.body[field]
        } else {
          updateData[field] = req.body[field]
        }
      }
    }
    
    const question = await prisma.question.update({
      where: { id },
      data: updateData,
      include: {
        game: {
          select: { id: true, name: true, type: true }
        }
      }
    })
    
    res.json(question)
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Question not found' })
    }
    res.status(500).json({ error: 'Failed to update question' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.question.delete({
      where: { id }
    })
    
    res.status(204).send()
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Question not found' })
    }
    res.status(500).json({ error: 'Failed to delete question' })
  }
})

export default router