import React from 'react'
import { Alert, Container } from 'reactstrap'
import TodoList from './todo/TodoList.component'

const TodoPage: React.FC = () => {
  return (
    <Container>
      <Alert>Todo</Alert>
      <h1>Todo page</h1>
      <div>
        <div>
          <TodoList todos={[]} />
        </div>
        <div></div>
      </div>
    </Container>
  )
}

export default TodoPage
