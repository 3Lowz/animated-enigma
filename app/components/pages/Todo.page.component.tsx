import React, { useEffect, useState } from 'react'
import { Alert, Container, Col, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import TodoList from '../todo/TodoList.component'
import TodoForm from '../todo/TodoForm.components'
import { ITodo } from '../todo/todo'
import { addTodo, getList } from '../todo/todo.slice'

const TodoPage: React.FC = () => {
  const dispatch = useDispatch()
  // const [todos, setTodos] = useState([] as ITodo[])

  // @ts-ignore
  const todos = useSelector((state) => state?.todo?.list ?? [])

  let todo: ITodo = { blob: '', isDone: false }

  const onAdd = (todo: ITodo) => {
    console.log(`TODO: `)
    // @ts-ignore
    dispatch(addTodo(todo))
    // todo = { blob: '', isDone: false }
    todo = { blob: '', isDone: true }
  }

  useEffect(() => {
    dispatch(getList())
  }, [])

  return (
    <Container>
      <Row>
        <Alert>Todo</Alert>
        <h1>Todo page</h1>
      </Row>
      <Row>
        <Col>
          <TodoList todos={todos} />
        </Col>
        <Col>
          <Row>
            <TodoForm onAdd={onAdd} todo={todo} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default TodoPage
