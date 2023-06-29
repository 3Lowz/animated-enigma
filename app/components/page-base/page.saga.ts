import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import ApiService from './page.api.service'
import { PageBaseActionTypes, IPageBaseActionTypes } from './types.d'

import {
    incrementCounter,
    decrementCounter,
    fetchSuccess
} from './page.actions'

function* increment(action: IPageBaseActionTypes) {
  yield put(incrementCounter())
}

function* decrement(action: IPageBaseActionTypes) {
  yield put(decrementCounter())
}

function* fetchData(action: IPageBaseActionTypes) {
  const data = yield call(ApiService.resolvePromise)
  // TODO: eventually handle errors
  yield put(fetchSuccess(data))
}

function* pageBaseSaga() {
  takeLatest(PageBaseActionTypes.COUNTER_INCREMENT, increment)
  takeLatest(PageBaseActionTypes.COUNTER_DECREMENT, decrement)
  yield takeLatest(PageBaseActionTypes.FETCH_SEND, fetchData)
}

export default pageBaseSaga;

