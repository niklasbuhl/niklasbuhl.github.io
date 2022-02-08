import React, { Component} from 'react'
import { graphql } from 'gatsby'

import WebPage from '../components/WebPage'
import ProjectsFilter from '../components/ProjectsFilter'
import ProjectsVisible from '../components/ProjectsVisible'
import Background from '../components/Background'

class ProjectsPage extends Component {

  constructor() {
    super()

    this.state = {
      filter: {
        search: '',
        institutions: [],
        years: [],
        topics: [],
        tools: [],
        types: [],
        sortBy: '',
      },
    }

    this.filterCallback = this.filterCallback.bind(this);

  }

  filterCallback(updatedFilter) {

    // console.log("Current: ")
    // console.log(this.state.filter)
    // console.log("Update: ")
    // console.log(updatedFilter)
    this.setState({filter: updatedFilter})
    // console.log("Updated v2: ")
    // console.log(this.state.filter)

  }

  render() {

    const projects = this.props.data.allMdx.nodes

    return (
      <WebPage>
        <Background color="rgba(255,255,255,1)" type="entire">

          <article className="gutter flex-col col-12">

            <section className="flex-col col-12 gut-2">

              <ProjectsFilter
                projects={projects}
                filter={this.state.filter}
                filterCallback={this.filterCallback}
              />

            </section>

            <section className="flex-row gut-3 col-12">
              <ProjectsVisible
                projects={projects}
                filter={this.state.filter}
                filterCallback={this.filterCallback}
              />
            </section>

          </article>

        </Background>
      </WebPage>
    )
  }
}

export default ProjectsPage

export const projectsQuery = graphql`
  query {
    allMdx(filter: {frontmatter: {meta: {type: {eq: "project"}}}}) {
      nodes {
        id
        frontmatter {
          meta {
            slug
          }
          info {
            title
            subtitle
            description
            mainInstitution
            date {
              years
            }
          }
          tags {
            topics
            tools
            types
          }
        }
      }
    }
  }
`
