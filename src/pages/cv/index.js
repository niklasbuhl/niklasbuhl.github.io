import React from "react"
import PageLayout from "../../layouts/page-layout-v2"
import FullPageSection from "../../components/sections/FullPageSection"
import PageSection from "../../components/sections/PageSection"
import Content from "../../components/wrappers/Content"
// import scrollIntoViewOffset from "../../../functions/scrollIntoViewOffset"
import ScrollButton from "../../components/interactive/ScrollButton"
import { css } from "styled-components"
import styles from "../../styles/styles"
import BackToTopButton from "../../components/interactive/BackToTopButton"
// import LinkIcon from "../../assets/icons/link-01-soft_black-cv-links.svg"
// import styled from "styled-components"
import FlexElement from "../../components/elements/FlexElement"
import ExpandableBox from "../../components/elements/ExpandableBox"
import cvContent from "../../components/cv/cvContentJSON"
import Spacer from "../../components/elements/Spacer"

/*
Curriculum Vitae Download my CV as PDF (Download PDF with selected
works), Skills, Biography / Description Embedded Interactive PDF
(All clickable) Online CV (niklasbuhl.com/cv) me, curriculum vitae,
cv, vision, mission, behind the scenes, backstage, about, who, why,
where, what, when
*/

const cvStyle = css`
  h2 {
    font-size: 28px;
    color: var(--gray);
  }

  h3 {
    margin-top: 48px;
    font-size: 24px;
    margin-bottom: 4px;
    font-weight: 600;
  }

  h4 {
    ${styles.fonts.sans}
    font-size: 16px;
    font-weight: 500;
    color: var(--dark-gray);
    margin-bottom: 0;
  }

  p {
    display: flex;

    &.years {
      ${styles.fonts.sans}
      font-size: 14px;
      font-weight: 500;
      color: var(--neon-purple);
      margin-top: 0;
    }

    &.title {
      ${styles.fonts.sans}
      font-size: 12px;
    }

    &.description {
      ${styles.fonts.sans}
      font-size: 14px;
    }
  }

  .index {
    h2 {
      font-size: 16px;
      color: var(--soft-black);
      padding-bottom: 0;
    }

    p {
      ${styles.fonts.code}
      font-size: 12px;
      color: var(--dark-gray);
      margin-bottom: var(--gutter);
    }

    li {
      position: relative;
      line-height: 1.2;
      margin-left: var(--gutter);

      &::before {
        transform: rotate(90deg);
        top: 14px;
        left: -10px;
        position: absolute;
        background: url(../list-icon-01.svg) no-repeat;
        content: "";
        height: 12px;
        width: 12px;
      }
    }
  }

  ul {
    padding: var(--halfGutter);

    li {
      ${styles.fonts.sans}
      position: relative;
      font-size: 16px;
      line-height: 2;
      margin-left: var(--gutter);
      // list-style-image: url(../list-icon-01.svg);

      &::before {
        top: 12px;
        left: -14px;
        position: absolute;
        background: url(../list-icon-01.svg) no-repeat;
        content: "";
        height: 8px;
        width: 8px;
      }
    }
  }

  .institution {
    ${styles.fonts.sans}
    font-size: 14px;
    // display: flex;
    margin-left: var(--halfGutter);
    text-decoration: none;

    a {
      // all: inherit;
      text-decoration: inherit;
      color: inherit;
    }
  }
`

const backToTopButtonStyle = css`
  ${styles.fonts.code}
  font-size: 12px;
  color: var(--gray);
  margin: var(--halfGutter);
`

