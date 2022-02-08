import React from "react"
import PageLayout from "../src/layouts/page-layout-v2"
// import FullPageCenterContent from "../../components/wrappers/FullPageCenterContent"
import FullPageSection from "../src/components/sections/FullPageSection"
import Content from "../src/components/wrappers/Content"
import FlexElement from "../src/components/elements/FlexElement"
import WorkTile from "../src/pageSpecificComponents/workwithme/WorkTile"
import styles from "../src/styles/styles"
import { css } from "styled-components"
// import AS from "../styles/article"
import DeveloperDesignerHands from "../../assets/graphics/developer-designer-hands.svg"

const style = css`
  p {
    ${styles.fonts.sans}
    font-size: 18px;
    color: var(--soft-black);
    line-height: 1.2;
  }

  h2 {
    &.tldr {
      ${styles.fonts.display}
      font-size: 24px;
      color: var(--soft-black);
      line-height: 1.4;

      span {
        color: var(--neon-purple);
      }
    }
  }
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
            <span>technology literacy advocate and environmentalist</span> with
            heart and mind in the right place.
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
          >
            <DeveloperDesignerHands
              style={{
                position: "absolute",
                // width: "100vw",
                minHeight: "200px",
                maxHeight: "100%",
                maxWidth: "100vw",
                marginTop: "400px",
              }}
            />
          </FlexElement>
        </Content>
      </FullPageSection>
      <FullPageSection>
        <Content contentStyle={style}>
          <h1 style={{ color: "var(--gray)" }}>Work With Me</h1>
          <p>This is what I do.</p>
          <FlexElement>
            <FlexElement>
              <FlexElement col={12} flow="row wrap">
                <FlexElement col={6}>
                  <WorkTile field="Tech"></WorkTile>
                </FlexElement>
                <FlexElement col={6}>
                  <WorkTile field="Design"></WorkTile>
                </FlexElement>
              </FlexElement>
              <FlexElement col={12} flow="row wrap">
                <FlexElement col={6}>
                  <WorkTile field="Art"></WorkTile>
                </FlexElement>
                <FlexElement col={6}>
                  <WorkTile
                    field={
                      <>
                        Tech Literacy &amp;
                        <br />
                        Environmentalism Advocate
                      </>
                    }
                  ></WorkTile>
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
