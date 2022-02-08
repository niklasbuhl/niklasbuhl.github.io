/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"

import { LogoProvider } from "./src/context/LogoContext"
import { EventsProvider } from "./src/context/EventsContext"
// import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <EventsProvider>
    <LogoProvider>{element}</LogoProvider>
  </EventsProvider>
)

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.hash !== "") return true

  return false
}
