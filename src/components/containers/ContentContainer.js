import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const ContentPositionWrap = styled.div`
  display: flex;
  min-width: 100%;
  // min-height: 100%;
  // background: yellow;
  ${styles.centerCol}
`

const ContentSizeWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxPageWidth);
`

const ContentContainer = props => {
  return (
    <ContentPositionWrap>
      <ContentSizeWrap>{props.children}</ContentSizeWrap>
    </ContentPositionWrap>
  )
}

export default ContentContainer
