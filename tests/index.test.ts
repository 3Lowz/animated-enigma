import { MikroORM } from '@mikro-orm/mysql'
import { FastifyInstance } from 'fastify'

// Increasing the jest timeout for long ajax calls
jest.setTimeout(25000)

// let db: MikroORM
let server: FastifyInstance

beforeAll(async () => {
  server = (globalThis as any).app
  await server.listen()
  await server.ready()
})

describe('Server is running:', () => {
  test(`Expect recieve response on default plugin url`, async () => {
    server.inject(
      {
        method: 'get',
        url: '/template/plugin',
      },
      (err, res) => {
        expect(err).toBeNull()
        // @ts-ignore
        const content = JSON.parse(res.body)
        expect(content).toEqual({ message: 'hello from @3lowz/skeleton-react' })
      }
    )
  })
})
