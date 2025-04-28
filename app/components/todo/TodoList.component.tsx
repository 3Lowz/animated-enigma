import React from 'react'
import { ListGroup } from 'reactstrap'

import { ITodo } from './todo'
import TodoItem from './TodoItem.component'

export interface ITodoList {
  todos: Array<ITodo>
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <>
      <ListGroup>
        {todos.map((todo, i) => {
          return <TodoItem todo={todo} key={i} />
        })}
      </ListGroup>
    </>
  )
}

export default TodoList
