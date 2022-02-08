import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import styles from "../../styles/styles"

const LinkWrap = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  ${styles.centerCenter}

  .active {
    text-decoration: none;
  }
`

const linkCSS = css`
  display: flex;
  height: 100%;
  text-decoration: none;
  ${styles.centerCenter}
`

const LinkText = styled.div`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.6px;
  // color: grey;
  color: var(--dark-gray);
  padding: calc(var(--gutter) / 2);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: var(--soft-black);
  }

  :active {
    color: var(--neon-green);
  }

  &.notReady {
    color: lightgrey;
    text-decoration: line-through;

    &.hover {
      color: lightgrey;
    }
  }
`
/*
const activeStyle = css`
  width: 100%;
  max-width: calc(var(--maxPageWidth) / 3);
`
*/

const NavLink = props => {
  // const [isCurrent, setIsCurrent] = useState(true)

  // const isActive = ({ isCurrent }) => {
  //   // console.log(isCurrent)
  //   return isCurrent ? { className: "active" } : {}
  // }

  // useEffect(() => {}, [])

  return (
    <LinkWrap
      to={props.to}
      // getProps={isActive}
      activeStyle={{ color: "gray", textDecoration: "none" }}
      onClick={() => {
        try {
          console.log("scroll")
          window.scrollTo({
            top: styles.variables.heroHeaderHeight,
            behavior: "smooth",
          })
        } catch (error) {
          console.log(error)
        }
      }}
    >
      <LinkText className={props.className}>{props.children}</LinkText>
    </LinkWrap>
  )
}

export default NavLink
