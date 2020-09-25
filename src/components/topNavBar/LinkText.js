import React from "react"
// import React, {Component} from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import styles from "../../styles/styles"

const Wrap = styled.div`
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  letter-spacing: -.7px;
  color: grey;
  text-decoration: none;
  padding: calc(var(--gutter) / 2);

  &:hover {
    color: black;
  }

  &.notReady {
    color: lightgrey;
    text-decoration: line-through;

    &.hover {
      color: lightgrey;
    }
  }
`

function LinkText(props) {
  return(
    <Wrap className={props.className}>
      {props.content}
    </Wrap>
  )
}

export default LinkText
