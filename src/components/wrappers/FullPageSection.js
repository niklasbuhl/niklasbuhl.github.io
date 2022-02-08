import React from "react"
import styled from "styled-components"
// import styles from "../../styles/styles"

const FullPageSectionContainer = styled.div`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  width: 100%;
  min-height: calc(100vh - (var(--contentMargin) * 2));
  // height: calc(100vh - var(--topNavBarHeight) - var(--topFooterHeight));
  ${props => (props.contentPosition ? props.contentPosition : "")}
  margin-top: var(--contentMargin);
  margin-bottom: var(--contentMargin);
`

const FullPageSection = props => {
  return (
    <FullPageSectionContainer
      flow={props.flow}
      contentPosition={props.contentPosition}
    >
      {props.children}
    </FullPageSectionContainer>
  )
}

export default FullPageSection
