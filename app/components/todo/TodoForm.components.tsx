import React, { MouseEventHandler, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

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
    if (id === 'isDone') {
      setIsDone(checked)
    } else {
      setBlob(value)
    }
  }

  return (
    <Form>
      <Row>Insert new Todo:</Row>
      <Row>
        <FormGroup floating>
          <Label for="blob">Blob</Label>
          <Input type="text" placeholder={blob} name="blob" id="blob" onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Label for="isDone">IsDone</Label>
          <Input type="checkbox" name="isDone" id="isDone" checked={isDone} onChange={onChange} />
        </FormGroup>
      </Row>
      <Button type="button" onClick={onInternalAdd}>
        Submit
      </Button>
    </Form>
  )
}

export default TodoForm
