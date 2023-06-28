import React from 'react'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'reactstrap'

import Header from './Header.component'

const DashboardPage: FC<any> = ({ navigate }) => {
  console.log(`___incoming navigate in dashboardPage : `)
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default DashboardPage