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
  ${props => (props.contentPosition ? props.contentPosition : "")}
  margin-top: var(--gutter);
  margin-bottom: var(--gutter);
`

const PageSection = props => {
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

export default PageSection
