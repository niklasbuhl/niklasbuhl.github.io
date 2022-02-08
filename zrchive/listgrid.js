import React from "react"
import styled from "styled-components"

import PageLayout from "../src/layouts/page-layout"
import FullPageCenter from "../src/components/wrappers/FullPageCenterContent"
import ProjectCard from "../src/components/projects/ProjectCard"

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
`
const Li = styled.li`
  // flex-basis: 50%;
  width: calc(100% / 3);
`

const Element = styled.div`
  display: flex;
  width: 100%;
`

const DevPage = () => {
  return (
    <PageLayout>
      <FullPageCenter>
        <h1>List Grid</h1>
        <Ul>
          <Li>
            <Element>
              <ProjectCard>Hello, World</ProjectCard>
            </Element>
          </Li>
          <Li>2</Li>
          <Li>3</Li>
          <Li>4</Li>
          <Li>5</Li>
          <Li>6</Li>
          <Li>7</Li>
          <Li>8</Li>
          <Li>9</Li>
        </Ul>
      </FullPageCenter>
    </PageLayout>
  )
}

export default DevPage
