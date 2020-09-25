import React, { Component } from 'react'
import styled from "styled-components"
import styles from "../../styles/styles"

const PositionWrap = styled.div`
  ${styles.centerCol}
  margin-top: calc(var(--topNavBarHeight) * -1);
  margin-bottom: calc(var(--topFooterHeight) * -1);
  min-height: 100vh;

  // background: rgba(255,0,255,0.2);
`

const SizeWrap = styled.div`
  // ${styles.contentPageWidth}
  width: 100%;
  min-height: 100vh;

  // background: rgba(255,0,255,0.2)
`

const ContentWrap = styled.main`
  display: flex;
  flex-direction: column;
`

class MainContent extends Component {

  render() {
    return(
      <PositionWrap>
        <SizeWrap>
          <ContentWrap>
            {this.props.children}
          </ContentWrap>
        </SizeWrap>
      </PositionWrap>
    )
  }
}

export default MainContent
