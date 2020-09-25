import React, {Component} from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

const PositionWrap = styled.div`
  ${styles.centerCol}
  padding-top: var(--topNavBarHeight);
  padding-bottom: var(--topFooterHeight);
  min-height: calc(100vh - var(--topNavBarHeight) - var(--topFooterHeight));
  // width: 100%;
  // background: rgba(255,255,0,0.2);
  ${props => props.outerStyle}
`

const SizeWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${styles.contentPageWidth}
  flex-grow: 1; // Make it fill entire parent element, like height: 100%;

  // background: rgba(0,255,255,0.4);
`

const ContentWrap = styled.article`
  display: flex;
  flex-direction: column;
  padding-left: var(--halfGutter);
  padding-right: var(--halfGutter);
  flex-grow: 1; // Make it fill entire parent element, like height: 100%;
  ${props => props.innerStyle}
`

class PageArticle extends Component {

  constructor() {
      super()
  }

  render() {
    return(
      <PositionWrap outerStyle={this.props.outerStyle} className={this.props.outerClass}>
        <SizeWrap>
          <ContentWrap innerStyle={this.props.innerStyle} className={this.props.innerClass}>
            {this.props.children}
          </ContentWrap>
        </SizeWrap>
      </PositionWrap>
    )
  }
}

export default PageArticle
