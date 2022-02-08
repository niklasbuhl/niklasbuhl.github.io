import React from "react"
import PageLayout from "../../layouts/page-layout-v2"
// import FullPageCenterContent from "../../components/wrappers/FullPageCenterContent"
import FullPageSection from "../../components/sections/FullPageSection"
import Content from "../../components/wrappers/Content"
import FlexElement from "../../components/elements/FlexElement"
import WorkTile from "../../components/workWithMe/WorkTile"
import styles from "../../styles/styles"
import { css } from "styled-components"
// import AS from "../styles/article"
import DeveloperDesignerHands from "../../assets/graphics/developer-designer-hands.svg"
import { StaticImage } from "gatsby-plugin-image"

const style = css`
  p {
    ${styles.fonts.sans}
    font-size: 18px;
    color: var(--soft-black);
    line-height: 1.2;
  }

  h2 {
    &.tldr {
      // ${styles.fonts.display}
      font-size: 24px;
      color: var(--soft-black);
      line-height: 1.4;
      span {
        color: var(--neon-purple);
      }
    }
  }

  .catch-phrase {
    color: white;
    font-size: 32px;
    line-height: 1.2;
    // background: var(--neon-purple);
    // background: rgba(0, 0, 0, 0.2);
    ${styles.shadows.softShadow}
  }

  @media all and (max-width: 960px) {
    .catch-phrase {
      font-size: 24px;
    }
  }

  .title {
    font-size: 42px;
  }

  .span-bg {
    padding-left: 5px;
    padding-right: 5px;
    // background: var(--neon-purple);
    background: rgba(0, 0, 0, 1);
  }
`

const developerCSS = css`
  ${styles.shadows.softShadow}
  ${styles.fonts.computer}
  font-weight: 200;
  letter-spacing: 1px;
`

const literacyCSS = css`
  ${styles.shadows.neonGreen}
`

