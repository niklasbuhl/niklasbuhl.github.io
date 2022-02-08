import React, { useState, useEffect } from "react"
import NavLink from "./NavLink"
import FullPageCenterContent from "../wrappers/FullPageCenterContent"
import styled from "styled-components"
import styles from "../../styles/styles"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import CollapsingMenu from "./CollapsingMenu"
import LogoContext from "../../context/LogoContext"

const NavPosition = styled.div`
  display: flex;
  z-index: 1337;
  position: sticky;
  position: -webkit-sticky;
  // background: rgba(255, 255, 255, 1);
  top: 0;
  width: 100%;
  height: var(--topNavBarHeight);
  ${styles.centerCol}
`

const NavContent = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const LinksPosition = styled.div`
  ${styles.responsive.hideUnder}
  display: flex;
`

const MenuPosition = styled.div`
  ${styles.responsive.hideOver}
  display: flex;
`

const TopNavBar = props => {
  // console.log(props.location.pathname)
  // console.log("Nav Bar Logo Context: " + props.logoContext.hidden)

  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState("Menu")
  const [scrollPosition, setScrollPosition] = useState(0)

  const toggleOpen = () => {
    setOpen(!open)
    // if (open) setMenu("X")
    // else if (!open) setMenu("Menu")
    // console.log(open)
    // console.log(menu)
  }

  useEffect(() => {
    if (open) setMenu("X")
    else if (!open) setMenu("Menu")
  }, [open])

  useEffect(() => {
    const handleScroll = () => {
      try {
        const position = window.pageYOffset
        setScrollPosition(position)
      } catch (error) {
        console.log(error)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavPosition>
      <FullPageCenterContent>
        <NavContent>
          <LogoContext.Consumer>
            {logoContext => {
              // console.log("Hidden: ", logoContext.hidden)
              return (
                <Logo
                  logoContext={logoContext}
                  scrollPosition={scrollPosition}
                  location={props.location}
                />
              )
            }}
          </LogoContext.Consumer>

          {/* {scrollPosition} */}
          <LinksPosition hideUnder={480}>
            <NavLink to="/workwithme">Work With Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <NavLink to="/cv">CV</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>
          </LinksPosition>
          <MenuPosition hideOver={480}>
            <MenuButton onClick={toggleOpen} open={open}>
              {menu}
            </MenuButton>
            <CollapsingMenu open={open} />
          </MenuPosition>
        </NavContent>
      </FullPageCenterContent>
    </NavPosition>
  )
}

export default TopNavBar

/*




*/
