import React from "react"
import styled from "styled-components"

const ZoomOuter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 200ms ease-out 100ms;

  :hover {
    margin: calc(var(--halfGutter) * -1);
    width: calc(100% + var(--gutter));
    height: calc(100% + var(--gutter));
  }
`

const ZoomInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 200ms ease-out 100ms;

  :hover {
    padding: var(--halfGutter);
    width: calc(100% - var(--gutter));
    height: calc(100% - var(--gutter));
  }
`
const ZoomBorder = props => {
  return (
    <ZoomOuter>
      <ZoomInner>{props.children}</ZoomInner>
    </ZoomOuter>
  )
}

export default ZoomBorder
