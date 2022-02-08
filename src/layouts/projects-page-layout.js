import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import PageLayout from "./page-layout-v2"
import FullPageSection from "../components/sections/FullPageSection"
import Content from "../components/wrappers/Content"
import styled from "styled-components"
import styles from "../styles/styles"

const shortcodes = { Link } // Provide common components here

// const ProjectPageTemplate = (props, { data: { mdx } }) => {
//   return (
//     <PageLayout location={props.location}>
//       <Link to="/projects">Back to projects</Link>
//       <MDXProvider components={shortcodes}>
//         <h1>{mdx.frontmatter.title}</h1>
//         <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
//       </MDXProvider>
//     </PageLayout>
//   )
// }

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

function ProjectPageTemplate({ data: { mdx } }, location) {
  return (
    <PageLayout location={location}>
      <FullPageSection>
        <Content>
          <BackLink to="/projects"></BackLink>
          <Link to="/projects">Back to projects</Link>
          <MDXProvider components={shortcodes}>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>{" "}
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query Project($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default ProjectPageTemplate
