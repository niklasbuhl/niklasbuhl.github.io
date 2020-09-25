import React, {Component} from "react"
import { Link } from "gatsby"
import styled, {css} from "styled-components"
import styles from "../../styles/styles"

import CollapseMenu from "./CollapseMenu"
import MenuButton from "./MenuButton"
import LinkText from "./LinkText"

// Wrapper for entire Top Navigation Bar, make it stick on top and
const PositionWrap = styled.div`
  display: flex;
  z-index: 1337;
  position: sticky;
  position: -webkit-sticky;
  background: rgba(255,255,255,1);
  top: 0;
  // left: 0;
  // right: 0;
  width: 100%;
  ${styles.centerCol}
`

const SizeWrap = styled.div`
  display: flex;
  ${styles.contentPageWidth}
`

const NavWrap = styled.div`
  display: flex;
  width: 100%;
  height: var(--topNavBarHeight);

  padding-left: var(--halfGutter);
  padding-right: var(--halfGutter);
`

const NavContent = styled.nav`
  display: flex;
  width: 100%;
  ${styles.contentPageWidth}
  flex-direction: row;
  justify-content: space-between;

`

const LogoWrap = styled.div`
  display: flex;
  height: 100%;
  ${styles.centerCenter};
`

const Logo = styled(Link)`
  display: flex;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  letter-spacing: -1px;
  color: black;
  text-decoration: none;
  margin: calc(var(--gutter) / 2);
`

const LinksWrap = styled.div`
  display: flex;
  ${styles.displayOnDesktop}
`

const linkWrap = css`
  display: flex;
  height: 100%;
  text-decoration: none;
  /* background: red; */
  /* font-size: 10px; */

  ${styles.centerCenter}
`

const AWrap = styled.a`
  ${linkWrap}
`

const LinkWrap = styled(Link)`
  ${linkWrap}
`

const NewLink = (props) => {
  return(
    <LinkWrap to={props.to}>
      <LinkText content={props.text} className={props.className} />
    </LinkWrap>
  )
}

const NewA = (props) => {
  return(
    <AWrap href={props.href}>
      <LinkText content={props.text} className={props.className} />
    </AWrap>
  )
}

class TopNavBar extends Component {

  constructor(props) {
    super()

    this.state = {
      menuOpen: false,
      links: null,
    }

    this.toggleMenu = this.toggleMenu.bind(this)

  }

  toggleMenu() {

    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }))

  }

  render() {

    if (this.props.ww > styles.breakpoints.tablet && this.state.menuOpen === true) this.setState({menuOpen: false})

    return(

      <PositionWrap>

        <SizeWrap>

          <NavWrap>

            <NavContent>

              <LogoWrap>
                <Logo to="/">
                  Niklas Buhl
                </Logo>
              </LogoWrap>

              <LinksWrap>
                <NewLink to="/" className="notReady" text="Work With Me" />
                <NewLink to="/" className="notReady" text="Projects" />
                <NewLink to="/" className="notReady" text="Articles" />
                <NewLink to="/" className="notReady" text="About" />
                <NewA href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%68%65%6C%6C%6F%40%6E%69%6B%6C%61%73%62%75%68%6C%2E%63%6F%6D" text="Contact" />
              </LinksWrap>

              <MenuButton onClick={this.toggleMenu} menuOpen={this.state.menuOpen} />

            </NavContent>

          </NavWrap>

        <CollapseMenu menuOpen={this.state.menuOpen} links={this.state.links} />

        </SizeWrap>

      </PositionWrap>
    )
  }
}

export default TopNavBar

// NIKLAS BUHL /&nbsp; <span style={{color: "rgba(0,255,0,1)"}}>刀ﾉズﾚﾑ丂 乃ひんﾚ</span>
