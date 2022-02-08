import React, { useState, useEffect } from "react"
import ProjectsForm from "./ProjectsForm"
// import ProjectsIndex from "./projectsIndex"

const ProjectsFilter = props => {
  // console.log("--- Projects Filter ---")
  // console.log(props.projects)
  // console.log(props.filter)
  // console.log(props.setFilter)

  const [formFilter, setFormFilter] = useState({
    search: "",
    types: {},
    institutions: {},
    years: {},
    topics: {},
    tools: {},
    status: {},
  })

  useEffect(() => {
    var types = []
    var institutions = []
    var years = []
    var topics = []
    var tools = []
    var status = []

    var filter = {
      shouldFilter: false,
      search: "",
      status: {},
      types: {},
      institutions: {},
      years: {},
      topics: {},
      tools: {},
    }

    // Get all the tags from the projects
    props.projects.map(project => {
      var i

      // Status
      for (i = 0; i < project.node.frontmatter.status.length; i++) {
        var newStatus = project.node.frontmatter.status[i]
        if (!status.includes(newStatus)) status.push(newStatus)
      }

      // Types
      for (i = 0; i < project.node.frontmatter.types.length; i++) {
        var type = project.node.frontmatter.types[i]
        if (!types.includes(type)) types.push(type)
      }

      // Institutions
      for (i = 0; i < project.node.frontmatter.institutions.length; i++) {
        var institution = project.node.frontmatter.institutions[i]
        if (!institutions.includes(institution)) institutions.push(institution)
      }

      // Years
      for (i = 0; i < project.node.frontmatter.years.length; i++) {
        var year = project.node.frontmatter.years[i]
        if (!years.includes(year)) years.push(year)
      }

      // Topics
      if (project.node.frontmatter.keywords.topics) {
        for (i = 0; i < project.node.frontmatter.keywords.topics.length; i++) {
          var topic = project.node.frontmatter.keywords.topics[i]
          if (!topics.includes(topic)) topics.push(topic)
        }
      }

      // Tools
      if (project.node.frontmatter.keywords.topics) {
        for (i = 0; i < project.node.frontmatter.keywords.tools.length; i++) {
          var tool = project.node.frontmatter.keywords.tools[i]
          if (!tools.includes(tool)) tools.push(tool)
        }
      }

      // return null
    })

    // Add to the filter

    // Status
    status.forEach(aStatus => {
      var statusObj = JSON.parse('{"' + aStatus + '" : false }')
      filter.status = { ...filter.status, ...statusObj }
    })

    // Types
    types.forEach(type => {
      var typeObj = JSON.parse('{"' + type + '" : false }')
      filter.types = { ...filter.types, ...typeObj }
    })

    // Institutions
    institutions.forEach(institution => {
      var institutionObj = JSON.parse('{"' + institution + '" : false }')
      filter.institutions = { ...filter.institutions, ...institutionObj }
    })

    // Years
    years.forEach(year => {
      var yearObj = JSON.parse('{"' + year + '" : false }')
      filter.years = { ...filter.years, ...yearObj }
    })

    // Topics
    topics.forEach(topic => {
      var topicObj = JSON.parse('{"' + topic + '" : false }')
      filter.topics = { ...filter.topics, ...topicObj }
    })

    // Tools
    tools.forEach(tool => {
      var toolObj = JSON.parse('{"' + tool + '" : false }')
      filter.tools = { ...filter.tools, ...toolObj }
    })

    setFormFilter(filter)

    // console.log("Project Filter useEffect")
    // console.log(filter)
  }, [props.projects])

  return <ProjectsForm filter={formFilter} callBack={props.setFilter} />

  // return <>Form</>
}

export default ProjectsFilter
