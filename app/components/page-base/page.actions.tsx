import {
  PageBaseActionTypes,
  ActionIncrementCounter,
  ActionDecrementCounter,
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
