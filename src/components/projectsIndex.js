import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const ProjectsIndex = () => {
  const data = useStaticQuery(
    graphql`
      query projectsIndexQuery {
        allMdx(sort: { fields: frontmatter___title, order: ASC }) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              slug
            }
          }
        }
      }
    `
  )

  return (
    <>
      <ul>
        {data.allMdx.edges.map(({ node: project }) => (
          <li key={project.id}>
            <Link to={"/projects/" + project.slug}>
              {project.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProjectsIndex
