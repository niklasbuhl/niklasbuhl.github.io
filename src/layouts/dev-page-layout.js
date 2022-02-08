import React from "react"
import PageLayout from "./page-layout-v2"
import FullPageSection from "../components/sections/FullPageSection"
import Content from "../components/wrappers/Content"
import styles from "../styles/styles"
import styled from "styled-components"
import { Link } from "gatsby"
import Back from "../assets/icons/back-01.svg"

/*
const CleanLink = css`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`
*/

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

const DevPage = props => {
  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content>
          <BackLink to="/#development-pages">
            <Back
              style={{ maxWidth: "10px", marginRight: "8px", marginTop: "2px" }}
            />
            Back to Development Overview{" "}
          </BackLink>
          <h1>{props.title}</h1>
          {props.children}
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default DevPage
