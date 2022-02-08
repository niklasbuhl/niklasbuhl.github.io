import { css } from "styled-components"

// New Responsiveness

const hideUnder = css`
  @media (max-width: calc(${props => props.hideUnder} * 1px)) {
    display: none;
  }
`

const hideBetween = css`
  @media (min-width: calc(${props =>
      props.hideOver} * 1px + 1px)) and (max-width: calc(${props =>
      props.hideUnder}  * 1px)) {
    display: none;
  }
`

const hideOutside = css`
  @media (min-width: calc(${props =>
      props.hideOver} * 1px + 1px)) or (max-width: calc(${props =>
      props.hideUnder}  * 1px)) {
    display: none;
  }
`

const hideOver = css`
  @media (min-width: calc(${props => props.hideOver} * 1px + 1px)) {
    display: none;
  }
`

const responsive = {
  hideUnder: hideUnder,
  hideBetween: hideBetween,
  hideOutside: hideOutside,
  hideOver: hideOver,
}

export default responsive
