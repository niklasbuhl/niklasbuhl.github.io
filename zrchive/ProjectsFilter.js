import React, { Component } from 'react'
// import { Formik, Form, Field, FieldArray } from 'formik'
import { Formik, Form, Field } from 'formik'

//https://codesandbox.io/s/brave-burnell-u81cl

import "../styles/projects.scss"

class ProjectsFilter extends Component {

  constructor(props) {
    super()

    console.log("Contruct")

    this.state = {
      tags: {
        institutions: [],
        years: [],
        topics: [],
        tools: [],
        types: [],
      }
    }

    this.handleChange = this.handleChange.bind(this);


    // console.log(this.state.tags)
    this.loadTags = this.loadTags.bind(this);
    this.loadTags(props.projects)

    console.log("Contruct Done")

  }

  handleChange(values) {

    // console.log(values)

    this.props.filterCallback(values)

  }

  loadTags(projects) {

    var institutions = [];
    var years = [];
    var topics = [];
    var tools = [];
    var types = [];

    var now = +new Date();

    for (var i = 0; i < projects.length; i++) {

      // Institutions
      if (institutions.includes(projects[i].frontmatter.info.mainInstitution) === false) {
        institutions.push(projects[i].frontmatter.info.mainInstitution)
      }

      var j

      for (j = 0; j < projects[i].frontmatter.info.date.years.length; j++) {
        if (years.includes(projects[i].frontmatter.info.date.years[j]) === false) {
          years.push(projects[i].frontmatter.info.date.years[j])
        }
      }

      for (j = 0; j < projects[i].frontmatter.tags.topics.length; j++) {
        if (topics.includes(projects[i].frontmatter.tags.topics[j]) === false) {
          topics.push(projects[i].frontmatter.tags.topics[j])
        }
      }

      for (j = 0; j < projects[i].frontmatter.tags.tools.length; j++) {
        if (tools.includes(projects[i].frontmatter.tags.tools[j]) === false) {
          tools.push(projects[i].frontmatter.tags.tools[j])
        }
      }

      for (j = 0; j < projects[i].frontmatter.tags.types.length; j++) {
        if (types.includes(projects[i].frontmatter.tags.types[j]) === false) {
          types.push(projects[i].frontmatter.tags.types[j])
        }
      }
    }

    years.sort()

    // this.setState({ tags: { ...this.state.tags, institutions: institutions} });
    // this.setState({ tags: { ...this.state.tags, years: years} });
    // this.setState({ tags: { ...this.state.tags, topics: topics} });
    // this.setState({ tags: { ...this.state.tags, tools: tools} });
    // this.setState({ tags: { ...this.state.tags, types: types} });
    this.setState({ tags: { institutions: institutions} });
    this.setState({ tags: { years: years} });
    this.setState({ tags: { topics: topics} });
    this.setState({ tags: { tools: tools} });
    this.setState({ tags: { types: types} });

    // this.setState.tags({institutions: institutions})
    // this.setState.tags({years: years})
    // this.setState.topics({topics: topics})
    // this.setState.tools({institutions: tools})
    // this.setState.types({institutions: types})

    // this.state.tags.institutions = institutions
    // this.state.tags.years = years
    // this.state.tags.topics = topics
    // this.state.tags.tools = tools
    // this.state.tags.types = types

    // console.log(this.state.tags.institutions)
    // console.log(this.state.tags.years)
    // console.log(this.state.tags.topics)
    // console.log(this.state.tags.tools)
    // console.log(this.state.tags.types)

    var difference = +new Date() - now;

    console.log("Time: "+difference)

  }

  render() {

    // console.log("Projects Filter")
    // console.log(this.state.tags)

    console.log("Render")

    return (
      <div className="project-filter">
        <ProjectsForm callBackFunction={this.handleChange} filter={this.props.filter} tags={this.state.tags}/>
      </div>
    )
  }
}

// class Checkbox extends Component {
//
//   constructor(props) {
//     super()
//   }
//
//   render() {
//
//     return (
//       <div className="gut-1 mar-bot-2">
//         <input
//           className="hidden project-tags-checkbox"
//           id={this.props.name + '-' + this.props.value}
//           name={this.props.name}
//           type="checkbox"
//           value={this.props.value}
//           checked={this.props.source.includes(this.props.value)}
//           onChange={event => {
//             if(event.target.checked) {
//               this.props.arrayHelpers.push(this.props.value)
//             }
//             else {
//               const idx = this.props.source.indexOf(this.props.value)
//               this.props.arrayHelpers.remove(idx)
//             }
//           }}
//         />
//         <label
//           htmlFor={this.props.name + '-' + this.props.value}
//           className="project-tags-checkbox-label"
//         >
//           {this.props.title}
//         </label>
//       </div>
//     )
//   }
// }

