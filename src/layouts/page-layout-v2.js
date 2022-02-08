import React from "react"
// import styled from "styled-components"
import styles from "../styles/styles"

import HeroHeader from "../components/heroHeader/HeroHeader"
import TopNavBar from "../components/topNav/TopNavBar"
import TopFooter from "../components/topFooter/TopFooter"
import BottomFooter from "../components/bottomFooter/BottomFooter"
import PageContainer from "../components/containers/PageContainer"

// import LogoContext from "../context/LogoContext"
// import EventsContext from "../context/eventsContext"

const ContainerDevPage = props => {
  // window.scrollTo(0, styles.variables.heroHeaderHeight)

  styles.SetCSSGlobals()

  return (
    // <EventsContext.Consumer>
    //   {eventsContext => (
    //     <LogoContext.Consumer>
    //       {logoContext => (
    <>
      <HeroHeader />
      <TopNavBar
        location={props.location}
        // logoContext={logoContext}
      />
      <PageContainer
        pageCSS={props.pageCSS}
        // eventsContext={eventsContext}
      >
        {props.children}
      </PageContainer>
      <TopFooter />
      <BottomFooter />
    </>
    //       )}
    //     </LogoContext.Consumer>
    //   )}
    // </EventsContext.Consumer>
  )
}

export default ContainerDevPage
