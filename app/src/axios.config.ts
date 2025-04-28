import axios from 'axios'
// import { getAuthToken } from './localStorage.util'
// import { DEBUG } from '../costants'

const instance = axios.create()

// TODO: axios.interceptions.request.use()

instance.interceptors.request.use(
  (config) => {
    // const token = getAuthToken() || ''
    return {
      ...config,
      headers: {
        // Authorization: `${token}`,
      },
    }
  },
  (error) => {
    // if (DEBUG) console.warn(`__(ajax)__Error on request`, error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // if (DEBUG) console.log(`__(ajax)__Working status code: ${response.status}`)
    return response
  },
  function (error) {
    // if (DEBUG) console.log(`__(ajax)__Error status code: ${error.status}`)
    if (error.status === 404) {
      return Promise.reject({ message: 'NotFound' })
    }
    return Promise.reject(error.response.data)
  }
)

export default instance
