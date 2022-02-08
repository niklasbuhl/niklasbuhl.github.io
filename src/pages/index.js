import React, { useEffect, useState } from "react"
import PageLayout from "../layouts/page-layout-v2"
import { Link, useStaticQuery, graphql } from "gatsby"
import FullPageSection from "../components/sections/FullPageSection"
import styled from "styled-components"
import styles from "../styles/styles"
import Content from "../components/wrappers/Content"
import FlexElement from "../components/elements/FlexElement"
import AnimatedScrollMouse from "../components/interactive/AnimatedScrollMouse"
import ScrollButton from "../components/interactive/ScrollButton"
import AllDevPages from "../components/dev/AllDevPages"
import ScrollDownArrow from "../assets/icons/arrows/arrow-04-down-front-page.svg"
import OpenMail from "../assets/icons/links/open-mail-01-front-page.svg"
import info from "../functions/getInfo"
import FeaturedProjects from "../components/projects/FeaturedProjects"

const FrontPage = styled.main`
  .header1 {
    ${styles.fonts.display}
    font-size: 48px;
    margin-bottom: 32px;
  }

  .p1 {
    ${styles.fonts.sans}
    font-size: 18px;
    line-height: 1.6;
  }

  .intro-by-day {
    ${styles.fonts.display}
    letter-spacing: -1px;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
  }

  .intro-by-night {
    ${styles.fonts.code}
    letter-spacing: -1px;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.4;
    color: var(--neon-purple);
  }

  .website-overview-description {
    ${styles.fonts.display}
    font-size: 24px;

    span,
    a {
      ${styles.fonts.code}
      color: var(--neon-purple);
      font-weight: 600;
    }
  }

  .bold {
    font-weight: 500;
  }
`

const Bold600 = styled.span`
  font-weight: 600;
`

