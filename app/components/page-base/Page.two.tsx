import React, { FC } from 'react'
import { Alert, Container, Button, Spinner, Row } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchResource } from './page.actions'

const PageTwo: FC = () => {

  const state = useSelector((state) => {
    // @ts-ignore
    return state.PageBase
  })
  const dispatch = useDispatch()

  const loader = (state.isLoading) ? <Spinner color="danger" /> : <></>
  const fetch = () => {
    dispatch(fetchResource())
  }

  return (
    <>
      <Container>
        <Alert>Base</Alert>
        <h1>Page Two</h1>
        <Row>
          <Button color="primary" onClick={fetch}>Fetch me!</Button>
        </Row>
        <Row>
          {loader}
        </Row>
        <>
          State now is: {JSON.stringify(state)}
        </>
      </Container>
    </>
  )
}

export default PageTwo
