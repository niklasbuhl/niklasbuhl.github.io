import styled from "styled-components"

/*
const handlePosition = (direction, position) => {
  if (direction === "column") {
    switch (position) {
    }
  } else {
    // Must be "row" or undefined
  }
}
*/

const Flex = styled.div`
  display: flex;
  width: ${props => (props.w ? props.w : "100%")};
  height: ${props => (props.h ? props.h : "")};
  background: ${props => props.bg};
  flex-direction: ${props => props.dir};
  flex-grow: 1;
  ${props => props.pos}
`

export default Flex
