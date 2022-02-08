import React from "react"
import styles from "../../styles/styles"
import { Link } from "gatsby"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"

const DevShadowsPage = props => {
  return (
    <DevPage title="Shadows" location={props.location}>
      <FullPageSection>
        <h1 css={styles.shadows.rgbGreenMagenta}>rgbGreenMagenta</h1>

        <h1 css={styles.shadows.rgbBlueRed}>rgbBlueRed</h1>

        <h1 css={styles.shadows.stereoscopic}>stereoscopic</h1>

        <h1 css={styles.shadows.layered} value="layered">
          layered
        </h1>

        <h1 css={styles.shadows.neonGreen} id="neongreen" value="neongreen">
          neonGreen
        </h1>

        <h1 style={{ color: "white" }} css={styles.shadows.softShadow}>
          Soft Shadow
        </h1>
      </FullPageSection>
    </DevPage>
  )
}

export default DevShadowsPage

// <h1 style={{(styles.shadow.neonGreen)}}>TestStylesPage</h1>

// styles.shadow.neonGreen
