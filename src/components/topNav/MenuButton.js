// import React, { Component } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

const MenuButton = styled.button`
  border: none;
  background: none;
  display: flex;
  padding: var(--halfGutter);
  line-height: 16px;
  // height: 32px;
  color: var(--dark-gray);
  ${styles.fonts.display}
`
/*
const MenuButton = props => {
  var content

  if (props.open) content = "X"
  else content = "Menu"

  return <Wrap>{content}</Wrap>
}
*/

export default MenuButton

/*

class MenuButton extends Component {
  constructor(props) {
    super()
  }

  render() {
    var content = ""

    if (this.props.menuOpen) content = "X"
    else content = "Menu"

    return <Wrap onClick={this.props.onClick}>{content}</Wrap>
  }
}

*/
