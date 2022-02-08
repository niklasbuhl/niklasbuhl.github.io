import React, { Component } from "react"
import styled from "styled-components"
import styles from "../src/styles/styles"

import WebPage from "../../components/webPage/WebPage"
import PageArticle from "../../components/pageArticle/PageArticle"
import Emoji from "../src/components/emoji/Emoji"

class StartPage extends Component {
  didComponentMount() {
    // console.log(styles.backgroundImage)
  }

  render() {
    return (
      <WebPage>
        <PageArticle>
          <a href="https://www.openstreetmap.org/" target="_blank">
            <h1>Map</h1>
          </a>
        </PageArticle>
      </WebPage>
    )
  }
}

export default StartPage

// <h1 style={{(styles.shadow.neonGreen)}}>TestStylesPage</h1>

// styles.shadow.neonGreen
