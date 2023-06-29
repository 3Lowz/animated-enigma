const API_URL = 'localhost:3000/api/v0/'

class PageApiService {

  static async resolvePromise(): Promise<any> {
    const xhr = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ success: true, test: 'ok' }])
      }, 1500)
    })
    return xhr
  }

  /*    Example with real Axios / Fetch running
  static async getDate(params?: any): Promise<ErrorResponse|AxiosResponse<ResourceType>> {
    return await AxiosInstance.get(`${API_URL}`, { params })
      .catch(function (error: ErrorResponse) {
        //? se error è uno standard potrei fare gestire questo errore in un unico punto?
        const { message } = error;
        toast.error(message);
        return error
      })
  }
  */
}

export default PageApiService
