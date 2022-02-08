import React, { useState } from "react"
import ProjectsIndex from "../../components/projects/projectsIndex"
import PageLayout from "../../layouts/page-layout-v2"
import FullPageSection from "../../components/sections/FullPageSection"
import Content from "../../components/wrappers/Content"
import { graphql, useStaticQuery } from "gatsby"
import ProjectsFilter from "../../components/projects/ProjectsFilter"

const ProjectsPage = props => {
  // Filter
  const [filter, setFilter] = useState({
    shouldFilter: false,
    search: "",
    types: {},
    institutions: {},
    years: {},
    topics: {},
    tools: {},
    status: {},
  })

  // Projects Information
  const [projects] = useState(
    useStaticQuery(
      graphql`
        query projectsIndexQuery {
          allMdx {
            edges {
              node {
                id
                slug
                frontmatter {
                  title
                  description
                  featured
                  institutions
                  keywords {
                    tools
                    topics
                  }
                  location
                  people {
                    name
                    role
                  }
                  score
                  status
                  subtitle
                  types
                  years
                  tileTextColorScheme
                  tileImage {
                    childImageSharp {
                      id
                      gatsbyImageData(
                        width: 400
                        blurredOptions: { width: 100 }
                        placeholder: BLURRED
                        transformOptions: { cropFocus: CENTER }
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `
    ).allMdx.edges
  )

  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content>
          <h1 style={{ color: "var(--gray)" }}>Projects</h1>
          {/* <Projects Filter /> */}
          <ProjectsFilter
            // filter={filter}
            setFilter={setFilter}
            projects={projects}
          />

          {/* Projects Index (Visible) */}
          <ProjectsIndex filter={filter} projects={projects} />
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default ProjectsPage