const WorkWithMePage = props => {
  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content contentStyle={style}>
          <h1>Work With Me</h1>
          <h2 className="tldr">
            TLDR; A <span>full-stack &amp; embedded systems engineer</span>,{" "}
            <span>design engineer</span>, <span>new media artisan</span>,{" "}
            <span>tech literacy advocate and environmentalist</span> with heart
            and mind in the right place.
          </h2>
          <p>
            I am currently employed by{" "}
            <strong>IBM Client Innovation Center</strong>, which means most of
            my time is occupied - If you have a project lead, please do not
            hesitate to reach out.
          </p>

          <p>
            I'm always interested in new projects. Projects on the edge of what
            is now and what can be tomorrow. Whether is might be the edge of
            technology, society or the world.
          </p>
          <p>
            I want to solve important problems. Help meaningful projects meet
            the real world. Create new or re-design{" "}
            <strong>
              applications, products, services, concepts, knowledge, art or
              experiences
            </strong>
            . That explorer the space between people and technology. That aims
            to take responsibility for the future. Push society and climate to
            become a better place for all lifeforms. Will travel anywhere, stay
            and work hard for a defined project or amount of time.
          </p>
          <p>If not now, then definitely in the future.</p>
          <p>Let us connect and have a chat!</p>
          <FlexElement
            flow="row"
            grow={1}
            contentPosition={styles.positions.centerDown}
            style={{ minHeight: "192px", marginTop: "48px" }}
          >
            <DeveloperDesignerHands
              style={{
                // marginTop: "96px",
                position: "absolute",
                width: "100vw",
                minWidth: "720px",
                bottom: "0",
                minHeight: "192px",
                maxHeight: "100%",
                // maxWidth: "100vw",
                // marginTop: "400px",
              }}
            />
          </FlexElement>
        </Content>
      </FullPageSection>
      <FullPageSection>
        <Content contentStyle={style}>
          <h1 style={{ color: "var(--gray)" }}>Areas</h1>
          <FlexElement>
            <FlexElement>
              <FlexElement col={12} flow="row wrap">
                <FlexElement col={6}>
                  <WorkTile
                    bgImg={
                      <StaticImage
                        src="../../assets/images/ibm-01.png"
                        alt="ibm"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          height: "calc(100% - var(--gutter)",
                          // margin: "var(--halfGutter)",
                        }}
                      />
                    }
                    catchPhrase={
                      <h2 className="catch-phrase">
                        <span className="span-bg">Looking for a coder?</span>
                      </h2>
                    }
                    onHover={
                      <h2
                        className="title"
                        style={{ color: "var(--neon-lime)" }}
                        css={developerCSS}
                      >
                        Full-stack &amp;
                        <br />
                        Embedded
                        <br />
                        Systems
                        <br />
                        Developer
                      </h2>
                    }
                  />
                </FlexElement>
                <FlexElement col={6}>
                  <WorkTile
                    bgImg={
                      <StaticImage
                        src="../../assets/images/prototype-01.png"
                        alt="ibm"
                        imgStyle={{
                          height: "160%",
                          width: "160%",
                          translate: "-110px -90px",
                        }}
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          height: "calc(100% - var(--gutter)",
                          // margin: "var(--halfGutter)",
                        }}
                      />
                    }
                    catchPhrase={
                      <h2 className="catch-phrase">
                        <span className="span-bg">
                          Looking for prototypes to test your ideas and gain new
                          insights?
                        </span>
                      </h2>
                    }
                    onHover={
                      <h2
                        className="title"
                        style={{ color: "var(--neon-lime)" }}
                        css={styles.shadows.softShadow}
                      >
                        Design Engineer
                        <br />
                        &amp; Prototyper
                      </h2>
                    }
                  />
                </FlexElement>
              </FlexElement>
              <FlexElement col={12} flow="row wrap">
                <FlexElement col={6}>
                  <WorkTile
                    bgImg={
                      <StaticImage
                        src="../../assets/images/plant-art-03.png"
                        alt="plant-art"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          height: "calc(100% - var(--gutter)",
                          // margin: "var(--halfGutter)",
                        }}
                      />
                    }
                    catchPhrase={
                      <h2 className="catch-phrase">
                        <span className="span-bg">
                          Looking for a technical assistant for your next art
                          project?
                        </span>
                      </h2>
                    }
                    onHover={
                      <h2
                        className="title"
                        style={{
                          color: "var(--neon-lime)",
                        }}
                        css={styles.shadows.stereoscopicOpaque}
                      >
                        New
                        <br />
                        Media
                        <br />
                        Artisan
                      </h2>
                    }
                  />
                </FlexElement>
                <FlexElement col={6}>
                  <WorkTile
                    bgImg={
                      <StaticImage
                        src="../../assets/images/arken-01.png"
                        alt="arken"
                        imgStyle={{
                          height: "150%",
                          width: "150%",
                          translate: "-100px -90px",
                        }}
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          height: "calc(100% - var(--gutter)",
                          // margin: "var(--halfGutter)",
                        }}
                        // objectFit="cover"
                      />
                    }
                    catchPhrase={
                      <h2 className="catch-phrase" style={{ fontSize: "24px" }}>
                        <span className="span-bg">
                          Would you like to understand and hack the technologies
                          you use everyday, and how they affect society and the
                          environment?
                        </span>
                      </h2>
                    }
                    onHover={
                      <>
                        <h2
                          className="title"
                          style={{ color: "white", position: "absolute" }}
                          css={literacyCSS}
                        >
                          Tech Literacy
                          <br />
                          Advocate &amp;
                          <br />
                          Environmentalist
                        </h2>
                        <h2
                          className="title"
                          style={{
                            color: "white",
                            zIndex: "47",
                            position: "absolute",
                          }}
                          // css={}
                        >
                          Tech Literacy
                          <br />
                          Advocate &amp;
                          <br />
                          Environmentalist
                        </h2>
                      </>
                    }
                  />
                </FlexElement>
              </FlexElement>
            </FlexElement>
          </FlexElement>
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default WorkWithMePage
