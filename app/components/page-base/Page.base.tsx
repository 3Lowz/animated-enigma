import { Col, Row } from 'reactstrap'
// import PageContainer from '../../Components/Common/PageContainer'
import Breadcrumb from '../common/Breadcrumb.common'
import PageContainer from '../common/PageContainer.common'
import { Outlet } from 'react-router'

import React from 'react'
import PageHeader from './Page.header'

// export default PageContainer

const BasePage = () => {
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
    <PageContainer>
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
    </PageContainer>
  )
}

export default BasePage

/*
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header.dashboard'
import SideMenu from './SideMenu.dashboard'

const DashboardPage: FC<any> = ({ navigate }) => {
  console.log(`___incoming navigate in dashboardPage : `)
  return (
    <>
      <Header />
      {/* <SideMenu /> <<>>/}
      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default DashboardPage
*/
