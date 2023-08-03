import { MikroORM } from '@mikro-orm/mysql'
import { setup } from './setup'
import { teardown } from './teardown'

// Increasing the jest timeout for long ajax calls
jest.setTimeout(2500)

let db: MikroORM

beforeAll(async () => {
  db = await setup()
})
afterAll(() => {
  teardown(db)
})

describe('Index Library Test:', () => {
  test(`Expect to connect to the db`, async () => {
    expect(db).toBeDefined()
    expect(db.em).toBeDefined()
  })
})
