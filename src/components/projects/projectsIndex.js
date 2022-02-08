import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import FlexElement from "../elements/FlexElement"
import ProjectCard from "./ProjectCard.v2"
import styled from "styled-components"
import Fuse from "fuse.js"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
`

const ProjectsIndex = props => {
  // console.log("--- Project Index Filtering ---")
  // console.log(projects.allMdx.edges)

  // # --- Setup Fuse
  const options = {
    useExtendedSearch: true,
    shouldSort: true,
    includeScore: true,
    threshold: 0.3,
    keys: [
      "node.frontmatter.score",
      "node.frontmatter.featured",
      "node.frontmatter.tile-image",
      "node.frontmatter.types",
      "node.frontmatter.status",
      "node.frontmatter.title",
      "node.frontmatter.subtitle",
      "node.frontmatter.description",
      "node.frontmatter.years",
      "node.frontmatter.institutions",
      "node.frontmatter.location",
      "node.frontmatter.keywords.topics",
      "node.frontmatter.keywords.tools",
      "node.frontmatter.people.name",
      "node.frontmatter.people.role",
    ],
  }

  const fuse = new Fuse(props.projects, options)

  // # --- Get tags

  var types = []
  var institutions = []
  var status = []
  // var title = []
  // var subtitle = []
  // var description = []
  var years = []
  // var location = []
  var topics = []
  var tools = []

  // console.log("status:")
  // console.log(props.filter.status)
  // console.log("types")
  // console.log(props.filter.types)

  // Status
  Object.entries(props.filter.status).forEach(entry => {
    if (entry[1]) status.push(entry[0])
  })

  // ## Types
  Object.entries(props.filter.types).forEach(entry => {
    if (entry[1]) types.push(entry[0])
  })

  // ## Institutions
  Object.entries(props.filter.institutions).forEach(entry => {
    if (entry[1]) institutions.push(entry[0])
  })

  // ## Years
  Object.entries(props.filter.years).forEach(entry => {
    if (entry[1]) years.push(entry[0])
  })

  // ## Topics
  Object.entries(props.filter.topics).forEach(entry => {
    if (entry[1]) topics.push(entry[0])
  })

  // ## Tools
  Object.entries(props.filter.tools).forEach(entry => {
    if (entry[1]) tools.push(entry[0])
  })

  // # --- Queries

  // ## Main Query
  var mainQuery = { $and: [] }

  var searchQuery = { $or: [] }

  // ## Search Query
  /*

  - title
  - description
  - subtitle
  - people
  - tags?
    - types
    - institutions
    - status
    - years
    - location
    - topics
    - tools


  */
  if (props.filter.search.length) {
    // Title
    searchQuery.$or.push({
      "node.frontmatter.title": props.filter.search,
    })

    // Subtitle
    searchQuery.$or.push({
      "node.frontmatter.subtitle": props.filter.search,
    })

    // Description
    searchQuery.$or.push({
      "node.frontmatter.description": props.filter.search,
    })

    // People
    searchQuery.$or.push({
      "node.frontmatter.people.name": props.filter.search,
    })
    searchQuery.$or.push({
      "node.frontmatter.people.role": props.filter.search,
    })

    // Push to mainQuery
    mainQuery.$and.push(searchQuery)
  }

  // ## Tag Queries

  var statusQuery = []
  var typesQuery = []
  var institutionsQuery = []
  var yearsQuery = []
  var topicsQuery = []
  var toolsQuery = []

  // Check the filter for tags
  status.forEach(status =>
    statusQuery.push({
      "node.frontmatter.status": "'" + status,
    })
  )

  types.forEach(type =>
    typesQuery.push({ "node.frontmatter.types": "'" + type })
  )

  institutions.forEach(institution =>
    institutionsQuery.push({
      "node.frontmatter.institutions": "'" + institution,
    })
  )

  years.forEach(year => {
    yearsQuery.push({ "node.frontmatter.years": "'" + year })
  })

  topics.forEach(topic =>
    topicsQuery.push({
      "node.frontmatter.keywords.topics": "'" + topic,
    })
  )

  tools.forEach(tools =>
    toolsQuery.push({
      "node.frontmatter.keywords.tools": "'" + tools,
    })
  )

  // Add queries to the main query if there's anything selected in the filter
  if (statusQuery.length) mainQuery.$and.push({ $or: statusQuery })
  if (typesQuery.length) mainQuery.$and.push({ $or: typesQuery })
  if (institutionsQuery.length) mainQuery.$and.push({ $or: institutionsQuery })
  if (yearsQuery.length) mainQuery.$and.push({ $or: yearsQuery })
  if (topicsQuery.length) mainQuery.$and.push({ $or: topicsQuery })
  if (toolsQuery.length) mainQuery.$and.push({ $or: toolsQuery })

  // --- Filter projects if there is a query

  console.log(mainQuery)

  const filteredProjects = mainQuery.$and.length
    ? fuse.search(mainQuery)
    : props.projects

  // console.log(filteredProjects)

  return (
    <>
      <Ul>
        {filteredProjects.map(item => {
          var project

          if (mainQuery.$and.length) project = item.item.node
          else project = item.node

          return (
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

              {/* <ProjectCard
                title={project.frontmatter.title}
                slug={"/projects/" + project.slug}
              >
                {project.frontmatter.title}
              </ProjectCard> */}
            </FlexElement>
          )
        })}
      </Ul>
    </>
  )
}

export default ProjectsIndex

/*

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

      <Ul>
        {data.allMdx.edges.map(({ node: project }) => (
          <ElementFlex type={"li"} key={project.id} col={4} grow={"1"}>
            <ProjectCard
              title={project.frontmatter.title}
              slug={"/projects/" + project.slug}
            >
              {project.frontmatter.title}
            </ProjectCard>
          </ElementFlex>
        ))}
      </Ul>


        console.log("Final Projects")
  console.log(filteredProjects)
  console.log("Initial Projects")
  console.log(props.projects)

  // const filteredProjects = fuse.search({
  //   $and: [
  //     { "node.frontmatter.title": props.filter.search },
  //     { $and: institutionsQuery },
  //   ],
  // })

  // console.log("Filtered Projects: ", filteredProjects)

  // filteredProjects.map(project => {
  //   console.log(project.item.node.frontmatter)
  //   // project.item
  // })

    var institutions = []
  // console.log("Get Tags - Institutions:")
  // console.log(props.filter.institutions)
  // var institutions = props.filter.institutions
  Object.entries(props.filter.institutions).forEach(entry => {
    // console.log(entry)
    if (entry[1]) institutions.push(entry[0])
    // if (entry[1]) console.log(entry[0])
  })
  // institutions.map(institutions => console.log(institutions))
  // console.log("Institutions: ", institutions)

*/
