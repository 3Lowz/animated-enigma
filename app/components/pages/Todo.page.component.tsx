import React, { useState } from 'react'
import { Alert, Container } from 'reactstrap'
import TodoList from '../todo/TodoList.component'
import TodoForm from '../todo/TodoForm.components'
import { ITodo } from '../todo/todo'

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[])
  let todo: ITodo = { blob: '', isDone: false }

  const onAdd = (addTodo) => {
    console.log(`TODO: `)
    const update: ITodo[] = [...todos, addTodo]
    setTodos(update)
    // todo = { blob: '', isDone: false }
  }

  return (
    <Container>
      <Alert>Todo</Alert>
      <h1>Todo page</h1>
      <Container>
        <div>
          <div>
            <TodoList todos={todos} />
          </div>
          <div>
            <TodoForm onAdd={onAdd} todo={todo} />
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default TodoPage
