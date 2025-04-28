import { call, put, takeLatest, select } from 'redux-saga/effects'
import { addTodo, getList, setList, onError } from './todo.slice'

import { ITodo } from './todo'

export function* handleGetList() {
  yield put(setList([]))
}

export function* handleAddTodo({ payload }) {
  console.log(`saga:handleAddTodo`)
  // validation

  const current = yield select((state) => state.todo.list)
  // const udpate = [...current].concat([payload])
  console.log(current)
  yield put(setList([...current, payload]))
}

const todoSaga = function* () {
  yield takeLatest(getList.type, handleGetList)
  yield takeLatest(addTodo.type, handleAddTodo)
}
export default todoSaga
