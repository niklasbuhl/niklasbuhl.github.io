import React from "react"
import styled from "styled-components"
// import styles from "../../styles/styles"

const Container = styled.div`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  width: 100%;
  ${props => (props.contentPosition ? props.contentPosition : "")}
  margin-top: var(--gutter);
  margin-bottom: var(--gutter);
`

const PageSection = props => {
  return (
    <Container flow={props.flow} contentPosition={props.contentPosition}>
      {props.children}
    </Container>
  )
}

export default PageSection
