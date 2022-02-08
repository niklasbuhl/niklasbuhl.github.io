import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const ContentPositionWrap = styled.div`
  display: flex;
  min-width: 100%;
  ${styles.centerCol}
  ${props => props.background}
`

const ContentContainer = styled.section`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  width: 100%;
  max-width: var(--maxPageWidth);
  min-height: calc(100vh - (var(--contentMargin) * 2));
  // height: calc(100vh - var(--topNavBarHeight) - var(--topFooterHeight));
  ${props => (props.contentPosition ? props.contentPosition : "")}
  margin-top: var(--contentMargin);
  margin-bottom: var(--contentMargin);
`

const FullPageSection = props => {
  return (
    <ContentPositionWrap background={props.background} id={props.id}>
      <ContentContainer
        flow={props.flow}
        contentPosition={props.contentPosition}
      >
        {props.children}
      </ContentContainer>
    </ContentPositionWrap>
  )
}

export default FullPageSection
