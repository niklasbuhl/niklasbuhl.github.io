import React, { useState } from "react"
import FlexElement from "../elements/FlexElement"
// import ProjectCard from "../../components/projects/ProjectCard"
import ProjectCard from "./ProjectCard.v2"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
`

const lightColorSchema = {
  textColor: "var(--hard-white)",
}

const neonPurpleColorSchema = {
  textColor: "var(--neon-purple)",
}

const darkColorSchema = {
  textColor: "var(--soft-black)",
}

const FeaturedProjects = () => {
  const [featuredProjects] = useState(
    useStaticQuery(
      graphql`
        query featuredProjectsQuery {
          allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
            edges {
              node {
                id
                slug
                frontmatter {
                  types
                  status
                  subtitle
                  title
                  institutions
                  location
                  description
                  keywords {
                    topics
                    tools
                  }
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
    <>
      <Ul>
        {featuredProjects.map(item => {
          var project = item.node

          // console.log(project.frontmatter.tile_image)

          // var colorSchema

          // // console.log(project.frontmatter.tileTextColorScheme)

          // switch (project.frontmatter.tileTextColorScheme) {
          //   case "light":
          //     colorSchema = lightColorSchema
          //     break

          //   case "neonPurple":
          //     colorSchema = neonPurpleColorSchema
          //     break

          //   case "dark":

          //   default:
          //     colorSchema = darkColorSchema
          //     break
          // }

          console.log(project.frontmatter.tileTextColorScheme)

          return (
            // <div key={project.id}></div>
            <FlexElement type={"li"} key={project.id} col={4} grow={"1"}>
              {/* <ProjectCard
                title={project.frontmatter.title}
                slug={"/projects/" + project.slug}
              >
                {project.frontmatter.title}
              </ProjectCard> */}
              <ProjectCard
                to={"/projects/" + project.slug}
                type={project.frontmatter.types}
                title={project.frontmatter.title}
                subtitle={project.frontmatter.subtitle}
                years={project.frontmatter.years}
                status={project.frontmatter.status}
                institution={project.frontmatter.institutions}
                description={project.frontmatter.description}
                colorSchema={project.frontmatter.tileTextColorScheme}
                bgImage={
                  <GatsbyImage
                    image={getImage(project.frontmatter.tileImage)}
                    alt="tile image"
                    style={{
                      pointEvents: "none",
                      zIndex: "40",
                    }}
                  />
                }
                tags={{
                  tools: project.frontmatter.keywords.tools,
                  topics: project.frontmatter.keywords.topics,
                }}
              />
            </FlexElement>
          )
        })}
      </Ul>
    </>
  )
}

export default FeaturedProjects
