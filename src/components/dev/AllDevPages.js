import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import styles from "../../styles/styles"

const StyledDevLink = styled(Link)`
  ${styles.fonts.code}
  font-size: 14px;
  margin-left: var(--halfGutter);
  margin-bottom: var(--halfGutter);
  background: var(--light-gray);
  width: fit-content;
  padding: 4px;
  color: var(--soft-black);
  text-decoration: none;

  &:hover {
    background: var(--gray);
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: fit-content;
`

const AllDevPages = () => {
  const [devPages] = useState(
    useStaticQuery(
      graphql`
        query devPagesQuery {
          allFile(
            filter: { dir: { regex: "/dev/" }, name: { ne: "_example" } }
          ) {
            nodes {
              id
              dir
              name
            }
          }
        }
      `
    ).allFile.nodes
  )

  return (
    <Container>
      {devPages.map(node => {
        return (
          <StyledDevLink key={node.id} to={"/dev/" + node.name}>
            {node.name}.js
          </StyledDevLink>
        )
      })}
    </Container>
  )
}

export default AllDevPages
