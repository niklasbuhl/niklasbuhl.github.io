import React, { Component } from "react"
// import { Link } from "gatsby"
// import Emoji from "../emoji/Emoji"
import styled from "styled-components"
import styles from "../../styles/styles"
import FullPageCenterContent from "../wrappers/FullPageCenterContent"

const PositionWrap = styled.div`
  width: 100%;
  height: var(--heroHeaderHeight);

  // background: rgba(0,255,255,0.4);
  // background: cyan;
  background: var(--neon-purple);
  color: var(--neon-lime);
  ${styles.centerCol}
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  ${styles.centerCenter}
`

class HeroHeader extends Component {
  constructor() {
    super()

    this.state = {
      // Spinning earth component
      earthCount: 0,
    }

    this.earthSymbol = ["🌍", "🌏", "🌎"]
  }

  componentDidMount() {
    window.scrollTo(0, 240)
    // insert code into the HTML?

    this.earthInterval = setInterval(() => {
      this.setState(prevState => ({
        earthCount: (prevState.earthCount + 1) % 3,
      }))
    }, 200)
  }

  componentWillUnmount() {
    clearInterval(this.earthInterval)
  }

  render() {
    var { earthCount } = this.state

    return (
      <PositionWrap>
        <FullPageCenterContent>
          <ContentWrap>
            <code>
              Hello World&nbsp;{this.earthSymbol[earthCount]}&nbsp;How are you?
            </code>
          </ContentWrap>
        </FullPageCenterContent>
      </PositionWrap>
    )
  }
}

export default HeroHeader