const ProjectsForm = (props) => {

  // console.log("Project Form")
  // console.log(props.tags)

  return (
    <Formik
      initialValues={props.filter}
      onSubmit={(values) => { props.callBackFunction(values) }}
      validate={(values) => { props.callBackFunction(values) }}
      validateOnChange={true}
    >
      {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (
        <Form>

          <div className="flex-row col-12 mar-bot-4">

            <div className="gut-2 col-12">

              <Field
                style={{
                  width: '100%',
                  height: '32px',
                  fontSize: '24px',
                  border: 'none',
                  margin: '0',
                  padding: '0'

                }}
                type="text"
                name="search"
                placeholder="Type to search projects..."
              />

            </div>

          </div>

          {/*

          <div className="col-12 flex-row">

            <code className="tag-label gut-2 col-2">Institutions</code>

            <div className="col-10">

              <FieldArray
                name="institutions"
                render={arrayHelpers => {
                  var institutions = []
                  for(var i = 0; i < props.tags.institutions.length; i++) {
                    institutions.push(<Checkbox key={i} arrayHelpers={arrayHelpers} name="institutions" value={props.tags.institutions[i]} source={props.filter.institutions} title={props.tags.institutions[i]} />)
                  }
                  return(
                    <div className="flex-row col-12 gut-1">
                      {institutions}
                    </div>
                  )
                }}
              />

            </div>

          </div>

          <div className="col-12 flex-row">
            <code className="tag-label gut-2 col-2">Years</code>
            <div className="col-10">

              <FieldArray
              name="years"
              render={arrayHelpers => {
                var years = []
                for(var i = 0; i < props.tags.years.length; i++) years.push(<Checkbox key={i} arrayHelpers={arrayHelpers} name="years" value={props.tags.years[i]} source={props.filter.years} title={props.tags.years[i]} />)
                return (
                  <div className="flex-row col-12 gut-1">
                  {years}
                  </div>
                )}}
                />
            </div>
          </div>

          <div className="col-12 flex-row">
            <code className="tag-label gut-2 col-2">Topics</code>
            <div className="col-10">

              <FieldArray
                name="topics"
                render={arrayHelpers => {
                  var topics = []
                  for(var i = 0; i < props.tags.topics.length; i++) topics.push(<Checkbox key={i} arrayHelpers={arrayHelpers} name="topics" value={props.tags.topics[i]} source={props.filter.topics} title={props.tags.topics[i]} />)
                  return (
                  <div className="flex-row col-12 gut-1">
                    {topics}
                  </div>
                )}}
              />
            </div>
          </div>

          <div className="col-12 flex-row">

            <code className="tag-label gut-2 col-2">Tools</code>

            <div className="col-10">

              <FieldArray
                name="tools"
                render={arrayHelpers => {
                  var tools = []
                  for(var i = 0; i < props.tags.tools.length; i++) tools.push(<Checkbox key={i} arrayHelpers={arrayHelpers} name="tools" value={props.tags.tools[i]} source={props.filter.tools} title={props.tags.tools[i]} />)
                  return (
                  <div className="flex-row col-12 gut-1">
                    {tools}
                  </div>
                )}}
              />
            </div>
          </div>

          <div className="col-12 flex-row">
            <code className="tag-label gut-2 col-2">Types</code>
            <div className="col-10">
              <FieldArray
                name="types"
                render={arrayHelpers => {
                  var types = []
                  for(var i = 0; i < props.tags.types.length; i++) types.push(<Checkbox key={i} arrayHelpers={arrayHelpers} name="types" value={props.tags.types[i]} source={props.filter.types} title={props.tags.types[i]} />)
                  return (
                  <div className="flex-row col-12 gut-1">
                    {types}
                  </div>
                )}}
              />
            </div>
          </div>


          <div className="gut-2">
            <Field component="select" name="sortBy">
              <option value="selected"> Selected  </option>
              <option value="name">     Name      </option>
              <option value="latest">   Latest    </option>
              <option value="earliest"> Earliest  </option>
            </Field>
          </div>

          */}

        </Form>
      )}
    </Formik>
  )
}

export default ProjectsFilter
