import React from "react"
// import styled, { css } from "styled-components"
import DevPage from "../../layouts/dev-page-layout"
import FullPageCenterContent from "../../components/wrappers/FullPageCenterContent"
import { Link } from "gatsby"

/*
const border = css`
  border-style: solid;
  border-color: var(--neon-purple);
  border-width: 2px;
  color: var(--neon-purple);

  &:hover {
    color: var(--neon-purple);
    background: rgba(41, 0, 251, 0.2);
  }
`
*/

const Page = props => {
  return (
    <DevPage title="Borders" location={props.location}>
      <FullPageCenterContent>
        <Link to="/dev">Back to Development Overview</Link>
        <h1>Responsive</h1>
      </FullPageCenterContent>
    </DevPage>
  )
}

export default Page
