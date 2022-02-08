import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

import HeroHeader from "../../components/heroHeader/HeroHeader"
import TopNavBar from "../../components/topNav/TopNavBar"
import TopFooter from "../../components/topFooter/TopFooter"
import BottomFooter from "../../components/bottomFooter/BottomFooter"
import PageContainer from "../../components/containers/PageContainer"
import LogoContext from "../../context/LogoContext"
// import Logo from "../components/topNav/Logo"
// import ThemeContext from "../context/ThemeContext"
import FullPageSection from "../../components/wrappers/FullPageSection"
import FullPageBackground from "../../components/backgrounds/FullPageBackground"
import PageSection from "../../components/wrappers/PageSection"

const ContentPositionWrap = styled.div`
  display: flex;
  min-width: 100%;
  // min-height: 100%;
  // background: yellow;
  ${styles.centerCol}
`

const ContentSizeWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxPageWidth);
`

const ContentContainer = props => {
  return (
    <ContentPositionWrap>
      <ContentSizeWrap>{props.children}</ContentSizeWrap>
    </ContentPositionWrap>
  )
}

// Mostly for styling
const Article = styled.main`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  h1 {
    color: magenta;
  }
`

const ContainerDevPage = props => {
  // window.scrollTo(0, styles.variables.heroHeaderHeight)

  styles.SetCSSGlobals()

  return (
    <LogoContext.Consumer>
      {logoContext => (
        <>
          <HeroHeader />
          <TopNavBar location={props.location} logoContext={logoContext} />
          <PageContainer>
            <Article>
              <ContentContainer>
                <FullPageSection>
                  <h1>Hello World!</h1>
                </FullPageSection>
              </ContentContainer>
              <FullPageBackground background={"rgba(0,255,0, 0.4)"}>
                <ContentContainer>
                  <PageSection>
                    <h1>Hello World</h1>
                  </PageSection>
                </ContentContainer>
              </FullPageBackground>
              <FullPageBackground background={"rgba(0,0,255, 0.4)"}>
                <ContentContainer>
                  <FullPageSection>
                    <h1>Hello World!</h1>
                  </FullPageSection>
                </ContentContainer>
              </FullPageBackground>
            </Article>
          </PageContainer>
          <TopFooter />
          <BottomFooter />
        </>
      )}
    </LogoContext.Consumer>
  )
}

export default ContainerDevPage
