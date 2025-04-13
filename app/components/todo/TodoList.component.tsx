import React from 'react'
import { ITodo } from './todo'
import TodoItem from './TodoItem.component'

export interface ITodoList {
  todos: Array<ITodo>
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return <TodoItem todo={todo} key={i} />
        })}
      </ul>
    </>
  )
}

export default TodoList
