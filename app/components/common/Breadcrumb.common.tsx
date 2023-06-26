import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { BreadcrumbsProperties, BreadcrumbProperties } from './types'

const Breadcrumb = (props: BreadcrumbsProperties) => {
  const { pages, id } = props

  const [currPage, setCurrPage] = useState<string>('')

  // Why should we set the lastest page?
  // useEffect(() => {
  //   if (pages.length > 0) {
  //     setCurrPage(pages[pages.length - 1]?.title)
  //   }
  // }, [])

  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">
              {currPage}
              {id ? `: ${id}` : null}
            </h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                {/* <li className="breadcrumb-item"><Link to="#">{pageTitle}</Link></li> */}
                {pages.length > 0 ?
                  pages
                    .filter((_, index, arr) => index !== arr.length - 1) //delete last
                    .map((curr, idx) => {
                      return <BreadcrumbItem page={{ ...curr, index: idx }} />
                    })
                  : <li></li>}
                <li className="breadcrumb-item active">{currPage}</li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export const BreadcrumbItem = (props: BreadcrumbProperties) => {
  const { page } = props
  return <React.Fragment>
      <li key={page.index} className="breadcrumb-item">
        <Link to={page.url ? page.url : '/#'}>{page.title}</Link>
      </li>
    </React.Fragment>
}


export default Breadcrumb
