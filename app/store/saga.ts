import { all, fork } from 'redux-saga/effects'
import pageBaseSaga from './../components/page-base/page.saga'

export default function* rootSaga() {
  yield all([
    fork(pageBaseSaga),
  ]);
}
