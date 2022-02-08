import React, { Component } from "react"
import ProjectCard from "./ProjectCard"
import Fuse from "fuse.js"

class ProjectsVisible extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    // console.log(this.props.filter)
    // console.log(this.props.projects)
  }

  componentDidUpdate() {
    // console.log(this.props.filter.search)
  }

  render() {
    // --- Original Projects
    var projects = this.props.projects

    /*

    // --- Tags Input
    const tagFilter = null

    if (tagFilter) {

      var fuseTagOptions = {
        shouldSort: true,
        tokenize: true,
        matchAllTokens: true,
        minMatchCharLength: 1,
        keys: [
          "frontmatter.info.title",
        ]
      }
    }

    // --- Year Input
    const yearFilter = null

    if (yearFilter) {

      var fuseYearOptions = {
        shouldSort: true,
        tokenize: true,
        minMatchCharLength: 1,
        keys: [
          "frontmatter.info.title",
        ]
      }

    }

    // --- State Input
    const stateFilter = null

    if (stateFilter) {

      var fuseStateOptions = {
        shouldSort: true,
        tokenize: true,
        minMatchCharLength: 1,
        keys: [
          "frontmatter.info.title",
        ]
      }

    }

    */

    // --- Search Input

    const searchFilter = this.props.filter.search
    // console.log("Search: " + searchInput)

    if (searchFilter) {
      var fuseSearchOptions = {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 200,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "frontmatter.info.title",
          "frontmatter.info.subtitle",
          "frontmatter.info.description",
          // People
          "frontmatter.people",
          // Tags
          "frontmatter.tags.topics",
          "frontmatter.tags.tools",
          "frontmatter.tags.type",
          // Year
          // "frontmatter.year"
        ],
      }

      var fuseSearch = new Fuse(projects, fuseSearchOptions)

      projects = fuseSearch.search(searchFilter)
    }

    // --- Final Visually Projects

    // console.log(projects)

    projects = projects.map(project => {
      // console.log(project.id)
      // console.log(project.frontmatter.title)
      // console.log(project.frontmatter.date)
      // console.log(project.frontmatter.project_type)
      // console.log(project.frontmatter.keywords)
      // console.log(project.html)

      return (
        <ProjectCard
          key={project.id}
          slug={project.frontmatter.meta.slug}
          title={project.frontmatter.info.title}
          subtitle={project.frontmatter.info.subtitle}
          description={project.frontmatter.info.description}
          years={project.frontmatter.info.date.years}
          mainInstitution={project.frontmatter.info.mainInstitution}
          topics={project.frontmatter.tags.topics}
          tools={project.frontmatter.tags.tools}
          types={project.frontmatter.tags.types}

          // date={project.frontmatter.date}
          // description="Very cool project!"
          // keywords={project.frontmatter.keywords}
          // projectType={project.frontmatter.project_type}
          // institution="Silicon VØ"
        />
      )
    })

    return (
      <div className="flex-row">
        {/* <h2>Project Visible</h2> */}
        {projects}
      </div>
    )
  }
}

export default ProjectsVisible
