import createServer from './mocked'

const server = createServer({
  logger: true,
})

server.listen({ port: 5000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
