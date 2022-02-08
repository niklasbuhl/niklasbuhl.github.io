import React from "react"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"

const Page = props => {
  return (
    <DevPage title="Examples" location={props.location}>
      <FullPageSection>
        <p>Example Development Page</p>
      </FullPageSection>
    </DevPage>
  )
}

export default Page
