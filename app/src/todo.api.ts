import axios from 'axios'
import { ITodo } from '../components/todo/todo'

import { logAndThrowError } from './utils'
// custom axios
// import axios from './axios.config'

const BASE_URL = 'http://127.0.0.1:5000'

export default class TodoAPI {
  static getList() {
    return axios
      .get(`${BASE_URL}/todo/`)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.error(err.message)
        throw err
      })
  }

  static create(data: ITodo) {
    return axios
      .post(`${BASE_URL}/todo/`, { ...data }, { headers: { 'Content-Type': 'application/json' } })
      .then((res) => res.data)
      .catch((err) => logAndThrowError(err))
  }
}
