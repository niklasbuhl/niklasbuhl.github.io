import React from "react"
import styled from "styled-components"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"
import { Link } from "gatsby"

// import { NULL } from "node-sass"
// getComputedStyle(document.documentElement).getPropertyValue('--my-variable-name'); // #999999
// https://davidwalsh.name/css-variables-javascript

const ColorBox = styled.div`
  height: 32px;
  width: 32px;
  background: var(${props => props.color});
`

const ColorItem = styled.div`
  margin: var(--halfGutter);
  display: flex;
  flex-direction: row;
`

const ColorExample = props => {
  return (
    <ColorItem>
      <ColorBox color={props.color} />

      <code>{props.color}</code>

      {/* <code>{css}</code> */}
    </ColorItem>
  )
}

const DevColorsPage = props => {
  return (
    <DevPage location={props.location} title="Buttons">
      <FullPageSection>
        <h1>Colors</h1>

        <h2>Grayscale</h2>

        <ColorExample color="--hard-white" />
        <ColorExample color="--super-light-gray" />
        <ColorExample color="--light-gray" />
        <ColorExample color="--gray" />
        <ColorExample color="--dark-gray" />
        <ColorExample color="--super-dark-gray" />
        <ColorExample color="--soft-black" />
        <ColorExample color="--hard-black" />

        <h2>Neon</h2>

        <ColorExample color="--neon-green" />
        <ColorExample color="--neon-lime" />
        <ColorExample color="--neon-yellow" />
        <ColorExample color="--neon-orange" />
        <ColorExample color="--neon-red" />
        <ColorExample color="--neon-purple" />
        <ColorExample color="--neon-blue" />
        <ColorExample color="--neon-pink" />

        <h2>Coral</h2>

        <ColorExample color="--coral-red" />
      </FullPageSection>
    </DevPage>
  )
}

export default DevColorsPage

// export default 1337

// <h1 style={{(styles.shadow.neonGreen)}}>TestStylesPage</h1>

// styles.shadow.neonGreen
