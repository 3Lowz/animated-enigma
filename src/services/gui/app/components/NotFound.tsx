import React from 'react'
import { Alert, Container } from 'reactstrap'

const NotFound: React.FC = () => {
  return (<>
    <Container>
      <Alert>Not Found</Alert>
      <h1>Page Not Found</h1>
    </Container>
  </>)
}

export default NotFound