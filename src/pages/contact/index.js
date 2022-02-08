import React, { useState } from "react"
import PageLayout from "../../layouts/page-layout-v2"
// import FullPageCenter from "../../components/wrappers/FullPageCenter"
import BusinessCard from "../../components/businessCard/businessCard"
import styles from "../../styles/styles"
import styled, { css } from "styled-components"
import FlipIcon from "../../assets/icons/flip-icon.svg"
import Content from "../../components/wrappers/Content"
import DownloadIcon from "../../assets/icons/download-01-contact.svg"
import FullPageSection from "../../components/sections/FullPageSection"
import FlexElement from "../../components/elements/FlexElement"
import info from "../../functions/getInfo"

const CleanButton = styled.button`
  border: none;
  background: none;
  padding: var(--halfGutter);

  :hover {
    border: 2px solid var(--light-gray);
    border-radius: 5px;
  }
`

const mirrored = css`
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
`

const BusinessCardContentStyle = css`
  color: var(--neon-lime);

  a {
    color: var(--neon-lime);
    text-decoration: none;
  }
`

const StyledFlipIcon = styled(FlipIcon)`
  width: 96px;
  max-width: 96px;
  ${props => (props.$flipped ? `${mirrored}` : "")}
`

const ContactPage = props => {
  const [flipped, setFlipped] = useState(false)

  const flip = () => {
    // console.log("Set flipped: " + flipped)
    setFlipped(!flipped)
  }

  return (
    <PageLayout location={props.location}>
      <FullPageSection>
        <Content flow="row">
          <FlexElement flow="column" col={12}>
            <FlexElement height="100%" flow="column" col={12}>
              <FlexElement height="25%">
                <h1 style={{ color: "var(--gray)" }}>Contact</h1>
              </FlexElement>
              <FlexElement height="50%">
                <FlexElement col={12} flow="row">
                  <FlexElement col={3}></FlexElement>
                  <FlexElement
                    contentPosition={styles.positions.centerCenter}
                    col={6}
                  >
                    <BusinessCard
                      cardStyle={BusinessCardContentStyle}
                      flipped={flipped}
                      frontContent={
                        <>
                          <h1>Niklas Buhl</h1>
                          <p>
                            Work Tel:
                            <a href={"tel:" + info.getWorkPhone()}>
                              {info.getWorkPhone()}
                            </a>
                          </p>
                          <p>
                            Work Mail:{" "}
                            <a href={"mailto:" + info.getWorkEmail()}>
                              {info.getWorkEmail()}
                            </a>
                          </p>
                          <p>
                            Mobile:{" "}
                            <a href={"tel:" + info.getPrivatePhone()}>
                              {info.getPrivatePhone()}
                            </a>
                          </p>
                          <p>
                            Mail:{" "}
                            <a href={"mailto:" + info.getPrivateEmail()}>
                              {info.getPrivateEmail()}
                            </a>
                          </p>
                        </>
                      }
                      backContent={
                        <>
                          <h1>Graphics</h1>
                        </>
                      }
                    />
                  </FlexElement>
                  <FlexElement
                    flow="column"
                    contentPosition={styles.positions.centerCenter}
                    col={3}
                  >
                    <CleanButton onClick={flip}>
                      <FlexElement flow="column">
                        <StyledFlipIcon $flipped={flipped} />
                        <code
                          style={{ color: "var(--gray)", marginBottom: "0" }}
                        >
                          flip
                        </code>
                      </FlexElement>
                    </CleanButton>
                  </FlexElement>
                </FlexElement>
              </FlexElement>
              <FlexElement
                height="25%"
                contentPosition={styles.positions.centerUp}
                flow="row"
              >
                <a
                  style={{ textDecoration: "none" }}
                  href="../Niklas%20Buhl.vcf"
                >
                  <code style={{ color: "var(--gray)" }}>
                    Download vCard
                    <DownloadIcon
                      style={{
                        width: "11px",
                        marginLeft: "7px",
                        marginTop: "1px",
                      }}
                    />
                  </code>
                </a>
              </FlexElement>
            </FlexElement>
          </FlexElement>
        </Content>
      </FullPageSection>
    </PageLayout>
  )
}

export default ContactPage
