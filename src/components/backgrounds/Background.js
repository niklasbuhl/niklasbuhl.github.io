import React from "react"
import styled from "styled-components"

// import React, {Component} from "react"
// import { Link } from "gatsby"
// import { css } from "styled-components"
// import styles from "../../styles/styles"

// background-color: ${props => props.bgColor};
// background-image: url(${props => props.bgImage});

/*
const backgroundImage = css`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: auto;
`
*/

// https://stackoverflow.com/questions/22083157/extend-background-color-of-header-beyond-container-with-css

const BackgroundDisplay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${props => props.background};

  // :before {
  //   content: "";
  //   background-color: #000;
  //   overflow: hidden;
  //   position: absolute;
  //   height: 100%;
  //   width: 200vw;
  //   left: -100vw;
  //   z-index: -1;
  // }
`

const Background = props => {
  return (
    <BackgroundDisplay background={props.background}>
      {props.children}
    </BackgroundDisplay>
  )
}

export default Background

/*
const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const BackgroundBleed = styled.div`
  display: flex;
  // position: absolute;
  left: -1000px;
  // margin-left: -1000px;
  // margin-right: -1000px;
  margin-bottom: -1000px;
  // width: 100%;
  // width: calc(100% + 2000px);
  // height: calc(100% + 1000px);
  background: ${props => props.background};
  overflow: hidden;
`

const BackgroundContent = styled.div`
  display: flex;
  height: var(--bottomFooterHeight);
`

const Background = props => {
  return (
    <BackgroundContainer>
      <BackgroundBleed background={props.background}>
        <BackgroundContent>{props.children}</BackgroundContent>
      </BackgroundBleed>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
*/
