import React from "react"
// import PageLayout from "../../layouts/page-layout-v2"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"
import FullPageCenterContent from "../../components/wrappers/FullPageCenterContent"
import styled from "styled-components"
import { Link } from "gatsby"

const FullPageBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: {magenta};
  margin-top: calc(var(--topNavBarHeight) * -1);
  margin-bottom: calc(var(--topFooterHeight) * -1);
  min-height: 100vh;
`

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--topNavBarHeight);
  padding-bottom: var(--topFooterHeight);
  flex-direction: column;
  width: 100%;
`

const DevFullPageBackgroundPage = props => {
  return (
    <DevPage title="Full Page Background" location={props.location}>
      <FullPageSection>
        <FullPageBackground>
          <Padding>
            <FullPageCenterContent>
              <Link to="/dev">Back to Development Overview</Link>
              <h1>Full Page Background</h1>
            </FullPageCenterContent>
          </Padding>
        </FullPageBackground>
      </FullPageSection>
    </DevPage>
  )
}

export default DevFullPageBackgroundPage
