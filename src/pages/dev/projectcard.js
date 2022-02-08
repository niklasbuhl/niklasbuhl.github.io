import React from "react"
import styled, { css } from "styled-components"
import BackgroundColor from "../../components/backgrounds/BackgroundColor"
import Aspect from "../../components/wrappers/Aspect"
import Content from "../../components/wrappers/Content"
import getRandomColor from "../../functions/getRandomColor"
import FlexElement from "../../components/elements/FlexElement"
import { Link } from "gatsby"
import DevPage from "../../layouts/dev-page-layout"
import styles from "../../styles/styles"
// import bgImage from "../../content/projects/five-axis-laser-cutter/tile-01.png"
import { StaticImage } from "gatsby-plugin-image"

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
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
`

const ProjectSubtitle = styled.p`
  ${styles.fonts.display}
  ${styles.shadows.softShadow}
  letter-spacing: -0.4px;
  font-size: 14px;
  margin: 0;
  color: ${props =>
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
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
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
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
  margin-left: 8px;
  color: ${props =>
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
`

const InstitutionTag = styled.p`
  ${tagStyle}
  color: ${props =>
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
`

const TopicTag = styled.p`
  ${tagStyle}
  margin-right: 8px;
  color: ${props =>
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
`

const ToolTag = styled.p`
  ${tagStyle}
  margin-right: 8px;
  color: ${props =>
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
`

// Description

const Description = styled.p`
  ${styles.fonts.sans}
  font-size: 12px;
  margin: 0;
  margin-bottom: 8px;
  color: ${props =>
    props.colorScheme ? props.colorScheme.textColor : "var(--soft-black)"};
`

// Project Card

const ProjectCard = props => {
  return (
    // <ProjectLink to={"/"}>
    //   <Aspect width={4} height={3}>
    //     <Content>
    //       <ZoomOuter>
    //         {/* <BackgroundColor bgColor={getRandomColor}> */}
    //         <ImageContainer>
    //           {props.bgImage}
    //           <ContentContainer>
    //             <ZoomInner>
    //               <ProjectContent>
    //                 {/* Top Info */}
    //                 <FlexElement
    //                   flow={"row"}
    //                   style={{ height: "20%", justifyContent: "space-between" }}
    //                   grow={1}
    //                 >
    //                   <FlexElement flow="row">
    //                     <TypeTag colorScheme={props.colorScheme}>
    //                       {props.type}
    //                     </TypeTag>
    //                     <StatusTag
    //                       className={props.status}
    //                       colorScheme={props.colorScheme}
    //                     >
    //                       {props.status}
    //                     </StatusTag>
    //                   </FlexElement>
    //                   <FlexElement flow={"row"}>
    //                     <InstitutionTag colorScheme={props.colorScheme}>
    //                       {props.institution}
    //                     </InstitutionTag>
    //                     {props.years.map(year => (
    //                       <YearTag key={year} colorScheme={props.colorScheme}>
    //                         {year}
    //                       </YearTag>
    //                     ))}
    //                   </FlexElement>
    //                 </FlexElement>

    //                 {/* Header */}
    //                 <FlexElement flow={"column"} style={{ height: "40%" }}>
    //                   <ProjectTitle colorScheme={props.colorScheme}>
    //                     {props.title}
    //                   </ProjectTitle>
    //                   <ProjectSubtitle colorScheme={props.colorScheme}>
    //                     {props.subtitle}
    //                   </ProjectSubtitle>
    //                 </FlexElement>

    //                 {/* Description */}
    //                 <FlexElement
    //                   flow="row"
    //                   style={{ height: "30%" }}
    //                   contentPosition={styles.positions.leftDown}
    //                   responsive={styles.responsive.hideUnder}
    //                   hideUnder={300}
    //                   grow={1}
    //                 >
    //                   <Description colorScheme={props.colorScheme}>
    //                     {props.description}
    //                   </Description>
    //                 </FlexElement>

    //                 {/* Tags */}
    //                 <FlexElement
    //                   flow={"row wrap"}
    //                   style={{ height: "10%" }}
    //                   contentPosition={styles.positions.leftDown}
    //                   grow={1}
    //                 >
    //                   {props.tags.topics.map(topic => (
    //                     <TopicTag key={topic} colorScheme={props.colorScheme}>
    //                       {topic}
    //                     </TopicTag>
    //                   ))}

    //                   {props.tags.tools.map(tool => (
    //                     <ToolTag key={tool} colorScheme={props.colorScheme}>
    //                       {tool}
    //                     </ToolTag>
    //                   ))}
    //                 </FlexElement>
    //               </ProjectContent>
    //             </ZoomInner>
    //           </ContentContainer>
    //           {/* </BackgroundColor> */}
    //         </ImageContainer>
    //       </ZoomOuter>
    //     </Content>
    //   </Aspect>
    // </ProjectLink>
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
                      style={{ height: "20%", justifyContent: "space-between" }}
                      grow={1}
                    >
                      <FlexElement flow="row">
                        <TypeTag colorScheme={props.colorScheme}>
                          {props.type ? props.type : ""}
                        </TypeTag>
                        <StatusTag
                          className={props.status ? props.status : ""}
                          colorScheme={props.colorScheme}
                        >
                          {props.status && props.status}
                        </StatusTag>
                      </FlexElement>
                      <FlexElement flow={"row"}>
                        <InstitutionTag colorScheme={props.colorScheme}>
                          {props.institution && props.institution}
                        </InstitutionTag>
                        {props.years &&
                          props.years.map(year => (
                            <YearTag key={year} colorScheme={props.colorScheme}>
                              {year}
                            </YearTag>
                          ))}
                      </FlexElement>
                    </FlexElement>

                    {/* Header */}
                    <FlexElement flow={"column"} style={{ height: "40%" }}>
                      <ProjectTitle colorScheme={props.colorScheme}>
                        {props.title && props.title}
                      </ProjectTitle>
                      <ProjectSubtitle colorScheme={props.colorScheme}>
                        {props.subtitle && props.subtitle}
                      </ProjectSubtitle>
                    </FlexElement>

                    {/* Description */}
                    <FlexElement
                      flow="row"
                      style={{ height: "30%" }}
                      contentPosition={styles.positions.leftDown}
                      responsive={styles.responsive.hideUnder}
                      hideUnder={300}
                      grow={1}
                    >
                      <Description colorScheme={props.colorScheme}>
                        {props.description && props.description}
                      </Description>
                    </FlexElement>

                    {/* Tags */}
                    <FlexElement
                      flow={"row wrap"}
                      style={{ height: "10%" }}
                      contentPosition={styles.positions.leftDown}
                      grow={1}
                    >
                      {props.tags.topics &&
                        props.tags.topics.map(topic => (
                          <TopicTag key={topic} colorScheme={props.colorScheme}>
                            {topic}
                          </TopicTag>
                        ))}

                      {props.tags.tools &&
                        props.tags.tools.map(tool => (
                          <ToolTag key={tool} colorScheme={props.colorScheme}>
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

const light = {
  textColor: "var(--hard-white)",
}

const Page = props => {
  var imgSrc = "../../content/projects/five-axis-laser-cutter/tile-image-01.png"

  return (
    <DevPage location={props.location} title={"Project Card"}>
      <FlexElement col={4} grow={"1"}>
        <ProjectCard
          type={"website"}
          title={"5 Axis Laser Cutter"}
          subtitle={"A project about react frontend"}
          years={[2021, 2022]}
          status={"active"}
          institution={"CIC"}
          description={"A project to build react frontend website."}
          colorScheme={light}
          bgImage={
            <StaticImage
              src={imgSrc}
              alt="cafe"
              style={{
                position: "relative",
                top: "0",
                left: "0",
                width: "100%",
                zIndex: "40",
                height: "content-fit",
                pointerEvents: "none",
                // paddingTop: "16px",
                // marginBottom: "calc(0px - 100%)",
                // margin: "var(--halfGutter)",
              }}
            />
          }
          tags={{
            tools: [
              "react",
              "gatsby",
              "styled-components",
              "javascript",
              "html5",
              "css3",
            ],
            topics: ["portfolio", "cv"],
          }}
        />
      </FlexElement>
    </DevPage>
  )
}

export default Page
