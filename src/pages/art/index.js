import React from "react"
import PageLayout from "../../layouts/page-layout-v2"
import FullPageSection from "../../components/sections/FullPageSection"
import Content from "../../components/wrappers/Content"

const ArtPage = props => {
  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content>
          <h1>Art</h1>
          <p>|-Meter-| How to quit: Digital stress and mindful computing ###</p>
          <p>Pengetræet</p>
          Art piece by Johanne, I did the technical assistance Assisting an
          artist in realising her project. Teaching various tech competencies
          and applications. Adobe XD to make an easy website and
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default ArtPage
