import React, { FC } from 'react'
import { Alert, Badge, Button, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from './page.actions'

const PageOne: FC = () => {

  const x = useSelector((state) => {
    // @ts-ignore
    return state.PageBase
  })
  const count = x.counter
  console.log(x);


  // TODO: Implmement currying
  const dispatch = useDispatch()

  const add = () => {
    dispatch(incrementCounter())
  }

  const sub = () => {
    dispatch(decrementCounter())
  }

  return (
    <>
      <Container>
        <Alert>Base</Alert>
        <h1>Page One</h1>
        <div>
          <Button color="warning" onClick={sub}>Decrement</Button>
          <Badge color="danger">{count}</Badge>
          <Button color="primary" onClick={add}>Increment</Button>
        </div>
      </Container>
    </>
  )
}

export default PageOne
