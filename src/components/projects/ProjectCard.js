import React from "react"
import styled from "styled-components"
import BackgroundColor from "../backgrounds/BackgroundColor"
import Aspect from "../wrappers/Aspect"
import Content from "../wrappers/Content"
import getRandomColor from "../../functions/getRandomColor"
import { Link } from "gatsby"

const ZoomOuter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 200ms ease-out 100ms;

  :hover {
    margin: calc(var(--halfGutter) * -1);
    width: calc(100% + var(--gutter));
    height: calc(100% + var(--gutter));
  }
`

const ZoomInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 200ms ease-out 100ms;

  :hover {
    padding: var(--halfGutter);
    width: calc(100% - var(--gutter));
    height: calc(100% - var(--gutter));
  }
`

const ProjectLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
`

const ProjectCard = props => {
  return (
    <ProjectLink to={props.slug}>
      <Aspect width={4} height={3}>
        <Content>
          <ZoomOuter>
            <BackgroundColor bgColor={getRandomColor}>
              <ZoomInner>
                <Content>
                  {props.title}
                  {props.subtitle}
                  {props.years}
                  {props.status}
                  {props.institution}
                  {props.description}
                  {props.tags}
                </Content>
              </ZoomInner>
            </BackgroundColor>
          </ZoomOuter>
        </Content>
      </Aspect>
    </ProjectLink>
  )
}

export default ProjectCard
