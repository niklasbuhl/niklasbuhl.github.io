import React, { Component } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

import HeroHeader from "../heroHeader/HeroHeader"
import TopNavBar from "../topNavBar/TopNavBar"
import MainContent from "../mainContent/MainContent"
import TopFooter from "../topFooter/TopFooter"
import BottomFooter from "../bottomFooter/BottomFooter"

const SuperWrapper = styled.div`
  // min-height: calc(100vh - var(--topNavBarHeight) - var(--topFooterHeight));
  // background: rgba(255,255,0,0.2);
`

class WebPage extends Component {

  constructor(props) {
    super()

    this.state = {
      width: 0,
      height: 0,
    }

    this.updateDimensions = this.updateDimensions.bind(this);


  }

  updateDimensions() {
    // console.log("resize: " + this.state.width)
    this.setState({ width: window.innerWidth, height: window.innerWidth });
  }

  componentDidMount() {

    styles.SetCSSGlobals()

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));

    // Scroll because of hero header

    // console.log("Update scroll to: " + styles.variables.heroHeaderHeight)
    window.scrollTo(0, styles.variables.heroHeaderHeight)
    // window.scrollTo(0, styles.variables.heroHeaderHeight)

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {

    return(
      <SuperWrapper>

        <HeroHeader />

        <TopNavBar ww={this.state.width} />

        <MainContent>
          {this.props.children}
        </MainContent>

        <TopFooter />

        <BottomFooter />

      </SuperWrapper>
    )
  }
}

export default WebPage
