import React from "react"
import styled from "styled-components"

/* # Full Page Background

- Props
  - Background (color, image)?

*/

const Background = styled.div`
  display: flex;

  left: 0;
  // width: 100vw;
  width: 100%;

  // height: 100%;
  // min-height: 100vh;

  // Color
  background: ${props => props.background};

  // Image

  // Add functionality for images

  // margin-top: calc(var(--topNavBarHeight) * -1);
  // margin-bottom: calc(var(--topFooterHeight) * -1);
`

const FullPageBackground = props => {
  return <Background background={props.background}>{props.children}</Background>
}

export default FullPageBackground

/*
const Padding = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--topNavBarHeight);
  // padding-bottom: var(--topFooterHeight);
  padding-bottom: var(--topNavBarHeight);
  flex-direction: column;
  width: 100%;
`

*/
