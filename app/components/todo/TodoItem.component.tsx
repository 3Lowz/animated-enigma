import React from 'react'
import { InputGroup, InputGroupText, Input, ListGroupItem } from 'reactstrap'

import { ITodo } from './todo'

export interface ITodoItem {
  todo: ITodo
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  return (
    <ListGroupItem>
      <InputGroup>
        <InputGroupText>
          <Input addon type="checkbox" id="done" checked={todo.isDone} onChange={() => {}} />
        </InputGroupText>
        <Input value={todo.blob} disabled />
      </InputGroup>
    </ListGroupItem>
  )
}

export default TodoItem
