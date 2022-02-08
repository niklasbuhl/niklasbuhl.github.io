import React from "react"
import styled from "styled-components"
// import styles from "../../styles/styles"
import FullPageCenter from "../wrappers/FullPageCenter"
import FullPageCenterContent from "../wrappers/FullPageCenterContent"
import Background from "../backgrounds/Background"
import StartContent from "./StartContent"
import EndContent from "./EndContent"
// import Spacer from "../elements/Spacer"
// import FlexElement from "../elements/FlexElement"

const PositionWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: var(--bottomFooterHeight);
  z-index: 1000;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-height: var(--bottomFooterHeight);
  height: 100%;
  width: 100%;
`

const BottomFooter = () => {
  return (
    <PositionWrap>
      <Background background={"var(--gray)"}>
        <FullPageCenter>
          <StartContent />
        </FullPageCenter>
      </Background>
      <Background background={"var(--dark-gray)"}>
        <FullPageCenterContent>
          <ContentWrap>
            <EndContent />
          </ContentWrap>
        </FullPageCenterContent>
      </Background>
    </PositionWrap>
  )
}

export default BottomFooter
