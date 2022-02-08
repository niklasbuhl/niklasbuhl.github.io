import React from "react"
import styled, { css } from "styled-components"
import BackgroundColor from "../../components/backgrounds/BackgroundColor"
import Aspect from "../../components/wrappers/Aspect"
import Content from "../../components/wrappers/Content"
import getRandomColor from "../../functions/getRandomColor"
import FlexElement from "../../components/elements/FlexElement"
import { Link } from "gatsby"
import styles from "../../styles/styles"
// import bgImage from "../../content/projects/five-axis-laser-cutter/tile-01.png"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectContent = styled.div`
  display: flex;
  flex-flow: column;
  margin: var(--gutter);
  width: 100%;
  height: calc(100% - 2 * var(--gutter));
  z-index: 70;
`

const ZoomOuter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 200ms ease-out 100ms;
  z-index: 70;

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
  z-index: 70;

  :hover {
    padding: var(--halfGutter);
    width: calc(100% - var(--gutter));
    height: calc(100% - var(--gutter));
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 40;
  pointer-events: none;
`

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ProjectLink = styled(Link)`
  display: flex;
  width: 100%;
  all: unset;

  &:hover {
    cursor: pointer;
  }
`

// Content Styles

// Header

const ProjectTitle = styled.h1`
  ${styles.fonts.display}
  ${styles.shadows.softShadow}
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

const ProjectSubtitle = styled.p`
  ${styles.fonts.display}
  ${styles.shadows.softShadow}
  letter-spacing: -0.4px;
  font-size: 14px;
  margin: 0;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

// Tags

const tagStyle = css`
  ${styles.fonts.code}
  ${styles.shadows.softShadow}
  font-size: 10px;
  margin: 0;
`

const TypeTag = styled.p`
  ${tagStyle}
  margin-right: 8px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

const StatusTag = styled.p`
  ${tagStyle}

  &.active {
    color: var(--neon-green);
  }

  &.inactive {
    color: var(--neon-yellow);
  }
`

const YearTag = styled.p`
  ${tagStyle}
  // margin-left: 8px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

const InstitutionTag = styled.p`
  ${tagStyle}
  margin-right: 4px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

const TopicTag = styled.p`
  ${tagStyle}
  margin-right: 8px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

const ToolTag = styled.p`
  ${tagStyle}
  margin-right: 8px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

// Description

const Description = styled.p`
  ${styles.fonts.sans}
  font-size: 12px;
  margin: 0;
  margin-bottom: 8px;
  color: ${props =>
    props.colorSchema ? props.colorSchema.textColor : "var(--soft-black)"};
`

// Color Schemas

const lightColorSchema = {
  textColor: "var(--hard-white)",
}

const neonPurpleColorSchema = {
  textColor: "var(--neon-purple)",
}

const darkColorSchema = {
  textColor: "var(--soft-black)",
}

// Project Card

const ProjectCard = props => {
  var startYear = false
  var endYear = false

  if (props.years.length > 1) {
    startYear = props.years[0]
    endYear = props.years[props.years.length - 1]
  } else {
    startYear = props.years[0]
  }

  var colorSchema

  // console.log(project.frontmatter.tileTextColorSchema)

  console.log(props.colorSchema)

  switch (props.colorSchema) {
    case "light":
      colorSchema = lightColorSchema
      break

    case "neonPurple":
      colorSchema = neonPurpleColorSchema
      break

    case "dark":

    default:
      colorSchema = darkColorSchema
      break
  }

  console.log(colorSchema)

  return (
    <ProjectLink to={props.to ? props.to : "/"}>
      <Aspect width={4} height={3}>
        <Content>
          <ZoomOuter>
            {/* <BackgroundColor bgColor={getRandomColor}> */}
            <ImageContainer>
              {props.bgImage ? props.bgImage : ""}
              <ContentContainer>
                <ZoomInner>
                  <ProjectContent>
                    {/* Top Info */}
                    <FlexElement
                      flow={"row"}
                      style={{ height: "17%", justifyContent: "space-between" }}
                      grow={0}
                    >
                      <FlexElement flow="row">
                        <TypeTag colorSchema={colorSchema}>
                          {props.type ? props.type[0] : ""}
                        </TypeTag>
                        <StatusTag
                          className={props.status ? props.status : ""}
                          colorSchema={colorSchema}
                        >
                          {props.status && props.status}
                        </StatusTag>
                      </FlexElement>
                      <FlexElement flow={"row"}>
                        <InstitutionTag colorSchema={colorSchema}>
                          {props.institution ? props.institution[0] : ""}
                        </InstitutionTag>
                        {startYear && (
                          <YearTag key={startYear} colorSchema={colorSchema}>
                            {startYear}
                          </YearTag>
                        )}
                        {endYear && (
                          <YearTag key={endYear} colorSchema={colorSchema}>
                            {" - " + endYear}
                          </YearTag>
                        )}
                      </FlexElement>
                    </FlexElement>

                    {/* Header */}
                    <FlexElement flow={"column"} style={{ height: "100%" }}>
                      <ProjectTitle colorSchema={colorSchema}>
                        {props.title && props.title}
                      </ProjectTitle>
                      <ProjectSubtitle colorSchema={colorSchema}>
                        {props.subtitle && props.subtitle}
                      </ProjectSubtitle>
                    </FlexElement>

                    {/* Description */}
                    {/* <FlexElement
                      flow="row"
                      style={{ height: "30%" }}
                      contentPosition={styles.positions.leftDown}
                      responsive={styles.responsive.hideUnder}
                      hideUnder={300}
                      grow={1}
                    >
                      <Description colorSchema={colorSchema}>
                        {props.description && props.description}
                      </Description>
                    </FlexElement> */}

                    {/* Tags */}
                    <FlexElement
                      flow={"row wrap"}
                      style={{ height: "10%" }}
                      contentPosition={styles.positions.leftDown}
                      grow={1}
                    >
                      {props.tags.topics &&
                        props.tags.topics.map(topic => (
                          <TopicTag key={topic} colorSchema={colorSchema}>
                            {topic}
                          </TopicTag>
                        ))}

                      {props.tags.tools &&
                        props.tags.tools.map(tool => (
                          <ToolTag key={tool} colorSchema={colorSchema}>
                            {tool}
                          </ToolTag>
                        ))}
                    </FlexElement>
                  </ProjectContent>
                </ZoomInner>
              </ContentContainer>
              {/* </BackgroundColor> */}
            </ImageContainer>
          </ZoomOuter>
        </Content>
      </Aspect>
    </ProjectLink>
  )
}

export default ProjectCard
