import React, { useState } from "react"
import DevPage from "../../layouts/dev-page-layout"
import styled, { css } from "styled-components"
import styles from "../../styles/styles"

const HoverImage = styled.span``

const Page = props => {
  return (
    <DevPage title="Info Box" location={props.location}>
      <HoverImage title="lego" />
    </DevPage>
  )
}

export default Page
