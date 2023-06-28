import { createStore, applyMiddleware, compose } from 'redux'
// import { configureStore as init} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './saga'

/*
  Senza questa dichiarazione  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  da errore 
  e redux-devtools-extension non ha aiutato( da eliminare dipendenza se non usata)
  https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens
*/
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware,
  // logger //for debug
]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

type initialState = {}

export function configureStore(initialState: initialState) {
  const store = createStore(
    rootReducer,
      initialState,
      composeEnhancers(
          applyMiddleware(...middlewares)
      ),
  )
  sagaMiddleware.run(rootSaga)
  return store
}