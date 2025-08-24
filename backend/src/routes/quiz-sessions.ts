import { Router } from 'express'
import prisma from '../db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const sessions = await prisma.quizSession.findMany({
      include: {
        questions: {
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    
    res.json(sessions)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quiz sessions' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const session = await prisma.quizSession.findUnique({
      where: { id },
      include: {
        questions: {
          orderBy: { order: 'asc' }
        }
      }
    })
    
    if (!session) {
      return res.status(404).json({ error: 'Quiz session not found' })
    }
    
    res.json(session)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quiz session' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, description, questionIds } = req.body
    
    if (!name) {
      return res.status(400).json({ error: 'Name is required' })
    }
    
    const session = await prisma.quizSession.create({
      data: {
        name,
        description,
        questions: questionIds ? {
          create: questionIds.map((questionId: string, index: number) => ({
            questionId,
            order: index + 1
          }))
        } : undefined
      },
      include: {
        questions: {
          orderBy: { order: 'asc' }
        }
      }
    })
    
    res.status(201).json(session)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create quiz session' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, isActive } = req.body
    
    const updateData: any = {}
    if (name !== undefined) updateData.name = name
    if (description !== undefined) updateData.description = description
    if (isActive !== undefined) updateData.isActive = isActive
    
    const session = await prisma.quizSession.update({
      where: { id },
      data: updateData,
      include: {
        questions: {
          orderBy: { order: 'asc' }
        }
      }
    })
    
    res.json(session)
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Quiz session not found' })
    }
    res.status(500).json({ error: 'Failed to update quiz session' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.quizSession.delete({
      where: { id }
    })
    
    res.status(204).send()
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Quiz session not found' })
    }
    res.status(500).json({ error: 'Failed to delete quiz session' })
  }
})

router.post('/:id/questions', async (req, res) => {
  try {
    const { id: sessionId } = req.params
    const { questionId } = req.body
    
    if (!questionId) {
      return res.status(400).json({ error: 'Question ID is required' })
    }
    
    const maxOrder = await prisma.sessionQuestion.findFirst({
      where: { sessionId },
      orderBy: { order: 'desc' }
    })
    
    const nextOrder = maxOrder ? maxOrder.order + 1 : 1
    
    const sessionQuestion = await prisma.sessionQuestion.create({
      data: {
        sessionId,
        questionId,
        order: nextOrder
      }
    })
    
    res.status(201).json(sessionQuestion)
  } catch (error) {
    res.status(500).json({ error: 'Failed to add question to session' })
  }
})

router.delete('/:id/questions/:questionId', async (req, res) => {
  try {
    const { id: sessionId, questionId } = req.params
    
    await prisma.sessionQuestion.deleteMany({
      where: {
        sessionId,
        questionId
      }
    })
    
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove question from session' })
  }
})

export default router