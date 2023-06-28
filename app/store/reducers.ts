import { combineReducers } from 'redux'
import PageBase from './../components/page-base/page.reducers'

const rootReducer = combineReducers({
  PageBase
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;