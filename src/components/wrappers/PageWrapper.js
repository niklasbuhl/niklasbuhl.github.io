import React from "react"
import styled from "styled-components"

const PositionWrap = styled.div`
  display: flex;
  margin-top: calc(var(--topNavBarHeight) * -1);
  margin-bottom: calc(var(--topFooterHeight) * -1);
  min-height: 100vh;
  width: 100%;
`

const PaddingWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--topNavBarHeight);
  // padding-bottom: var(--topFooterHeight);
  padding-bottom: var(--topNavBarHeight);
  flex-direction: column;
  width: 100%;
`

const PageContentWrapper = props => {
  return (
    <PositionWrap>
      <PaddingWrap>{props.children}</PaddingWrap>
    </PositionWrap>
  )
}

export default PageContentWrapper
