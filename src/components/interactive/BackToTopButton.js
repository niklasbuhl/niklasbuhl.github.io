import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const ButtonStyle = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }
  ${props => props.buttonStyle}
`

const BackToTopButton = props => {
  return (
    <ButtonStyle
      buttonStyle={props.buttonStyle}
      onClick={() => {
        window.scroll({
          top: styles.variables.heroHeaderHeight,
          left: 0,
          behavior: "smooth",
        })
      }}
    >
      Back to top
    </ButtonStyle>
  )
}

export default BackToTopButton
