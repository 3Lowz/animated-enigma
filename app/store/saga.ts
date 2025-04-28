import { all, fork } from 'redux-saga/effects'
import pageBaseSaga from './../components/page-base/page.saga'
import todoSaga from '../components/todo/todo.saga'

export default function* rootSaga() {
  yield all([
    // fork(pageBaseSaga),
    fork(todoSaga),
  ])
}
