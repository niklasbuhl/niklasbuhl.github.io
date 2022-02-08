import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.bgColor};
`

const BackgroundColor = props => {
  return <Container bgColor={props.bgColor}>{props.children}</Container>
}

export default BackgroundColor
