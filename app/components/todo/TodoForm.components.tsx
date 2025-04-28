import React, { MouseEventHandler, useState } from 'react'
import { ITodo } from './todo'

export interface ITodoForm {
  onAdd: (ev: React.ChangeEvent<HTMLInputElement> | ITodo) => void
  todo?: ITodo
}

const TodoForm: React.FC<ITodoForm> = ({ onAdd, todo }) => {
  const [blob, setBlob] = useState(todo?.blob || '')
  const [isDone, setIsDone] = useState(todo?.isDone || false)

  const onInternalAdd = (ev: MouseEventHandler<HTMLButtonElement>) => {
    const todo: ITodo = { blob, isDone }
    setBlob('')
    setIsDone(false)
    if (!!onAdd && typeof onAdd === 'function')
      // @ts-ignore
      onAdd(todo)
  }

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, checked } = ev.target
    if (id === 'done') {
      setIsDone(checked)
    } else {
      setBlob(value)
    }
  }

  return (
    <>
      <form>
        <input type="text" name="blob" id="blob" onChange={onChange} />
        <input type="checkbox" name="isDone" id="done" checked={isDone} onChange={onChange} />
        <button type="button" onClick={onInternalAdd}>
          submit
        </button>
      </form>
    </>
  )
}

export default TodoForm
