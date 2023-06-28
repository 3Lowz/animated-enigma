/**
 * Actions
 */
export enum PageBaseActionTypes {
  COUNTER_INCREMENT = "COUNTER_INCREMENT",
  COUNTER_DECREMENT = "COUNTER_DECREMENT",
}

/**
 * Example types for API calls
 */
export interface IMetaList {
  count: number
  offset?: number
  limit?: number
}

export interface IDataList {
  list: any[]
}

export interface IAjaxResponse {
  data: any
  list: IDataList
  meta: IMetaList
}

export interface IEntity { // Example entity
  email: string
  id: string
  mobile?: string
  username: string
}

/**
 * Page Component Props 
 */
export interface IPageBaseState {
  isLoading: boolean
  counter: number
  // customerList: ICustomer[]
  // metaList: IMetaListCustomers | {}
  // customerSelected: ICustomerDetail | {}
}

/**
 * Generics
 */
export enum OrderEnum {
  DESC= 'desc',
  ASC= 'asc',
}
export type BaseColumnType = 'id'

export type PageSizeOptsType = 10 | 20 | 50 | 100 
export type PageSizeOptsLabelType = '10' | '20' | '50' | '100' 

export interface PagesizeOptsInt {
    value: PageSizeOptsType
    label: PageSizeOptsLabelType
}


export interface IConfig<ColumnType=BaseColumnType> {
  limit: PageSizeOptsType
  offset: number
  column: ColumnType
  order: OrderEnum
  where?: string
}

export type ActionIncrementCounter = {
  type: PageBaseActionTypes.COUNTER_INCREMENT
}
export type ActionDecrementCounter = {
  type: PageBaseActionTypes.COUNTER_DECREMENT
}

export type IPageBaseActionTypes = ActionIncrementCounter | ActionDecrementCounter