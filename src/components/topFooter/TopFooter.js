import React, {Component} from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

import Emoji from '../emoji/Emoji'

const PositionWrap = styled.div`
  z-index: 47;
  position: sticky;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  ${styles.centerCol}
  background: rgba(255,255,255,1);
`

const SizeWrap = styled.div`
  ${styles.contentPageWidth}
  height: var(--topFooterHeight);
  display: flex;
`

const ContentWrap = styled.footer`
  width: 100%;

  padding-left: var(--halfGutter);
  padding-right: var(--halfGutter);
  display: flex;
`

const Affiliates = styled.div`
  ${styles.thirdWidth}
  ${styles.leftCenterRow}
`

const Affiliate = styled.a`
  height: 100%;
  margin: var(--halfGutter);
  ${styles.leftCenterRow}
  font-family: 'Hack', monospace;
  font-size: 12px;
  color: black;
  text-decoration: none;
`

const Legal = styled.div`
  ${styles.thirdWidth}
  ${styles.centerCenter}
  font-family: 'Hack', monospace;
  font-size: 12px;
  color: lightgray;

`

const SocialMedias = styled.div`
  ${styles.thirdWidth}
  ${styles.rightCenterRow}
`

const SocialMedia = styled.a`
  height: 100%;
  margin: var(--halfGutter);
  ${styles.centerCenter}
  font-family: 'Hack', monospace;
  font-size: 12px;
  color: black;
  text-decoration: none;
`

class TopFooter extends Component {

  constructor(props) {
    super()
  }

  render() {

    // Get current year
    var year = new Date().getFullYear()

    return(
      <PositionWrap>
        <SizeWrap>
          <ContentWrap>

            <Affiliates>
              <Affiliate target="_blank" href="https://kintsugi-design.com/">Kintsugi Design</Affiliate>
              <Affiliate target="_blank" href="https://cybernauterne.dk/">Cybernauterne</Affiliate>
              <Affiliate target="_blank" href="https://www.instagram.com/model.niklasbuhl/"><Emoji label="model" symbol="🧑🏼‍🎤" />&nbsp;Model</Affiliate>
            </Affiliates>

            <Legal>
              &copy; {year} Niklas Buhl
            </Legal>

            <SocialMedias>
              <SocialMedia target="_blank" href="https://www.linkedin.com/in/niklasbuhl/">LinkedIn</SocialMedia>
              <SocialMedia target="_blank" href="https://github.com/niklasbuhl">Github</SocialMedia>
              <SocialMedia target="_blank" href="https://www.instagram.com/niklasbuhl.xyz/">Instagram</SocialMedia>
              <SocialMedia target="_blank" href="https://twitter.com/niklasbuhl">Twitter</SocialMedia>
            </SocialMedias>

          </ContentWrap>
        </SizeWrap>
      </PositionWrap>
    )
  }
}

export default TopFooter
