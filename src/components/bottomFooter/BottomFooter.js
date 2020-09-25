import React, {Component} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

import Emoji from '../emoji/Emoji'

const PositionWrap = styled.div`
  width: 100%;
  ${styles.centerCol}
  // background: rgba(255,255,255,1);

  // background: rgba(0,255,255,0.4);
`

const SizeWrap = styled.div`
  ${styles.contentPageWidth}
  height: var(--bottomFooterHeight);
`

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  ${styles.centerCenter}

`

class BottomFooter extends Component {

  constructor() {
      super()
  }

  render() {
    return(
      <PositionWrap>
        <SizeWrap>
          <ContentWrap>
            <code><Emoji label="keyboard" symbol="⌨️" /> with <Emoji label="love" symbol="❤️" /> by Niklas Buhl</code>
            <code><Emoji label="power" symbol="⚡️" /> by <span className="codeSnip">React</span>, <span className="codeSnip">Gatsby</span> & GitHub</code>
          </ContentWrap>
        </SizeWrap>
      </PositionWrap>
    )
  }
}

export default BottomFooter
