import React, {Component} from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

const Wrap = styled.button`
  border: none;
  background: none;
  margin: 8px;
  padding: 0;
  ${styles.displayOnMobileTablet}
`

class MenuButton extends Component {

  constructor(props) {
    super()
  }

  render() {

    var content = ""

    if (this.props.menuOpen) content = "X"
    else content = "Menu"

    return(
      <Wrap onClick={this.props.onClick}>
        {content}
      </Wrap>
    )
  }

}

export default MenuButton
