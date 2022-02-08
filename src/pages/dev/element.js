import React from "react"
// import PageLayout from "../../layouts/page-layout-v2"
// import FullPageCenter from "../../components/wrappers/FullPageCenter"
// import FullPageCenterContent from "../../components/wrappers/FullPageCenterContent"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"
// import ProjectCard from "../../components/projects/ProjectCard"
// import Element from "../../components/elements/Element"
// import styled from "styled-components"
// import styles from "../../styles/styles"
// import Aspect from "../../components/wrappers/Aspect"
import BackgroundColor from "../../components/backgrounds/BackgroundColor"
import getRandomColor from "../../functions/getRandomColor"
import Content from "../../components/wrappers/Content"
import FlexElement from "../../components/elements/FlexElement"
// import { useContainerDimensions } from "../../functions/containerDimensions"
// import { useResponsiveContainer } from "../../functions/useResponsiveContainer"
import { Link } from "gatsby"

/*
const TestElement = styled.div`
  display: flex;
  min-width: ${props =>
    (styles.variables.maxPageWidth / 12) * props.col * 0.8 + "px"};

  max-width: ${props =>
    (styles.variables.maxPageWidth / 12) * props.col * 1.2 + "px"};

  flex-basis: ${props => (100 / 12) * props.col + "%"};
  flex-grow: 1;

  height: ${props => (props.height ? props.height : "fit-content")};

  margin: 16px;

  // background: cyan;
`
*/

const grid = () => {
  var grid = []

  for (let i = 0; i < 4; i++) {
    grid.push(
      <FlexElement col={3} key={i} margin={"16px"}>
        <BackgroundColor bgColor={getRandomColor}>
          Hello, World!
        </BackgroundColor>
      </FlexElement>
    )
  }

  return grid
}

const DevPageElement = props => {
  return (
    <DevPage title="Element" location={props.location}>
      <FullPageSection>
        <Content
          flow={"column wrap"}
          marginLeft={"-16px"}
          marginRight={"-16px"}
        >
          <Link to="/dev">Back to Development Overview</Link>
          <h1>Element</h1>
          <FlexElement flow={"row wrap"} width={"100%"} height={"100%"}>
            {grid()}
          </FlexElement>
        </Content>
      </FullPageSection>
    </DevPage>
  )
}

export default DevPageElement

/*

12

4: ~320px

(100/12) * 4

flex-basis: content;
flex-basis: 50%;


Use flex-grow to make some responsive, not others.



const style = css`
  display: flex;
  flex-flow: wrap;
  min-width: ${props => (960 / 12) * props.col * 0.8 + "px"};
  max-width: ${props => (960 / 12) * props.col * 1.2 + "px"};
  flex-basis: ${props => (props.width ? props.width : "content")};
  flex-grow: 1;
  height: ${props => (props.height ? props.height : "fit-content")};
`

const ElementUl = styled.ul`
  ${style}
`
const ElementLi = styled.li`
  ${style}
`
const ElementDiv = styled.div`
  ${style}
`

const ElementFlex = props => {
  switch (props.type) {
    case "ul":
      return (
        <ElementUl bgColor={props.bgColor} col={props.col}>
          {props.children}
        </ElementUl>
      )
    case "li":
      return (
        <ElementLi bgColor={props.bgColor} col={props.col}>
          {props.children}
        </ElementLi>
      )
    case "div":
    default:
      return (
        <ElementDiv bgColor={props.bgColor} col={props.col}>
          {props.children}
        </ElementDiv>
      )
  }
}

*/
