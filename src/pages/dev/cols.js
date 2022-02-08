import React from "react"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"
import styled from "styled-components"
import { Link } from "gatsby"

const Col = styled.div`
  display: flex;
  width: ${props => props.w};
  background: ${props => props.bg};
`

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const DevColsPage = props => {
  return (
    <DevPage title="Examples" location={props.location}>
      <FullPageSection>
        <Link to="/dev">Back to Development Overview</Link>
        <h1>Cols</h1>
        <RowWrap>
          <Col w="12.5%" bg="magenta">
            1
          </Col>
          <Col w="25%" bg="cyan">
            2
          </Col>
          <Col w="25%" bg="magenta">
            3
          </Col>
          <Col w="25%" bg="cyan">
            4
          </Col>
          <Col w="12.5%" bg="magenta">
            5
          </Col>
        </RowWrap>
        <RowWrap>
          <Col w="calc(100% /3)" bg="magenta">
            1
          </Col>
          <Col w="calc(100% /3)" bg="cyan">
            2
          </Col>
          <Col w="calc(100% /3)" bg="magenta">
            3
          </Col>
        </RowWrap>
      </FullPageSection>
    </DevPage>
  )
}

export default DevColsPage
