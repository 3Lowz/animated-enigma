// This file is voluntary left empty
import createServer from './mocked'

const server = createServer({
  logger: true,
  PORT: 5000,
})

server.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