const IndexPage = props => {
  // const [webN, setWebN] = useState(0)
  // var webInterval

  // const [featuredProjects] = useState(
  //   useStaticQuery(
  //     graphql`
  //       query featuredProjectsQuery {
  //         allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
  //           edges {
  //             node {
  //               id
  //               frontmatter {
  //                 types
  //                 status
  //                 subtitle
  //                 title
  //                 institutions
  //                 location
  //                 description
  //                 keywords {
  //                   topics
  //                   tools
  //                 }
  //                 years
  //               }
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     `
  //   ).allMdx.edges
  // )

  // const web = [
  //   "cyberverse",
  //   "multiverse",
  //   "internet",
  //   "interwebz",
  //   "instagram",
  //   "twitter",
  //   "500px",
  //   "behance",
  //   "processing",
  // ]

  /*

  useEffect(() => {
    console.log("Set Interval")

    webInterval = setInterval(() => {
      var n = Math.floor(Math.random() * web.length)
      setWebN(n)
      // console.log(n)
    }, 100)

    return () => {
      console.log("Clear Interval")
      clearInterval(webInterval)
    }
  }, [])

  */

  return (
    <PageLayout location={props.location}>
      <FrontPage>
        {/*Introduction  */}
        <FullPageSection>
          <FlexElement
            flow="row wrap"
            grow={1}
            // contentPosition={styles.positions.centerUp}
          >
            <FlexElement>
              <h1 className="header1" style={{ color: "black" }}>
                Hi, I'm Niklas Buhl
              </h1>
            </FlexElement>
            <FlexElement>
              {/* <p className="intro">You have reached my online portfolio</p> */}
              <p className="intro-by-day">
                I work as a{" "}
                <span style={{ fontWeight: "600" }}>
                  Full-stack Web Application Developer
                </span>
                <br />
                at{" "}
                <a href="" style={{ color: "var(--soft-black)" }}>
                  IBM Client Innovation Center
                </a>{" "}
                by day.
              </p>
              <p className="intro-by-day">
                I studied Embedded Systems Engineering
                <br />
                and Design Engineering.
              </p>
            </FlexElement>
            <FlexElement contentPosition={styles.positions.centerDown}>
              <p className="intro-by-night">
                By night I am a <Bold600>creative coder</Bold600>, new media
                artisan, maker, environmentalist and technology literacy
                advocate.
              </p>
            </FlexElement>

            <FlexElement
              flow="row"
              grow={1}
              contentPosition={styles.positions.centerDown}
            >
              <AnimatedScrollMouse
                scrollToId="website-introduction"
                hideOnScroll={480}
                offset={108}
              />
            </FlexElement>
          </FlexElement>
        </FullPageSection>

        <FullPageSection>
          <h1 className="header1" id="website-introduction">
            Website Introduction
          </h1>

          {/* Work With Me */}
          <p className="website-overview-description">
            Would you like to <Link to="/workwithme">/work with me</Link>? I am
            currently employed by IBM, we are always open for project leads. In
            my spare time I do non-work related projects. If you have an idea
            please do not hesitate to reach out.
          </p>

          {/* Projects */}
          <p
            className="website-overview-description"
            style={
              {
                // display: "flex",
                // flexFlow: "row nowrap",
              }
            }
          >
            Here are some of my{" "}
            <ScrollButton
              scrollToId="featured-projects"
              offset={108}
              style={{
                width: "300px",
              }}
            >
              <span
                style={{
                  textDecoration: "underline",
                  // display: "inline-block"
                }}
              >
                featured projects
              </span>
              <ScrollDownArrow
                style={{
                  // display: "inline-block",
                  // position: "relative",
                  width: "12px",
                  maxWidth: "12px",
                  marginLeft: "8px",
                  marginRight: "4px",
                  // left: "8px",
                  // top: "2px",
                }}
              />
            </ScrollButton>
            . You can explore all of my <Link to="/projects">/projects</Link>{" "}
            here.
          </p>

          {/* Writings */}
          {/* <p className="website-overview-description">
            There are quite a few topics I find interesting and know a little
            bit about, so I try to share through these{" "}
            <Link to="/writings">writings</Link>.
          </p> */}

          {/* Follow */}
          {/* <p className="website-overview-description">
            Sometimes I share things I find interesting or beautiful you can{" "}
            <Link to="/follow">follow</Link> me here across the {web[webN]}.
          </p> */}

          {/* About */}
          <p className="website-overview-description">
            You can read more <Link to="/about">/about</Link> me or view my{" "}
            <Link to="/cv">/cv</Link>.
          </p>

          {/* Contact */}
          <p className="website-overview-description">
            Would you like to get in touch? You can find my{" "}
            <Link to="/contact">/contact</Link> details here. You can always
            reach me and{" "}
            <a href={"mailto:" + info.getWorkEmail()}>
              Say Hello
              <OpenMail
                style={{
                  display: "flex-inline",
                  position: "relative",
                  maxWidth: "14px",
                  marginLeft: "8px",
                  marginRight: "4px",
                  // left: "8px",
                  top: "2px",
                }}
              />
            </a>
            .
          </p>
          <p className="website-overview-description">
            Except when I am in the wild, preferably catching waves.
          </p>
        </FullPageSection>

        {/* Projects */}
        <FullPageSection>
          <Content>
            <h1 className="header1" id="featured-projects">
              Featured Projects
            </h1>
            <FeaturedProjects />
          </Content>
        </FullPageSection>

        {/* Website Under Construction */}
        <FullPageSection id="development-pages">
          <Content>
            <h1 className="header1">Always Tinkering</h1>
            <p>
              This website is (always) under (re)construction. I get new ideas,
              test things out. This is an overview are my development pages.
            </p>
            <p style={{ marginBottom: "48px" }}>
              DISCLAIMER Some of them might be broken and crash the website,
              then please just refresh the page or go to the front page.
            </p>
            <AllDevPages />
          </Content>
        </FullPageSection>
      </FrontPage>
    </PageLayout>
  )
}

export default IndexPage
