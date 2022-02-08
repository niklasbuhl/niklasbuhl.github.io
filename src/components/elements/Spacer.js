import React from "react"
import styled from "styled-components"

const SpacerContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
`

const Spacer = props => {
  return <SpacerContainer width={props.width} height={props.height} />
}

export default Spacer
