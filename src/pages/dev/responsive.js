import React from "react"
import styled, { css } from "styled-components"
import styles from "../../styles/styles"
// import PageLayout from "../../layouts/page-layout"
// import FullPageCenterContent from "../../components/wrappers/FullPageCenterContent"
import DevPage from "../../layouts/dev-page-layout"
import getRandomColor from "../../functions/getRandomColor"
import FlexElement from "../../components/elements/FlexElement"
import FullPageSection from "../../components/sections/FullPageSection"
// import Content from "../../components/wrappers/Content"
import { Link } from "gatsby"

const boxStyle = css`
  display: flex;
  width: calc(100% - var(--gutter));
  height: fit-content;
  background: ${props => props.bg};
  margin: var(--halfGutter);
`

// Hide Under

const HideUnderStyle = styled.div`
  ${boxStyle}
  ${styles.responsive.hideUnder}
`

const HideUnder = () => {
  return (
    <HideUnderStyle hideUnder={480} bg={getRandomColor}>
      <h2>Hide Under 480px</h2>
    </HideUnderStyle>
  )
}

// Hide Between

const HideBetweenStyle = styled.div`
  ${boxStyle}
  ${styles.responsive.hideBetween}
`

const HideBetween = () => {
  return (
    <HideBetweenStyle hideUnder={720} hideOver={480} bg={getRandomColor}>
      <h2>Hide Between 480px and 720px</h2>
    </HideBetweenStyle>
  )
}

// Hide Outside

const HideOutsideStyle = styled.div`
  ${boxStyle}
  ${styles.responsive.hideOutside}
`

const HideOutside = () => {
  return (
    <HideOutsideStyle hideUnder={480} hideOver={720} bg={getRandomColor}>
      <h2>Hide Outside 480px and 720px </h2>{" "}
    </HideOutsideStyle>
  )
}

// Hide Over

const HideOverStyle = styled.div`
  ${boxStyle}
  ${styles.responsive.hideOver}
`

const HideOver = () => {
  return (
    <HideOverStyle hideOver={720} bg={getRandomColor}>
      <h2>Hide Over 720px</h2>
    </HideOverStyle>
  )
}

const ResponsiveDevPage = props => {
  return (
    <DevPage title="Responsive" location={props.location}>
      <FullPageSection>
        <Link to="/dev">Back to Development Overview</Link>
        <h1>Responsive</h1>
        <FlexElement col={12} height={"40px"}>
          <HideUnder />
        </FlexElement>
        <FlexElement col={12} height={"40px"}>
          <HideBetween />
        </FlexElement>
        <FlexElement col={12} height={"40px"}>
          <HideOutside />
        </FlexElement>
        <FlexElement col={12} height={"40px"}>
          <HideOver />
        </FlexElement>
      </FullPageSection>
    </DevPage>
  )
}

export default ResponsiveDevPage
