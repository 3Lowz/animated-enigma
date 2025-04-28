import { call, put, takeLatest, select } from 'redux-saga/effects'
import { addTodo, getList, setList, onError } from './todo.slice'

import { ITodo } from './todo'
import TodoAPI from '../../src/todo.api'

import { logAndThrowError } from '../../src/utils'

export function* handleGetList() {
  try {
    const beTodos = yield call(TodoAPI.getList)
    console.log(beTodos)
    yield put(setList(beTodos))
  } catch (err: any) {
    logAndThrowError(err)
  }
}

export function* handleAddTodo({ payload }) {
  console.log(`saga:handleAddTodo`, payload)
  // validation
  try {
    const newest = yield call(TodoAPI.create, payload)
    const current = yield select((state) => state.todo.list)
    const update = current.concat(newest)
    yield put(setList(update))
  } catch (err) {
    logAndThrowError(err)
  }
}

const todoSaga = function* () {
  yield takeLatest(getList.type, handleGetList)
  yield takeLatest(addTodo.type, handleAddTodo)
}
export default todoSaga
