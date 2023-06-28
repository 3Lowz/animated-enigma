// // import AxiosInstance from '../axiosConfig';
// import { toast } from 'react-toastify';
// import {
//     // GetListParamsInterface,
//     // IRidesApiResponse
//     IGetListUsersResponse,
//     IGetSingleCustomer,
// } from './defCustomersApi'
// import { ErrorResponse } from '../defGenericRequest';
// import { AxiosResponse } from 'axios'

// const BASE_URL = process.env.REACT_APP_API_BASE_URL ?  process.env.REACT_APP_API_BASE_URL : 'there\'isnt BASE_URL';
// const API_URL = '/user'
// // const API_URL_TRACK_RIDE = '/ride/trackRide'

// class CustomersApi {

//     static async getListCustomers(params?: any/*: GetListParamsInterface*/): Promise<ErrorResponse | AxiosResponse<IGetListUsersResponse>> {

//        return await AxiosInstance.get(`${BASE_URL}${API_URL}`, {params})
//             .catch(function (error: ErrorResponse) {
//                 //? se error è uno standard potrei fare gestire questo errore in un unico punto?
//                 const { message } = error;
//                 toast.error(message);
//                 return error
//             })
//     }

//     static async getSingleCustomer(id: string): Promise<ErrorResponse | AxiosResponse<IGetSingleCustomer>> {
//         const ID = `/${id}`
//        return await AxiosInstance.get(`${BASE_URL}${API_URL}${ID}`)
//         .catch(function (error: ErrorResponse) {
//             const { message } = error;
//             toast.error(message);
//             return error
//         })
//     }

// }

// export default CustomersApi

export {}