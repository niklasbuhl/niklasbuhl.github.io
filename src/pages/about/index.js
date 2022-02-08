import React from "react"
import PageLayout from "../../layouts/page-layout-v2"
import FullPageSection from "../../components/sections/FullPageSection"
import Content from "../../components/wrappers/Content"
import TextBox from "../../components/elements/TextBox"
import styles from "../../styles/styles"
import styled, { css } from "styled-components"
import InfoBox, { InfoBoxLink } from "../../components/elements/InfoBox"
import InfoBoxIcon from "../../assets/icons/about-page-info-icon-02.svg"
import Spacer from "../../components/elements/Spacer"
// import ListIcon01 from "../../assets/icons/list-icon-01.svg"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import FlexElement from "../../components/elements/FlexElement"
import { StaticImage } from "gatsby-plugin-image"
// import listIcon02 from "../../assets/iconsPng/list-icon-02-png.png"

const Intro = styled.p`
  ${styles.fonts.sans}
  font-size: 16px;
  line-height: 1.6;
`

const StyledInfoBoxIcon02 = styled(InfoBoxIcon)`
  width: 16px;
  position: relative;
  display: inline-flex;
  top: 4px;
  margin-left: 2px;
`

const InfoBoxContentTextStyle = css`
  font-size: 16px;
  color: var(--dark-gray);
  ${styles.fonts.sans}
`

const TldrUl = styled.ul`
  margin: var(--halfGutter);
  // list-style-type: square;
`

const TldrLi = styled.li`
  ${styles.fonts.sans}
  position: relative;
  font-size: 16px;
  line-height: 2;
  margin-left: var(--gutter);
  // list-style-image: url(../list-icon-01.svg);

  &::before {
    top: 14px;
    left: -14px;
    position: absolute;
    background: url(../list-icon-01.svg) no-repeat;
    content: "";
    height: 8px;
    width: 8px;
  }

  a {
    text-decoration: none;
    color: var(--neon-purple);
  }
`

const AboutPageStyle = css`
  h1 {
    color: var(--gray);
  }

  h2 {
    margin-top: 32px;
    color: var(--gray);
  }

  p {
    ${styles.fonts.sans}
    font-size: 16px;
    line-height: 1.6;
  }
`

