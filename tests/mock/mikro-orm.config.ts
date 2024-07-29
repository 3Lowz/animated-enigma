/* eslint-disable no-extra-boolean-cast */
import path from 'path'
import dotenv, { DotenvParseOutput } from 'dotenv'
import { Options, MySqlDriver } from '@mikro-orm/mysql'
import entities from './entities/index'

const DEBUG = true

const readFileEnv = (filepath?: string): DotenvParseOutput => {
  const envPath = filepath || './../'
  const envFilename = '.env'
  const nodeEnv = process.env.NODE_ENV ?? 'test'
  const envFile = path.join(__dirname, envPath, `${envFilename}.${nodeEnv}`)
  if (DEBUG) console.log(`<d> Reading file:\t${envFile}`)
  const env = dotenv.config({ path: envFile }).parsed
  if (!env) {
    throw new Error(`A configuration file must be specified (.env), not found in: ${envFile}`)
  }
  if (DEBUG)
    console.log(
      `<d> Connecting with ${env.MYSQL_HOST}:${env.MYSQL_PORT} using ${env.MYSQL_USER} to ${env.MYSQL_DB_NAME}`
    )
  return env
}

const env = readFileEnv()

const config: Options = {
  driver: MySqlDriver,
  dbName: env.MYSQL_DB_NAME,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASS,
  entities: entities,
  // persistOnCreate: true,
  // allowGlobalContext: true, // see: https://stackoverflow.com/questions/71117269/validation-error-using-global-entity-manager-instance-methods-for-context-speci
  // migrations: {
  //   path: 'dist/migrations',
  //   pathTs: 'src/migrations',
  // },
  schemaGenerator: {
    disableForeignKeys: false,
  },
  // seeder: {
  //   path: './src/seeders', // path to the folder with seeders
  //   // pathTs: undefined, // path to the folder with TS seeders (if used, we should put path to compiled files in `path`)
  //   glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
  //   emit: 'ts', // seeder generation mode
  //   fileName: (className: string) => className, // seeder file naming convention
  // },
}

export default config
