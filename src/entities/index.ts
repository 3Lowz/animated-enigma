import { EntitySchema } from '@mikro-orm/core'

export interface ITest {
    name: string
    code: string
    deleted: boolean
}

const testSchema = new EntitySchema<ITest>({
    name: 'test',
    tableName: 'mod_test',
    // abstract: false,
    // uniques: {
    //   properties: ['id_ath_permission'],
    // },
    properties: {
      id: { name: 'id_mod_test', type: 'bigint', primary: true },
      name: { type: 'string', length: 255, default: '' },
      code: { type: 'string', length: 255, default: '' },
    },

})

const entities = [testSchema]

export default entities