const CVPage = props => {
  var cvJSX = []

  Object.keys(cvContent).map(iKey => {
    var cvSectionJSX = []

    // Subsections
    Object.keys(cvContent[iKey].items).map(jKey => {
      if (iKey === "competencies") {
        //

        // Competencies
        cvSectionJSX.push(
          <div key={jKey} id={jKey}>
            <h3>{cvContent[iKey].items[jKey].title}</h3>
            {cvContent[iKey].items[jKey].items}
          </div>
        )
      } else if (iKey === "miscellaneous") {
        //

        // Miscellaneous
        cvSectionJSX.push(
          <div key={jKey} id={jKey}>
            <h3>{cvContent[iKey].items[jKey].title}</h3>
            {cvContent[iKey].items[jKey].items}
          </div>
        )
      } else {
        //

        // Everything else
        cvSectionJSX.push(
          <div key={jKey} id={jKey}>
            <h3>{cvContent[iKey].items[jKey].title}</h3>
            <FlexElement flow="row">
              <p className="years">{cvContent[iKey].items[jKey].years}</p>
              <span className="institution">
                {cvContent[iKey].items[jKey].institution}
              </span>
            </FlexElement>
            {cvContent[iKey].items[jKey].description && (
              <ExpandableBox>
                {cvContent[iKey].items[jKey].description}
              </ExpandableBox>
            )}
          </div>
        )
      }
    })

    // Sections
    cvJSX.push(
      <PageSection key={iKey}>
        <Spacer height={"96px"} />
        <Content grow={0}>
          <BackToTopButton buttonStyle={backToTopButtonStyle} />
          <h2 id={iKey}>{cvContent[iKey].h2}</h2>
        </Content>
        <FlexElement
          flow="row wrap"
          contentPosition={styles.positions.centerUp}
        >
          <FlexElement col={8}>{cvSectionJSX}</FlexElement>
        </FlexElement>
      </PageSection>
    )
  })

  return (
    <PageLayout location={props.location} pageCSS={cvStyle}>
      <FullPageSection>
        <Content flow="column">
          <h1 style={{ color: "var(--gray)" }}>Curriculum Vitae</h1>
          <h2>Sections</h2>
          <FlexElement
            flow="row wrap"
            contentPosition={styles.positions.centerUp}
          >
            <FlexElement col={8}>
              <ul className="index">
                <li>
                  <ScrollButton scrollToId="experience" offset={108}>
                    <h2>Experience</h2>
                    <p>IBM CIC, IdemoLab</p>
                  </ScrollButton>
                </li>

                <li>
                  <ScrollButton scrollToId="education" offset={108}>
                    <h2>Education</h2>
                    <p>
                      B.Eng IT-Electronics <br />⅔ B.Sc Sustainable Design
                    </p>
                  </ScrollButton>
                </li>

                <li>
                  <ScrollButton scrollToId="competencies" offset={108}>
                    <h2>Competencies</h2>
                    <p>
                      General
                      <br />
                      IT &amp; Embedded Systems
                      <br />
                      Prototyping &amp; Design-engineering
                      <br />
                      New Media Production
                      <br />
                      General IT Wizardry
                    </p>
                  </ScrollButton>
                </li>

                <li>
                  <ScrollButton scrollToId="collectives" offset={108}>
                    <h2>Collectives</h2>
                    <p>
                      Kintsugi Design
                      <br />
                      Cybernauterne
                    </p>
                  </ScrollButton>
                </li>

                <li>
                  <ScrollButton scrollToId="volunteer" offset={108}>
                    <h2>Volunteer Experience</h2>
                    <p>Modelling, festivals, communities, events, ...</p>
                  </ScrollButton>
                </li>

                <li>
                  <ScrollButton scrollToId="miscellaneous" offset={108}>
                    <h2>Miscellaneous</h2>
                    <p>
                      Awards and Nominations
                      <br />
                      Achievements
                      <br />
                      Certificates
                      <br />
                      Other
                      <br />
                      References
                    </p>
                  </ScrollButton>
                </li>
              </ul>
            </FlexElement>
          </FlexElement>
        </Content>
      </FullPageSection>
      {cvJSX}
      <Spacer height="320px" />
    </PageLayout>
  )
}

export default CVPage
