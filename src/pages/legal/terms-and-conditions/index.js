import React from "react"
// import FullPageCenterContent from "../../../components/wrappers/FullPageCenterContent"
import PageLayout from "../../../layouts/page-layout-v2"
import FullPageSection from "../../../components/sections/FullPageSection"

const TermsAndConditionsPage = props => {
  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <h1>Terms and Conditions</h1>
      </FullPageSection>
    </PageLayout>
  )
}

export default TermsAndConditionsPage
