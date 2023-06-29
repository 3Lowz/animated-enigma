import {
  IPageBaseState,
  PageBaseActionTypes,
  IPageBaseActionTypes,
} from './types.d'

const initialState: IPageBaseState = {
  isLoading: false,
  counter: 0
}

const pageBaseReducer = (state = initialState, action: IPageBaseActionTypes) => {
  switch (action.type) {
    case PageBaseActionTypes.COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case PageBaseActionTypes.COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case PageBaseActionTypes.FETCH_SEND:
      return { ...state, isLoading: true }
    case PageBaseActionTypes.FETCH_SUCCESS:
      return { ...state, isLoading: false }
    default:
      state = { ...state }
      break
  }
  return { ...state }
}

export default pageBaseReducer
