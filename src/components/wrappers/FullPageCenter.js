import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const PositionWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${styles.centerCol}
`
const SizeWrap = styled.div`
  display: flex;
  height: 100%;
  ${styles.pageContentWidth}
`

const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex-flow: column wrap;
  // padding: var(--halfGutter);
  // flex-direction: column;
  // background: yellow;
  width: 100%;
`

const FullPageCenter = props => {
  return (
    <PositionWrap>
      <SizeWrap>
        <ContentWrap>{props.children}</ContentWrap>
      </SizeWrap>
    </PositionWrap>
  )
}

export default FullPageCenter
