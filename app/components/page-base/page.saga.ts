import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { PageBaseActionTypes, IPageBaseActionTypes } from './types.d'

import {
    incrementCounter,
    decrementCounter
} from './page.actions'

function* increment(action: IPageBaseActionTypes) {
  yield put(incrementCounter())
}

function* decrement(action: IPageBaseActionTypes) {
  yield put(decrementCounter())
}

function* pageBaseSaga() {
  takeLatest(PageBaseActionTypes.COUNTER_INCREMENT, increment)
  takeLatest(PageBaseActionTypes.COUNTER_DECREMENT, decrement)
}

export default pageBaseSaga;

