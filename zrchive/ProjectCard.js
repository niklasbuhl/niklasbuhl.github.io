import React, { Component} from 'react'
import { Link } from 'gatsby'

import Aspect from './Aspect'

import '../styles/styles.scss'

class ProjectCard extends Component {

  constructor(props) {
    super()
  }

  componentDidMount() {

  }

  render() {

    // Variables
    var i

    // Tags Topics
    const topics = []

    if (this.props.topics != null) {
      for (i = 0; i < this.props.topics.length; i++) {
        topics.push(<span className="tag" key={i}>{this.props.topics[i]}</span>)
      }
    } else topics.push("")

    // Tags Tools
    const tools = []

    if (this.props.tools != null) {
      for (i = 0; i < this.props.tools.length; i++) {
        tools.push(<span className="tag" key={i}>{this.props.tools[i]}</span>)
      }
    } else tools.push("")

    // Tags Type
    const types = []

    if (this.props.types != null) {
      for (i = 0; i < this.props.types.length; i++) {
        types.push(<span className="tag" key={i}>{this.props.types[i]}</span>)
      }
    } else types.push("")

    // Years
    const years = []

    if (this.props.years != null) {
      for (i = 0; i < this.props.years.length; i++) {
        years.push(<span className="tag" key={i}>{this.props.years[i]}</span>)
      }
    } else years.push("")

    return (
      <Link className="project-card-link col-6 gut-1" to={this.props.slug}>
        <Aspect width='4' height='3'>
          <div className="projects-card-wrapper gut-4 flex-col" style={{
             justifyContent: 'space-between',
          }}>

            {/* Intro */}
            <div className="intro">
              <h1>{this.props.title}</h1>
              <p className="subtitle">{this.props.subtitle}</p>
              <div className="flex-row">
                <p className="institution">
                  <span className="tag">@{this.props.mainInstitution}</span>
                  {years}
                </p>
              </div>
            </div>

            {/* Description*/}
            <div className="description">
              <p className="description">{this.props.description}</p>
            </div>

            {/* Tags */}
            <div className="tags">
              <p>
                <code>
                  <span className="flex-row">{topics}{tools}{types}</span>
                </code>
              </p>
            </div>
          </div>
        </Aspect>
      </Link>
    )
  }

}

export default ProjectCard
