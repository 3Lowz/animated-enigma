// import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './reducers'
import rootSaga from './saga'

export function newConfigStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: rootReducers,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // thunk: false,
        immutableCheck: false,
        serializableCheck: false,
      }).concat(sagaMiddleware),
    // devTools: process.env.NODE_ENV !== 'production'
  })

  // then run the saga
  sagaMiddleware.run(rootSaga)

  // @ts-ignore
  const action = (type) => store.dispatch({ type })
  console.log(`Store created`)
  return store
}

export default newConfigStore()

/**
 * OLD WAY
 */

/*
  Senza questa dichiarazione  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  da errore 
  e redux-devtools-extension non ha aiutato( da eliminare dipendenza se non usata)
  https://stackoverflow.com/questions/52800877/error-with-redux-devtools-extension-using-ts-property-redux-devtools-extens
*/
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//   }
// }

// const sagaMiddleware = createSagaMiddleware()
// const middlewares = [
//   sagaMiddleware,
//   // logger //for debug
// ]
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// type initialState = {}

// export function configStore(initialState: initialState) {
//   const store = configureStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))
//   sagaMiddleware.run(rootSaga)
//   return store
// }
