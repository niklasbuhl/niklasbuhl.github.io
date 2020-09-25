import React, { Component } from "react"
import styled from "styled-components"
import styles from "../styles/styles"

import WebPage from "../components/webPage/WebPage"
import PageArticle from "../components/pageArticle/PageArticle"
import Emoji from '../components/emoji/Emoji'

const FrontH1 = styled.h1`
  font-size: 47px;
  letter-spacing: -1.7px;
  width: max-content;
  margin-top: 32px;
  margin-bottom: 32px;

  &.black-bg {
    background: black;
  }

  @media (max-width: ${styles.breakpoints.desktop + "px"}) {
    /* font-size: 6vw; */
    font-size: min(47px, 5.6vw);
    letter-spacing: -0.1vw;

  }

  /* @media (max-width: ${styles.breakpoints.mobile + "px"}) {
    font-size: 24px;
    letter-spacing: -1.4px;
  } */
`

class IndexPage extends Component {

  render() {
    return(
      <WebPage>

        <PageArticle innerStyle={"justify-content: space-evenly;"}>

          <FrontH1 style={{
            width: '100%',
            maxWidth: 'calc(100% - var(--gutter))',
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
            Hi, I'm Niklas -&nbsp;<span style={{
              color: "rgba(0,255,0,1)",
              background: "black",
            }}>I am a ...</span>
          </FrontH1>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <ul style={{
              color: "rgba(0,255,0,1)",
              width: 'min-content',
            }}>
              <li><FrontH1 className={"black-bg"}>Prototype & Design Engineer</FrontH1></li>
              <li><FrontH1 className={"black-bg"}>IT & Embedded Systems Developer</FrontH1></li>
              <li><FrontH1 className={"black-bg"}>New Media Artisan</FrontH1></li>
              <li><FrontH1 className={"black-bg"}>Technological Literacy Activist</FrontH1></li>
            </ul>
          </div>

          <FrontH1 style={{
            width: '100%',
            maxWidth: 'calc(100% - var(--gutter))',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>Would you like to work with me?</FrontH1>

        </PageArticle>

        <PageArticle innerStyle={styles.centerCenter}>


          <h1>
            <Emoji label="construction" symbol="🚧" />
            <span style={{margin: "32px"}}>Warning</span>
            <Emoji label="construction" symbol="🚧" />
          </h1>

          <code>This site is under construction.</code>
          <code>I am teaching myself React,</code>
          <code>and therefore testing things...</code>
          <code>Testing git things!</code>

        </PageArticle>

        <PageArticle>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <p>Paragraph</p>
          <code>Code</code>
          <code className="codeSnip">Code Snippet</code>
        </PageArticle>

      </WebPage>
    )
  }
}

export default IndexPage
