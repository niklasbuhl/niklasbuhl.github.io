import React from "react"
import styled from "styled-components"

// https://www.w3schools.com/howto/howto_css_aspect_ratio.asp

const AspectContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-top: ${props => props.aspect};
`

const ContentContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Aspect = props => {
  /*
  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)

  console.log("Aspect ID: " + id)
  */

  const aspect = (100 * props.height) / props.width + "%"

  return (
    <AspectContainer aspect={aspect}>
      <ContentContainer>{props.children}</ContentContainer>
    </AspectContainer>
  )
}

export default Aspect
