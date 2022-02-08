import { css } from "styled-components"

// # Positioning (horizontalVertically)

// ## Up

const leftUp = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const centerUp = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const rightUp = css`
  display flex;
  justify-content: flex-end;
  align-items: flex-start;
`

// ## Center(Vertically)

const leftCenter = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const centerCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const rightCenter = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

// ## Down

const leftDown = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

const centerDown = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const rightDown = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

// # Old

const centerRow = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const centerCol = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const leftCenterCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const rightCenterCol = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
const leftCenterRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const rightCenterRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const positions = {
  // Up
  leftUp: leftUp,
  centerUp: centerUp,
  rightUp: rightUp,

  // Center
  leftCenter: leftCenter,
  centerCenter: centerCenter,
  rightCenter: rightCenter,

  // Down
  leftDown: leftDown,
  centerDown: centerDown,
  rightDown: rightDown,

  // Old
  centerRow: centerRow,
  centerCol: centerCol,

  leftCenterCol: leftCenterCol,
  rightCenterCol: rightCenterCol,

  leftCenterRow: leftCenterRow,
  rightCenterRow: rightCenterRow,
}

export default positions
