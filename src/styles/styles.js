import styled, { css } from "styled-components"

import "./reset.scss"
import "./root.scss" // Variables
import "./colors.scss" // Colors
import "./global.scss"
import "./fonts.scss"
import shadows from "./shadows"
import positions from "./positions"
import fonts from "./fonts"
import responsive from "./responsive"

// Breakpoints
var breakpoints = {
  // mobile: 320,
  mobile: 414,
  tablet: 720,
  desktop: 960,
  // desktop: 1024,
}

/*

320 // Small
480 // Medium
720 // 
960 // Wide

*/

// Global Variables
var variables = {}

function SetCSSGlobals() {
  try {
    variables.gutter = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--gutter")
        .slice(0, -2)
    )
    variables.maxPageWidth = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--maxPageWidth")
        .slice(0, -2)
    )
    variables.maxContentWidth = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--maxContentWidth")
        .slice(0, -2)
    )
    variables.heroHeaderHeight = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--heroHeaderHeight")
        .slice(0, -2)
    )
    variables.topNavBarHeight = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--topNavBarHeight")
        .slice(0, -2)
    )
    variables.topFooterHeight = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--topFooterHeight")
        .slice(0, -2)
    )
    variables.bottomFooterHeight = parseFloat(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--bottomFooterHeight")
        .slice(0, -2)
    )
  } catch (error) {
    console.log(error)
  }
}

// Responsiveness

// 0px - 320px
const hideOnMobile = css`
  @media (max-width: calc(${breakpoints.mobile} * 1px)) {
    display: none;
  }
`

// 321px - 720px
const hideOnTablet = css`
  @media (min-width: calc(${breakpoints.mobile} * 1px + 1px)) and (max-width: calc(${breakpoints.tablet}  * 1px)) {
    display: none;
  }
`

// 721px - ?
const hideOnDesktop = css`
  @media (min-width: calc(${breakpoints.tablet} * 1px + 1px)) {
    display: none;
  }
`

// Displays

const displayOnDesktop = css`
  ${hideOnMobile}
  ${hideOnTablet}
`
const displayOnTabletDesktop = css`
  ${hideOnMobile}
`
const displayOnTablet = css`
  ${hideOnMobile}
  ${hideOnDesktop}
`

const displayOnMobileTablet = css`
  // background: green;
  ${hideOnDesktop}
`

const displayOnMobile = css`
  ${hideOnTablet}
  ${hideOnDesktop}
`

// Positioning

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

const centerCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

// Page Height
const pageFullHeight = css`
  min-height: calc(100vh - var(--topNavBarHeight) - var(--topFooterHeight));
`

// Page Width
const pageContentWidth = css`
  width: 100%;
  max-width: var(--maxPageWidth);
`

// Third Width
const thirdWidth = css`
  width: 100%;
  max-width: calc(var(--maxPageWidth) / 3);
`

// Display on Different Medias
const Desktop = styled.div`
  ${displayOnDesktop}
`

const Tablet = styled.div`
  ${displayOnTablet}
`

const Mobile = styled.div`
  ${displayOnMobile}
`

// Text Positioning

const topFooterTextPadding = css`
  padding-left: var(--halfGutter);
  padding-right: var(--halfGutter);
`

// Exports

const styles = {
  // Fonts
  fonts: fonts,

  // Shadows
  shadows: shadows,

  // Positions
  positions: positions,

  // Responsive
  responsive: responsive,

  // Dimensions
  variables: variables,

  thirdWidth: thirdWidth,
  pageContentWidth: pageContentWidth,

  pageFullHeight: pageFullHeight,

  // gutter: variables.gutter,

  // Positioning
  centerCenter: centerCenter,
  centerRow: centerRow,
  centerCol: centerCol,

  leftCenterCol: leftCenterCol,
  rightCenterCol: rightCenterCol,

  leftCenterRow: leftCenterRow,
  rightCenterRow: rightCenterRow,

  // Responsiveness
  breakpoints: breakpoints,

  hideOnMobile: hideOnMobile,
  hideOnTablet: hideOnTablet,
  hideOnDesktop: hideOnDesktop,

  displayOnMobile: displayOnMobile,
  displayOnMobileTablet: displayOnMobileTablet,
  displayOnTablet: displayOnTablet,
  displayOnTabletDesktop: displayOnTabletDesktop,
  displayOnDesktop: displayOnDesktop,

  Desktop: Desktop,
  Tablet: Tablet,
  Mobile: Mobile,

  topFooterTextPadding: topFooterTextPadding,

  SetCSSGlobals: SetCSSGlobals,
}

export default styles
