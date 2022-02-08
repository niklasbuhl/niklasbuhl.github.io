import React from "react"
import styled from "styled-components"
import DevPage from "../../layouts/dev-page-layout"
import { Link } from "gatsby"
// import Background from "../../components/backgrounds/Background"
import styles from "../../styles/styles"

const AhrefInP = styled.a`
  all: unset;
  color: var(--neon-purple);
  font-size: inherit;
  font-family: inherit;

  &:hover {
    // text-decoration: underline;
    cursor: pointer;
    color: var(--neon-green);
  }
`

const SansP = styled.p`
  ${styles.fonts.sans}
`

const BackLink = styled(Link)`
  all: unset;
  ${styles.fonts.code}
  font-size: 14px;
  margin: var(--halfGutter);
  color: var(--dark-gray);
  display: flex;

  &:hover {
    cursor: pointer;
    color: var(--super-dark-gray);
  }

  &:active {
    color: var(--neon-green);
  }
`

const DevLinksPage = props => {
  return (
    <DevPage location={props.location} title="Links">
      <h2>Link in Paragraph</h2>
      <h3>Serif</h3>
      <p style={{ fontSize: "16px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into{" "}
        <AhrefInP>electronic typesetting</AhrefInP>, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <h3>Sans</h3>
      <SansP>
        Lorem Ipsum is simply dummy text of the{" "}
        <AhrefInP>printing and typesetting</AhrefInP> industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </SansP>
      <h2>Styled Links</h2>
      <h2>Back Link</h2>
      <BackLink>Back to previous page</BackLink>
    </DevPage>
  )
}

export default DevLinksPage
