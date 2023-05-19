import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(cors, {
  origin: true, // URLs que vão acessar o produto ['https://google.com']
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on htt://localhost:3333')
  })
