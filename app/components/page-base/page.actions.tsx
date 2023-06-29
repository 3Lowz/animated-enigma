import {
  PageBaseActionTypes,
  ActionIncrementCounter,
  ActionDecrementCounter,
  ActionFetchResource,
} from './types.d'

export const incrementCounter = (): ActionIncrementCounter => {
  return {
    type: PageBaseActionTypes.COUNTER_INCREMENT
  }
}

export const decrementCounter = (): ActionDecrementCounter => {
  return {
    type: PageBaseActionTypes.COUNTER_DECREMENT
  }
}

export const fetchResource = (): ActionFetchResource => {
  return {
    type: PageBaseActionTypes.FETCH_SEND
  }
}

export const fetchSuccess = (data: any): ActionFetchResource => {
  return {
    type: PageBaseActionTypes.FETCH_SUCCESS,
    payload: data
  }
}
