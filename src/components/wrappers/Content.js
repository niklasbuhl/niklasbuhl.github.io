// import React from "react"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  padding: var(--halfGutter);
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "")};
  margin-right: ${props => (props.marginRight ? props.marginRight : "")};
  width: calc(
    100% - var(--gutter) -
      ${props => (props.marginLeft ? props.marginLeft : "0px")} -
      ${props => (props.marginRight ? props.marginRight : "0px")}
  );
  height: calc(100% - var(--gutter));
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  // ${props => console.log("grow: " + props.grow)}
  flex-grow: ${props => (props.grow === undefined ? "1" : props.grow)};

  ${props => props.contentStyle}
`

export default Content
