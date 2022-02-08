import React from "react"
import styled from "styled-components"

const ButtonStyle = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }

  ${props => props.buttonStyle}
`

const ScrollButton = props => {
  return (
    <ButtonStyle
      buttonStyle={props.buttonStyle}
      onClick={
        () => {
          // Source: https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
          // Parameters: #id, offset
          if (props.scrollToId) {
            console.log("Scroll To ID: " + props.scrollToId)
            var element = document.getElementById(props.scrollToId)
            var headerOffset = props.offset

            var elementPosition = element.getBoundingClientRect().top
            var offsetPosition =
              elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })

            return
          }

          if (props.scrollPixels) {
            console.log("Scroll Pixels: " + props.scrollPixels)
            window.scrollBy({
              top: props.scrollPixels,
              left: 0,
              behavior: "smooth",
            })
          }
        }
        // scrollIntoViewOffset(props.scrollToId, props.offset)
      }
    >
      {props.children}
    </ButtonStyle>
  )
}

export default ScrollButton
