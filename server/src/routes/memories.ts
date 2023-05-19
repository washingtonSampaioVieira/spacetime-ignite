import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  app.get('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })
    const { content, isPublic, coverUrl } = bodySchema.parse(request.body)

    const memory = prisma.memory.create({
      data: {
        content,
        isPublic,
        coverUrl,
        userId: '55183cf4-938f-4cac-be92-1a1815462fe1',
      },
    })

    return memory
  })

  app.put('/memories:id', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { content, isPublic, coverUrl } = bodySchema.parse(request.body)
    const { id } = paramsSchema.parse(request.params)

    await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })
  })

  app.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
