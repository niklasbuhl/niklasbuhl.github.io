import React from "react"
import PageLayout from "../../layouts/page-layout-v2"
import FullPageSection from "../../components/sections/FullPageSection"
import Content from "../../components/wrappers/Content"

const IndexPage = props => {
  const texts = [
    "Sorry, this page seems to be hanging too loose...",
    "This is not the page you're looking for...",
  ]

  const n = Math.floor(Math.random() * texts.length)

  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content>
          <h1>4L0H4</h1>
          <p>{texts[n]}</p>
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default IndexPage
