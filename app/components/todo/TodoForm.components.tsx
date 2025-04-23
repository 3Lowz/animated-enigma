import React, { useState } from 'react'
import { ITodo } from './todo'

export interface ITodoForm {
  onAdd: (ev: React.ChangeEvent<HTMLInputElement>) => void
  todo?: ITodo
}

const TodoForm: React.FC<ITodoForm> = ({ onAdd, todo }) => {
  const [blob, setBlob] = useState(todo?.blob || '')
  const [isDone, setIsDone] = useState(todo?.isDone || false)

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
        <button type="button" onClick={() => onAdd({ blob, isDone })}>
          submit
        </button>
      </form>
    </>
  )
}

export default TodoForm
