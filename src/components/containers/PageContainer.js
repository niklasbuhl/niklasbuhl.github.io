import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  width: 100%;
  margin-top: calc(var(--topNavBarHeight) * -1);
  margin-bottom: calc(var(--topFooterHeight) * -1);

  ${props => props.pageCSS}
`

const TopNavBarBackgroundBlock = styled.div`
  // background: cyan;
  // opacity: 0.4;
  background: var(--hard-white);

  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--topNavBarHeight);
  margin-top: calc(var(--topNavBarHeight) * -1);
  content: "";
  z-index: 1300;
`

const TopFooterBackgroundBlock = styled.div`
  // background: magenta;
  // opacity: 0.4;
  background: var(--hard-white);

  display: flex;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--topFooterHeight);
  margin-bottom: calc(var(--topFooterHeight) * -1);
  content: "";
  z-index: 1200;
`

const PageContentWrapper = props => {
  return (
    <>
      <TopNavBarBackgroundBlock />
      <Container pageCSS={props.pageCSS}>{props.children}</Container>
      <TopFooterBackgroundBlock />
    </>
  )
}

export default PageContentWrapper
