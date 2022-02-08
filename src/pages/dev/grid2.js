import React from "react"
// import PageLayout from "../../layouts/page-layout"
// import FullPageCenter from "../../components/wrappers/FullPageCenter"
import DevPage from "../../layouts/dev-page-layout"
import styled, { css } from "styled-components"
import styles from "../../styles/styles"
// import Flex from "../../components/elements/Flex"
// import { Link } from "gatsby"
import Content from "../../components/wrappers/Content"

/*
const Flex = styled.div`
  display: flex;
  width: ${props => (props.w ? props.w : "100%")};
  height: ${props => (props.h ? props.h : "100%")};
  background: ${props => props.bg};
  flex-direction: ${props => props.dir};
`

const RowWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const ColWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
*/

const style = css`
  position: relative;
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  flex-grow: ${props => (props.grow ? props.grow : "0")};

  // Width
  min-width: ${props => (props.cW / 12) * props.col * 0.8 + "px"};

  @media (max-width: ${props => (props.cW / 12) * props.col * 0.8 + "px"}) {
    min-width: calc(100% - var(--gutter));
  }

  max-width: ${props => (props.cW / 12) * props.col * 1.2 + "px"};

  flex-basis: calc(
    ${props => (100 / 12) * props.col + "%"}
      ${props =>
        props.margin
          ? "- " + 2 * parseFloat(props.margin.replace("px", "")) + "px"
          : ""}
  );

  margin: ${props => (props.margin ? props.margin : "0")};

  // Height
  ${props => (props.height ? "height: " + props.height + ";" : "")}

  // Background
  ${props => (props.bg ? "background: " + props.bg + ";" : "")}

  // Content Position
  ${props => (props.contentPosition ? props.contentPosition : "")}
  
  // Responsive (hideUnder and hideOver)
  ${props => (props.responsive ? props.responsive : "")} // overflow: hidden;
`

const Element = styled.div`
  ${style}
`

const FlexElement = props => {
  var calculatedWidth

  if (props.margin)
    calculatedWidth =
      parseInt(styles.variables.maxPageWidth) +
      parseInt(props.margin.replace("px", ""))
  else calculatedWidth = parseInt(styles.variables.maxPageWidth)

  return (
    <Element
      bg={props.bg}
      col={props.col}
      flow={props.flow}
      margin={props.margin}
      height={props.height}
      grow={props.grow}
      cW={calculatedWidth}
      style={props.style}
      contentPosition={props.contentPosition}
      responsive={props.responsive}
      hideUnder={props.hideUnder}
      hideOver={props.hideOver}
    >
      {props.children}
    </Element>
  )
}

const DevGridPage = props => {
  return (
    <DevPage title="Grid 2" location={props.location}>
      <Content flow="row">
        <FlexElement style={{ background: "cyan" }} flow="column" col={12}>
          <FlexElement height="100%" flow="column" col={12}>
            <FlexElement height="25%">1</FlexElement>
            <FlexElement height="50%">
              <FlexElement style={{ background: "magenta" }} col={12}>
                2
              </FlexElement>
            </FlexElement>
            <FlexElement height="25%">3</FlexElement>
          </FlexElement>
        </FlexElement>
      </Content>
    </DevPage>
  )
}

export default DevGridPage
