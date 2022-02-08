import React from "react"
import PageLayout from "../../layouts/page-layout-v2"
import FullPageSection from "../../components/sections/FullPageSection"
import Content from "../../components/wrappers/Content"

import { Formik, Form, Field } from "formik"

const Page = props => {
  const filter = {
    search: "",
    years: {
      2021: false,
      2022: false,
    },
    topics: {
      sustainability: false,
      tech: false,
    },
    tools: {
      react: false,
      html: false,
    },
    type: {
      website: false,
      game: false,
    },
  }

  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content>
          <Formik
            initialValues={filter}
            onSubmit={values => console.log(values)}
            validate={values => {
              console.log(values)
            }}
            validateOnChange={true}
          >
            {({ handleSubmit, handleChange, handleBlur, values }) => {
              return (
                // <Form onSubmit={handleSubmit} onChange={handleSubmit}>
                <Form onSubmit={handleSubmit}>
                  <Field
                    key="search"
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={values.search}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {Object.keys(filter.years).map(year => (
                    <div key={year}>
                      {year}
                      <Field
                        type="checkbox"
                        name={"years." + year}
                        placeholder="false"
                        value={values.years.year}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  ))}
                </Form>
              )
            }}
          </Formik>
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default Page
