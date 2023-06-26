import { PageContainerPropeties } from './types'
import React from 'react'
import { Container } from 'reactstrap'

const PageContainer = ({ children }: PageContainerPropeties) => {
  return (
    <React.Fragment>
      <Container fluid>{children}</Container>
    </React.Fragment>
  )
}

export default PageContainer
