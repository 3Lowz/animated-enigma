import { Col, Row } from 'reactstrap'
// import PageContainer from '../../Components/Common/PageContainer'
import Breadcrumb from '../common/Breadcrumb.common'
import PageContainer from '../common/PageContainer.common'
import { Outlet } from 'react-router'

import React from 'react'

// export default PageContainer

const RoutingPage = () => {
  // Move
  document.title = 'Page Example - Example'

  const breadcrumbPages = [
    {
      title: 'Route One',
    },
    {
      title: 'Route Two',
    },
  ]

  return (
    <PageContainer>
      <Breadcrumb pages={breadcrumbPages} />
      <Row>
        <Col>
          <div className="h-100">
            <h1>Example Page</h1>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </Col>
      </Row>
    </PageContainer>
  )
}

export default RoutingPage

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

/*

    <div className="content">
      <Outlet />
    </div>


    */
