import React, {Component} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import sitemap from "./sitemap"

import LinkText from "./LinkText"

const PositionWrap = styled.div`
  position: absolute;
  top: var(--topNavBarHeight);
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: white;
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: calc(var(--gutter) / 2);
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledA = styled.a`
  text-decoration: none;
`

class CollapseMenu extends Component {

  constructor(props) {
    super()

  }


  render() {

    if (this.props.menuOpen === true) {

      return(
        <PositionWrap>
          <ContentWrap>
            <StyledLink to="/"><LinkText content="Work With Me" className="notReady" /></StyledLink>
            <StyledLink to="/"><LinkText content="Projects" className="notReady" /></StyledLink>
            <StyledLink to="/"><LinkText content="Articles" className="notReady" /></StyledLink>
            <StyledLink to="/"><LinkText content="About" className="notReady" /></StyledLink>
            <StyledA href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%6E%69%6B%6C%61%73%62%75%68%6C%2E%63%6F%6D"><LinkText content="Contact" /></StyledA>
          </ContentWrap>
        </PositionWrap>)
    }

    return null
  }

}

export default CollapseMenu
