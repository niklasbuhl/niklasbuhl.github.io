import React from "react"
import styled from "styled-components"
// import styles from "../../styles/styles"

const Position = styled.div`
  margin: var(--halfGutter);
`

const Background = styled.div`
  display: flex;
  background: ${props => props.background};
`

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: var(--gutter);
`

const TextBox = props => {
  return (
    <Position>
      <Background background={props.background}>
        <Content>{props.children}</Content>
      </Background>
    </Position>
  )
}

export default TextBox
