import React from "react"
// import styled from "styled-components"

import styles from "../src/styles/styles"

import HeroHeader from "../src/components/heroHeader/HeroHeader"
import TopNavBar from "../src/components/topNav/TopNavBar"
import TopFooter from "../src/components/topFooter/TopFooter"
import PageContentWrapper from "../src/components/wrappers/PageWrapper"
import BottomFooter from "../src/components/bottomFooter/BottomFooter"

import LogoContext from "../src/context/LogoContext"
import EventsContext from "../src/context/eventsContext"
// import Logo from "../components/topNav/Logo"
// import ThemeContext from "../context/ThemeContext"

const PageLayout = props => {
  // window.scrollTo(0, styles.variables.heroHeaderHeight)

  styles.SetCSSGlobals()

  return (
    <EventsContext.Consumer>
      {eventsContext => (
        <LogoContext.Consumer>
          {logoContext => (
            <>
              <HeroHeader />
              <TopNavBar location={props.location} logoContext={logoContext} />
              <PageContentWrapper eventsContext={eventsContext}>
                {props.children}
              </PageContentWrapper>
              <TopFooter />
              <BottomFooter />
            </>
          )}
        </LogoContext.Consumer>
      )}
    </EventsContext.Consumer>
  )
}

export default PageLayout
