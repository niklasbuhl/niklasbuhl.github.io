import { css } from "styled-components"

const flow = css`
  display: flex;

  // Column
  flex-flow: ${props => props.flex}
    ${props => (props.dir === "column" ? "flex-direction: column;" : "")} // Row
    ${props => (props.dir === "row" ? "flex-direction: row;" : "")} // Wrap
    ${props => (props.dir === "wrap" ? "flex-direction: column;" : "")};
`

const flex = {
  flow: flow,
}

export default flex
