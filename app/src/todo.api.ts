import axios from 'axios'
// custom axios
// import axios from './axios.config'

const BASE_URL = 'http://localhost:5000'

export default class TodoAPI {
  static getList() {
    return axios
      .get(`${BASE_URL}/todo/list`)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.error(err.message)
        throw err
      })
  }
}
