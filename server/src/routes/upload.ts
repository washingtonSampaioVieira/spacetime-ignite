import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { extname, resolve } from 'node:path'
import { pipeline } from 'node:stream'
import { createWriteStream } from 'node:fs'
import { promisify } from 'node:util'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const uploadFile = await request.file({
      limits: {
        fileSize: 5_242_880, // 5MB
      },
    })
    console.log('oi')
    if (!uploadFile) {
      return reply.status(400).send()
    }
    console.log('oi 2')

    const mineTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mineTypeRegex.test(uploadFile.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send()
    }
    console.log('oi 3')

    const fileId = randomUUID()
    const extension = extname(uploadFile.filename)

    const fileName = fileId.concat(extension)
    console.log('oi 4')

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads', fileName),
    )

    await pump(uploadFile.file, writeStream)
    console.log('oi 5')

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()
    console.log('oi 6')

    return { fileUrl }
  })
}
