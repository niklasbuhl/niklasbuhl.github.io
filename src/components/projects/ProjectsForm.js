import React from "react"
import { Formik, Form } from "formik"
import SearchBar from "../formikFormElements/SearchBar"
import TagCheckbox from "../formikFormElements/TagCheckboxBoxed"
import FlexElement from "../elements/FlexElement"
import ResetFormButton from "../formikFormElements/ResetFormButton"
import styled from "styled-components"
import styles from "../../styles/styles"

const TagHeader = styled.div`
  ${styles.fonts.code}
  color: var(--neon-purple);
  padding: 5px;
  padding-left: 0;
  font-size: 12px;
  min-width: 96px;
`

const ProjectsForm = props => {
  // console.log(props.filter)
  // console.log(props.callBack)
  // console.log("Project Form Rerun")

  return (
    <Formik
      initialValues={props.filter}
      onSubmit={values =>
        // console.log(values)
        // props.callBack(values)
        console.log("Submit")
      }
      validate={values => {
        // console.log(values)
        console.log("validate")
        props.callBack(values)
        // console.log("is submitting: ", isSubmitting)
      }}
      validateOnChange={true}
      onReset={values => props.callBack(values)}
    >
      {({ handleChange, handleBlur, resetForm, values }) => {
        return (
          // <Form onSubmit={handleSubmit} onChange={handleSubmit}>
          // <Form onSubmit={handleSubmit}>
          <Form style={{ display: "flex", flexFlow: "column", width: "100%" }}>
            {/* Search */}
            {/* <Field
              key="search"
              type="text"
              name="search"
              placeholder="Search"
              value={values.search}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}

            <FlexElement flow={"row"}>
              <SearchBar
                // key="search"
                name="search"
                placeholder="Search"
                value={values.search}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ flexGrow: "1" }}
              />

              <ResetFormButton type="reset" onClick={resetForm}>
                Reset
              </ResetFormButton>
            </FlexElement>

            <FlexElement margin={"8px"}>
              {/* Types */}
              <FlexElement flow={"row"}>
                <TagHeader>status</TagHeader>
                <FlexElement flow={"row wrap"}>
                  {Object.keys(props.filter.status).map(aStatus => (
                    <div key={aStatus}>
                      <TagCheckbox
                        content={aStatus}
                        name={"status." + aStatus}
                        placeholder="false"
                        value={values.status.aStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </FlexElement>
              </FlexElement>

              {/* Types */}
              <FlexElement flow={"row"}>
                <TagHeader>type</TagHeader>
                <FlexElement flow={"row wrap"}>
                  {Object.keys(props.filter.types).map(type => (
                    <div key={type}>
                      <TagCheckbox
                        content={type}
                        name={"types." + type}
                        placeholder="false"
                        value={values.types.type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </FlexElement>
              </FlexElement>

              {/* Institutions */}
              <FlexElement flow={"row"}>
                <TagHeader>institution</TagHeader>
                <FlexElement flow={"row wrap"}>
                  {Object.keys(props.filter.institutions).map(institution => (
                    <div key={institution}>
                      <TagCheckbox
                        content={institution}
                        type="checkbox"
                        name={"institutions." + institution}
                        placeholder="false"
                        value={values.institutions.institution}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </FlexElement>
              </FlexElement>

              {/* Years */}
              <FlexElement flow={"row"}>
                <TagHeader>years</TagHeader>
                <FlexElement flow={"row wrap"}>
                  {Object.keys(props.filter.years).map(year => (
                    <div key={year}>
                      <TagCheckbox
                        content={year}
                        type="checkbox"
                        name={"years." + year}
                        placeholder="false"
                        value={values.years.year}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </FlexElement>
              </FlexElement>

              {/* Topics */}
              <FlexElement flow={"row"}>
                <TagHeader>topics</TagHeader>
                <FlexElement flow={"row wrap"}>
                  {Object.keys(props.filter.topics).map(topic => (
                    <div key={topic}>
                      <TagCheckbox
                        content={topic}
                        type="checkbox"
                        name={"topics." + topic}
                        placeholder="false"
                        value={values.topics.topic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </FlexElement>
              </FlexElement>

              {/* Tools */}
              <FlexElement flow={"row"}>
                <TagHeader>tools</TagHeader>
                <FlexElement flow={"row wrap"}>
                  {Object.keys(props.filter.tools).map(tool => (
                    <div key={tool}>
                      <TagCheckbox
                        content={tool}
                        type="checkbox"
                        name={"tools." + tool}
                        placeholder="false"
                        value={values.tools.tool}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </FlexElement>
              </FlexElement>
            </FlexElement>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ProjectsForm
