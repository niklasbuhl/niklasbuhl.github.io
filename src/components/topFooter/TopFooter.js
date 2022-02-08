import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"
import FullPageCenterContent from "../wrappers/FullPageCenterContent"
import Affiliates from "./Affiliates"
import Legal from "./Legal"
import SocialMedias from "./SocialMedias"

const PositionWrap = styled.div`
  display: flex;
  z-index: 1200;
  position: sticky;
  position: -webkit-sticky;
  width: 100%;
  bottom: 0;
  // background: rgba(255, 255, 255, 1);
  height: var(--topFooterHeight);
  ${styles.centerCol}
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  ${styles.responsive.hideUnder}
`

const TopFooter = () => {
  // var year = new Date().getFullYear()

  return (
    <PositionWrap>
      <FullPageCenterContent>
        <ContentWrap hideUnder={720}>
          <Affiliates />
          <Legal />
          <SocialMedias />
        </ContentWrap>
      </FullPageCenterContent>
    </PositionWrap>
  )
}

export default TopFooter
