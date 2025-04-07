// See https://github.com/3lowz/upgraded-potato
// for a SoC class based service
import { MikroORM, EntityManager } from '@mikro-orm/mysql'
import { ITodo } from 'entities'

export default class TodoService {
  protected db: MikroORM
  protected em: EntityManager
  private name: string = 'todo'

  constructor(database: MikroORM) {
    if (!database) {
      throw new Error(`A Database connection must be specified`, { cause: { statusCode: 500 } })
    }
    this.db = database
    this.em = this.db.em.fork()
    return this
  }

  async create(data: ITodo): Promise<ITodo> {
    // const repo = this.em.getRepository(T)
    const item = this.em.create(this.name, { ...data })
    this.em.persist([item])
    await this.em.flush()
    return { ...item } as ITodo
  }

  async update(id: string, data: ITodo): Promise<ITodo> {
    const item = await this.em.findOne(this.name, { id: id })
    if (!item) {
      throw new Error(`${this.name} with id: ${id} not found`, { cause: { statusCode: 404 } })
    }
    this.em.assign(item, { ...data } as object, { mergeObjectProperties: true })
    // or
    // wrap(item).assign({ ...data } as object, { mergeObjects: true })
    await this.em.flush()
    return item as ITodo
  }

  async getList(): Promise<ITodo[]> {
    const items = await this.em.find(this.name, {})
    return items as ITodo[]
  }

  async getById(id: string): Promise<ITodo> {
    if (!id) {
      throw new Error(`An id must be specified`, { cause: { statusCode: 500 } })
    }
    const item = await this.em.findOne(this.name, { id })
    if (!item) {
      throw new Error(`${this.name} with id: ${id} not found`, { cause: { statusCode: 404 } })
    }
    return item as ITodo
  }

  async delete(id: string): Promise<boolean> {
    const toDelete = await this.em.findOne(this.name, { id })
    if (!toDelete) {
      throw new Error(`${this.name} with id: ${id} not found`, { cause: { statusCode: 404 } })
    }
    try {
      await this.em.remove(toDelete).flush()
    } catch (err: any) {
      throw new Error(err.message, { cause: { err: err, statusCode: 500 } })
    }
    return true
  }
}
