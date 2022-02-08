import React from "react"
import styled, { css } from "styled-components"
import styles from "../../styles/styles"

/* FlexElement

Props:

- type (div / li / ul)
- flow
- col (width)
- height
- margin
- grow

*/

const style = css`
  position: relative;
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  flex-grow: ${props => (props.grow ? props.grow : "0")};

  // Width
  min-width: ${props => (props.cW / 12) * props.col * 0.8 + "px"};

  @media (max-width: ${props => (props.cW / 12) * props.col * 0.8 + "px"}) {
    min-width: calc(100% - var(--gutter));
  }

  max-width: ${props => (props.cW / 12) * props.col * 1.2 + "px"};

  flex-basis: calc(
    ${props => (100 / 12) * props.col + "%"}
      ${props =>
        props.margin
          ? "- " + 2 * parseFloat(props.margin.replace("px", "")) + "px"
          : ""}
  );

  margin: ${props => (props.margin ? props.margin : "0")};

  // Height
  ${props => (props.height ? "height: " + props.height + ";" : "")}

  // Background
  ${props => (props.bg ? "background: " + props.bg + ";" : "")}

  // Content Position
  ${props => (props.contentPosition ? props.contentPosition : "")}
  
  // Responsive (hideUnder and hideOver)
  ${props => (props.responsive ? props.responsive : "")} // overflow: hidden;
`

const ElementUl = styled.ul`
  ${style}
`
const ElementLi = styled.li`
  ${style}
`
const ElementDiv = styled.div`
  ${style}
`

const FlexElement = props => {
  var calculatedWidth

  if (props.margin)
    calculatedWidth =
      parseInt(styles.variables.maxPageWidth) +
      parseInt(props.margin.replace("px", ""))
  else calculatedWidth = parseInt(styles.variables.maxPageWidth)

  switch (props.type) {
    case "ul":
      return (
        <ElementUl
          bg={props.bg}
          col={props.col}
          flow={props.flow}
          margin={props.margin}
          height={props.height}
          grow={props.grow}
          cW={calculatedWidth}
          style={props.style}
          contentPosition={props.contentPosition}
          responsive={props.responsive}
          hideUnder={props.hideUnder}
          hideOver={props.hideOver}
        >
          {props.children}
        </ElementUl>
      )
    case "li":
      return (
        <ElementLi
          bg={props.bg}
          col={props.col}
          flow={props.flow}
          margin={props.margin}
          height={props.height}
          grow={props.grow}
          cW={calculatedWidth}
          style={props.style}
          contentPosition={props.contentPosition}
          responsive={props.responsive}
          hideUnder={props.hideUnder}
          hideOver={props.hideOver}
        >
          {props.children}
        </ElementLi>
      )
    case "div":
    default:
      return (
        <ElementDiv
          bg={props.bg}
          col={props.col}
          flow={props.flow}
          margin={props.margin}
          height={props.height}
          grow={props.grow}
          cW={calculatedWidth}
          style={props.style}
          contentPosition={props.contentPosition}
          responsive={props.responsive}
          hideUnder={props.hideUnder}
          hideOver={props.hideOver}
        >
          {props.children}
        </ElementDiv>
      )
  }
}

export default FlexElement

/*

// flex-basis: ${props => (props.width ? props.width : "content")};
// flex-direction: ${props => (props.dir ? props.dir : "column")};
// flex-flow: ${props => (props.dir === "wrap" ? props.dir : "")};
// flex-flow: wrap;

// props.margin.replace("px", "").toInt()


  min-width: ${props =>
    (styles.variables.maxPageWidth / 12) * props.col * 0.8 + "px"};

  max-width: ${props =>
    (styles.variables.maxPageWidth / 12) * props.col * 1.2 + "px"};

      --width: ${props =>
    props.margin
      ? parseInt(styles.variables.maxPageWidth) +
        parseInt(props.margin.replace("px", ""))
      : ""};

  --cW: ${props => (props.cW ? props.cW : "0")};

  // --min-width: calc(var(--width) / 12 * ${props => props.col} * 0.8 ${"px"});
*/