const AboutPage = props => {
  return (
    <PageLayout location={props.location} pageCSS={AboutPageStyle}>
      <FullPageSection>
        <Content>
          <h1 style={{ color: "var(--gray)" }}>
            About{" "}
            <Link
              style={{
                marginLeft: "16px",
                color: "var(--neon-purple",
                textDecoration: "none",
              }}
              to="/cv"
            >
              Go to my CV
            </Link>
          </h1>
        </Content>
        <FlexElement flow="row wrap">
          <FlexElement col={8}>
            <Content>
              <TextBox background="var(--light-gray)">
                <Intro>
                  I am tech enthusiastic{" "}
                  <InfoBox
                    title="multipotentialite"
                    infoIcon={<StyledInfoBoxIcon02 />}
                    // border={InfoBoxContentBorder}
                    // background={InfoBoxContentBackground}
                    textStyle={InfoBoxContentTextStyle}
                  >
                    <InfoBoxLink
                      href="https://en.wikipedia.org/wiki/Multipotentiality"
                      target="_blank"
                    >
                      multipotentialite
                    </InfoBoxLink>
                    , multidisciplinary, generalist, t-profile,
                    interdisciplinary, octopus, swiss army knife{" "}
                    <InfoBoxLink
                      href={
                        "https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling"
                      }
                      target="_blank"
                    >
                      Emilie Wapnick's TED-talk
                    </InfoBoxLink>
                  </InfoBox>{" "}
                  with creativity and ingenuity in design, technology, media and
                  art. Who is very curios and passionate about shaping the
                  technology of tomorrow to create meaningful digital
                  applications and tangible products to improve the quality of
                  life for people with a positive impact on climate and society.
                </Intro>
              </TextBox>

              <h2>TL;DR</h2>
              {/* <ListIcon01 /> */}
              {/* <StaticImage src="../../assets/icons/list-icon-01.svg" /> */}
              <TldrUl>
                <TldrLi>
                  I am just an open-minded guy from Denmark, trying to be a
                  pretty okay human being Born in 354.21 ppm CO2 (y01990)
                </TldrLi>
                <TldrLi>
                  Based in Copenhagen and frequently in Vorupør - A small
                  fisherman's town by roaring coast of the North Sea
                </TldrLi>
                <TldrLi>
                  Full Stack Software Engineer Consultant at{" "}
                  <a
                    href="https://www.ibm.com/employment/ciceurope/dk-da/pages/about-us"
                    target="_blank"
                  >
                    IBM Client Innovation Center
                  </a>
                </TldrLi>
                <TldrLi>
                  Technology Multipotentialite at{" "}
                  <Link to="/">niklasbuhl.com</Link>
                </TldrLi>
                <TldrLi>
                  Designer at{" "}
                  <a href="https://kintsugi-design.com/" target="_blank">
                    Kintsugi Design Collective
                  </a>
                </TldrLi>
                <TldrLi>
                  Technology Literacy Activist at{" "}
                  <a href="https://cybernauterne.dk/">Cybernauterne</a>
                </TldrLi>

                <TldrLi>
                  Been building LEGO Technic since the early{" "}
                  <a href="https://brickset.com/sets/8082-1/Multi-Model-Control-Set">
                    nineties
                  </a>
                </TldrLi>
                <TldrLi>
                  Make computers do wonderful things, and to unriddle why
                  sometimes they do not obey
                </TldrLi>
                <TldrLi>
                  Work on meaningful projects to bridge the gap between people
                  and technology
                </TldrLi>
                <TldrLi>
                  Enjoy tinkering and is deeply curious about emerging
                  technologies
                </TldrLi>
                <TldrLi>
                  Surfer, this has always been my cynosure in life
                </TldrLi>
              </TldrUl>
            </Content>
          </FlexElement>
          <FlexElement col={4}>
            <Content>
              <StaticImage
                src="../../assets/images/about-portrait-tall.jpeg"
                alt="cafe"
                style={{
                  maxWidth: "100%",
                  // width: "100%",
                  height: "content-fit",
                  margin: "var(--halfGutter)",
                }}
              />
            </Content>
          </FlexElement>
        </FlexElement>
        <Spacer height="64px" />
        <FlexElement col={12} contentPosition={styles.centerCenter}>
          <p>
            ”My intention is just to do whatever is possible with or without
            <br />
            technology to make a positive impact on climate and society.”
          </p>
        </FlexElement>
      </FullPageSection>
      <Spacer height="64px" />
      <FullPageSection background="background: var(--light-gray)">
        <Content>
          <FlexElement contentPosition={styles.positions.leftCenter}>
            <FlexElement col={6}>
              {/* Curiosity */}
              <h2>Curiosity</h2>
              <p>
                My professional strength is my curiosity about technology and
                people - How they intertwine and affect each other. This has
                made me a lifelong learner and explorer. I have accumulated
                unique knowledge and ingenuity that intersects multiple areas of
                expertise within design, art, literacy and technology. And I
                will continue to quickly learn and utilise new technologies.
                Specialisation is for the robots I build. My background is
                innovation, design engineering, a university degree in IT and
                embedded systems and new found interest for web technologies.
                Additionally I have been studying the ways of design thinking,
                cultural understanding, anthropology and found great interest in
                the interaction between people and technology. I have worked
                with everything from assembler code to UX. This expertise about
                various technologies makes it possible for me to imagine,
                reflect, conceptualising and apply ingenuity on complex
                distributed systems, how they can be created and where look for
                new opportunities. And allows me easily to see both the visions,
                holistic and systematic perspective as well as the detailed
                immediate problems to be solved. This makes me a very valuable
                asset when new technology is being developed and integrated with
                people.
              </p>

              {/* Design methodology */}
              <h2>Important Design</h2>
              <p>
                I enjoy solving really important problems. I want to work on
                spearhead projects that push technology in a meaningful
                direction towards: Improving the quality of life, creating new
                experiences, generally optimising professional processes, aim to
                solve the important challenges of tomorrow and make up for the
                mistakes of yesterday. And push the tech industry into a more
                sustainable and ethical fusion (social, environmental and
                economical). As we are very responsible for designing the
                future. By building solutions that are: Desirable, meaningful,
                beautiful, ethical and mindful about how it affects people and
                the society. Feasible with technology and has important
                functionality. Sustainable and has beneficial impact on the
                climate. And of it has to be viable in a business or public
                perspective. I believe that we have to solve the environmental
                problems with a combination of technology and culture.
              </p>

              {/* Design Approach */}
              <h2>Design Approach</h2>
              <p>
                My approach to work is often iterative: From idea to design,
                development and test, which then feeds knowledge and inspiration
                to the next idea. When I was a youngster I enjoyed building
                LEGOs a lot, but I never played. I never actually got to the
                point of roleplaying with the bricks, instead I built something,
                got a new idea, took everything apart and started over. I keep
                thinking about new things and improving upon current - “What
                Could Be”.
              </p>

              {/* Visualisation */}
              <h2>Visualisation</h2>
              <p>
                I have a great imagination, spatial intelligence and the ability
                visualise everything from abstract processes to fathomable
                tangible objects. Extrovert and Empathy As an extrovert and with
                my great empathy, I am easily able to relate and understand
                people, stakeholders and their stories, which I believe is very
                important aspects of design; empathy and storytelling.
              </p>

              {/* Entrepreneur */}
              <h2>Entrepreneurial</h2>
              <p>
                I’m an entrepreneur, maybe not in the sense that I start my own
                independent business, rather I like to be in a setting or
                company. I enjoy taking initiative for new projects, develop new
                features and make innovation on the inside - I guess that can be
                called an intrapreneur.
              </p>

              {/* Literacy */}
              <h2>Literacy</h2>
              <p>
                As I am deeply curious about how emerging technologies and how
                they - Affect and intertwine people, society, challenge
                established power structures and make new forms of organisation
                possible. And about how it all comes back to bite us once we
                think we've won the future. I believe it is vital that people
                have the ability to understand and use the technology in their
                everyday lives in such way that they feel secure, comfortable,
                and confident with how it affects themselves and the people
                around. I want to give people the ability to understand
                technology, and how to use it for themselves. As well as
                challenge the discourse set by the major companies of today.
              </p>

              {/* Teamwork */}
              <h2>Teamwork</h2>
              <p>
                I like to work in diverse teams with people from different
                background and competencies. Who can shift direction swiftly or
                move focus rapidly if new insight or context demands it. During
                my studies, in teamwork I often ended up in a leading role
                because I take initiative, I am confident to make base for
                decisions in order to progress and have a great sense of
                organisational overview.
              </p>
            </FlexElement>
          </FlexElement>
        </Content>
      </FullPageSection>
      <FullPageSection>
        <Content flow="row">
          <FlexElement flow="column" col={12}>
            <FlexElement
              height="100%"
              flow="column"
              col={12}
              contentPosition={styles.centerCenter}
            >
              <p>"My dream is to design meaningful technology </p>
              <p> for the people of tomorrow,</p>
              <p>and surf in the morning."</p>
            </FlexElement>
          </FlexElement>
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default AboutPage
