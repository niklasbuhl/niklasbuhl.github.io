import styled, { css } from 'styled-components'

import "./reset.scss"
import "./global.scss"
import "./fonts.scss"

// Gutter
var gutter = 16

// Variables
var maxPageContentWidth = 1024
var topNavBarHeight = 48
var topFooterHeight = 32
var heroHeaderHeight = 240
var bottomFooterHeight = 240
var maxContentWidth = (maxPageContentWidth - (gutter * 2))

var variables = {
  maxPageContentWidth: maxPageContentWidth,
  maxContentWidth: maxContentWidth,
  heroHeaderHeight: heroHeaderHeight,
  topNavBarHeight: topNavBarHeight,
  topFooterHeight: topFooterHeight,
  bottomFooterHeight: bottomFooterHeight,
}

// Breakpoints
var breakpoints = {
  // mobile: 320,
  mobile: 414,
  tablet: 720,
  desktop: maxPageContentWidth,
}

// const module = typeof document !== `undefined` ? require("module") : null

// Globals
function SetCSSGlobals() {
  document.documentElement.style.setProperty("--gutter", gutter + "px")
  document.documentElement.style.setProperty("--halfGutter", (gutter / 2) + "px")
  document.documentElement.style.setProperty("--maxPageContentWidth", maxPageContentWidth + "px")
  document.documentElement.style.setProperty("--maxContentWidth", maxContentWidth + "px")
  document.documentElement.style.setProperty("--topNavBarHeight", topNavBarHeight + "px")
  document.documentElement.style.setProperty("--topFooterHeight", topFooterHeight + "px")
  document.documentElement.style.setProperty("--heroHeaderHeight", heroHeaderHeight + "px")
  document.documentElement.style.setProperty("--bottomFooterHeight", bottomFooterHeight + "px")
  document.documentElement.style.setProperty("--mobileBreakpoint", breakpoints.mobile + "px")
  document.documentElement.style.setProperty("--tabletBreakpoint", breakpoints.tablet + "px")
  // console.log("Global CSS Variables set")
}

// Responsiveness

// 0px - 320px
const hideOnMobile = css`
  @media (max-width: ${breakpoints.mobile + "px"}) {
    display: none;
  }
`

// 321px - 720px
const hideOnTablet = css`
  @media (min-width: calc(${breakpoints.mobile + "px"} + 1px)) and (max-width: ${breakpoints.tablet + "px"}) {
    display: none;
  }
`

// 721px - ?
const hideOnDesktop = css`
  @media (min-width: calc(${breakpoints.tablet + "px"} + 1px)) {
    display: none;
  }
`

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
  ${hideOnDesktop}
`

const displayOnMobile = css`
  ${hideOnTablet}
  ${hideOnDesktop}
`

// console.log("Display On Mobile and Tablet")
// console.log(displayOnMobileTablet)

// Positioning
const centerRow = css`
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
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
const fullPageHeight = css`
  min-height: calc(100vh - var(--topNavBarHeight) - var(--topFooterHeight));
  // min-height: calc(100vh - var(--topFooterHeight));
  // min-height: 100vh;
`

const contentPageWidth = css`
  width: 100%;
  max-width: var(--maxPageContentWidth);
`

const thirdWidth = css`
  width: 100%;
  max-width: calc(var(--maxPageContentWidth) / 3);
`

const Desktop = styled.div`
  ${displayOnDesktop}
`

const Tablet = styled.div`
  ${displayOnTablet}
`

const Mobile = styled.div`
  ${displayOnMobile}
`

export default {

  // Dimensions
  variables: variables,

  thirdWidth: thirdWidth,
  contentPageWidth: contentPageWidth,

  fullPageHeight: fullPageHeight,

  gutter: gutter,

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

  SetCSSGlobals: SetCSSGlobals,

}
