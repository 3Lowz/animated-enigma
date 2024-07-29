  import { Container, Col, Row } from 'reactstrap'
// import PageContainer from '../../Components/Common/PageContainer'
import { Outlet } from 'react-router'
import React, { FC } from 'react'

import Breadcrumb from '../common/Breadcrumb.common'
import PageHeader from './Page.header'

// export default PageContainer

const BasePage: FC = () => {
  // Move
  document.title = 'Page Example - Example'

  const breadcrumbPages = [
    {
      title: 'Example Page',
    },
    {
      title: 'Example Second',
    },
  ]

  return (
    <Container>
      <Breadcrumb pages={breadcrumbPages} />
      <PageHeader />
      <Row>
        <Col>
          <div className="content">
            <h1>Example Page</h1>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BasePage
