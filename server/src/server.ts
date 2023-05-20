import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import 'dotenv/config'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { uploadRoute, uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)

app.register(cors, {
  origin: true, // URLs que vão acessar o produto ['https://google.com']
})

app.register(jwt, {
  secret: 'secretjwtspacetime',
})

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
