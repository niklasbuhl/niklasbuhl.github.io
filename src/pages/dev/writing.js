import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"
import DevPage from "../../layouts/dev-page-layout"

const Writing = styled.main`
  h1 {
    ${styles.fonts.display}
    font-size: 48px;
  }

  h2 {
    font-size: 32px;
  }

  p<a {
    color: var(--coral);
  }

  p<code {
  }

  code.
`

const WritingDevPage = props => {
  return (
    <DevPage title={"Writing"} location={props.location}>
      <Writing>
        <p>Context, Tags</p>
        <h1>Title (Heading 1) // Headline</h1>
        <p>Subtitle</p>
        <br />
        <p>Manchet</p>
        <br />
        {/* <Byline /> */}
        <h2>Section 1.0.0 (Heading 2)</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Some text</p>
        <p>
          <a href="https://niklasbuhl.com">Link in Text</a>
        </p>
        <p>
          <a href="https://niklasbuhl.com">Code Style Link in Text</a>
        </p>
        <p>
          <b>Bold text</b>
        </p>
        <p>
          <i>Italic text</i>
        </p>
        <code>Some code...</code>
        <p>
          Test example<code className="inline">Some code...</code>Some text
          again
        </p>
        <code className="block">Some code...</code>
        <h2>Images</h2>
        <h3>Image full-width</h3>
        <h3>Image Caption</h3>
      </Writing>
    </DevPage>
  )
}
export default WritingDevPage
