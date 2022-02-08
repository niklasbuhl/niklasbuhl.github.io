import React from "react"
import styled, { css } from "styled-components"
import FlexElement from "../elements/FlexElement"
import Spacer from "../elements/Spacer"
import styles from "../../styles/styles"
import Content from "../wrappers/Content"
import { Link } from "gatsby"
import networkLinkIcon from "../../assets/icons/link-01-dark_gray.svg"
import DownloadIcon from "../../assets/icons/download-01-bottom_footer_start_content.svg"

const H1 = styled.h1`
  font-size: 22px;
  margin-bottom: 16px;
  color: var(--super-dark-gray);
`

const H2 = styled.h2`
  ${styles.fonts.display}
  letter-spacing: -0.4px;
  font-size: 14px;
  // color: var(--dark-gray);
  color: var(--soft-black);
  margin-bottom: 0px;
  font-weight: 500;
  line-height: 1.6;
`

// TL;DR
const Tldr = styled.p`
  ${styles.fonts.serif}
  color: var(--dark-gray);
  font-size: 14px;
  line-height: 1.6;
  padding-right: 16px;
}
`

// Navigation
const NavLiStyle = styled.li`
  padding: var(--halfGutter);
  padding-top: 4px;
  padding-bottom: 4px;
`

const NavLink = styled(Link)`
  ${styles.fonts.code}
  text-decoration: none;
  font-size: 13px;

  :active {
    color: var(--neon-green);
  }

  :visited {
    color: var(--dark-gray);
  }

  :hover {
    color: var(--soft-black);
  }
`

const NavLi = props => {
  return (
    <NavLiStyle>
      <NavLink to={props.to}>{props.children}</NavLink>
    </NavLiStyle>
  )
}

// Explore
const SelectedProjectsUl = styled.ul`
  margin: var(--halfGutter);
  display: flex;
  flex-direction: column;
`
const ProjectLi = styled.li`
  display: flex;
`

const ProjectLink = styled(Link)`
  ${styles.fonts.code}
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 13px;
  text-decoration: none;
  // color: var(--soft-black);
  color: var(--dark-gray);

  :active {
    color: var(--neon-green);
  }

  :visited {
    // color: var(--dark-black);
  }

  :hover {
    color: var(--soft-black);
  }
`

const ProjectItem = props => {
  return (
    <ProjectLi>
      <ProjectLink to={props.to}>{props.children}</ProjectLink>
    </ProjectLi>
  )
}

// Connect
const ConnectLinkStyle = styled.a`
  ${styles.fonts.code}
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: var(--halfGutter);
  margin-right: var(--halfGutter);
  font-size: 13px;
  text-decoration: none;
  color: var(--dark-gray);
  letter-spacing: -0.4px;
`

const ConnectLink = props => {
  return (
    <ConnectLinkStyle href={props.to} target="_blank">
      {props.children}
    </ConnectLinkStyle>
  )
}

// Network
const NetworkItem = styled.a`
  ${styles.fonts.display}
  letter-spacing: -0.4px;
  display: flex;
  padding-top: 4px;
  // padding-bottom: 4px;
  padding-left: var(--halfGutter);
  padding-right: var(--halfGutter);
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: var(--soft-black);
  // color: var(--dark-gray);

  :active {
    color: var(--neon-green);
  }

  :visited {
    // color: var(--dark-black);
  }

  :hover {
    color: var(--soft-black);
  }
`

const NetworkDescription = styled.p`
  color: var(--dark-gray);
  margin-bottom: 24px;
  line-height: 1.6;
`

const NetworkLinkIcon = styled(networkLinkIcon)`
  margin-top: 1.5px;
  max-width: 10px;
  width: 18px;
  margin-left: 8px;
  max-height: 12px;
`

// Say Hello
const SayHelloElement = styled.a`
  ${styles.fonts.code}
  font-size: 12px;
  padding: var(--halfGutter);
  color: var(--dark-gray);
  text-decoration: none;

  :active {
    color: var(--neon-green);
  }

  :visited {
    // color: var(--dark-black);
  }

  :hover {
    color: var(--soft-black);
  }
`

// Location
const LocatedTitleStyle = css`
  ${styles.fonts.display}
  display: flex;
  padding-top: 4px;
  padding-left: var(--halfGutter);
  padding-right: var(--halfGutter);
  text-decoration: none;
  color: var(--soft-black);
  // color: var(--dark-gray);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.4px;

  :active {
    color: var(--neon-green);
  }

  :visited {
    // color: var(--dark-black);
  }

  :hover {
    color: var(--soft-black);
  }
`

// const LocatedTitle = styled.div`
//   ${LocatedTitleStyle}
// `

const LocatedTitleLink = styled.a`
  ${LocatedTitleStyle}
`

const LocatedSubtitle = styled.div`
  ${styles.fonts.code}
  text-decoration: none;
  font-size: 12px;
  line-height: 1.6;
  color: var(--soft-black);
  // color: var(--dark-gray);

  padding: var(--halfGutter);
  padding-bottom: 0;

  :active {
    color: var(--neon-green);
  }

  :visited {
    // color: var(--dark-black);
  }

  :hover {
    color: var(--soft-black);
  }
`

const LocatedAddress = styled.a`
  ${styles.fonts.code}
  font-size: 12px;
  padding: var(--halfGutter);
  padding-top: 0;
  margin-bottom: 8px;
  line-height: 1.6;
  color: var(--dark-gray);
`

const StartContent = props => {
  return (
    <FlexElement dir={"column"}>
      <Spacer height={"64px"} />
      <Content marginLeft={"-16px"} marginRight={"-16px"}>
        <FlexElement flow={"row wrap"}>
          <FlexElement col={3} margin={"16px"}>
            <H1>TL;DR</H1>
            <Tldr>
              Niklas is a fullstack developer at IBM. He also liked to work with
              design, new media art, making things and taking long walks in the
              forest when there are no waves. IT and Embedded Systems Developer,
              Prototype and Design Engineer, New Media Artisan, Technological
              Literacy Activist.
            </Tldr>
            <Spacer height={"24px"} />
            <H1>Navigation</H1>
            <ul>
              <NavLi to="/">/home</NavLi>
              <NavLi to="/workwithme">/work with me</NavLi>
              <NavLi to="/projects">/projects</NavLi>
              <NavLi to="/about">/about</NavLi>
              <NavLi to="/about/cv">&nbsp;&nbsp;/cv</NavLi>
              <NavLi to="/contact">/contact</NavLi>
            </ul>
          </FlexElement>
          <FlexElement col={3} margin={"16px"}>
            <H1>Explore</H1>
            <H2>Selected Projects</H2>
            <SelectedProjectsUl>
              <ProjectItem to="/">Project A</ProjectItem>
              <ProjectItem to="/">Project B</ProjectItem>
              <ProjectItem to="/">Project C</ProjectItem>
              <ProjectItem to="/">Project D</ProjectItem>
              <ProjectItem to="/">Project E</ProjectItem>
              <ProjectItem to="/projects">All Projects...</ProjectItem>
            </SelectedProjectsUl>
            {/* <H2>Selected Writings</H2>
          <ul>
            <li>Writing A</li>
            <li>Writing B</li>
            <li>Writing C</li>
            <li>All Writings...</li>
          </ul> */}
          </FlexElement>
          <FlexElement col={3} margin={"16px"}>
            <H1>Connect</H1>
            <ConnectLink to="">Instagram</ConnectLink>
            <ConnectLink to="">LinkedIn</ConnectLink>
            <ConnectLink to="">GitHub</ConnectLink>
            <Spacer height={"24px"} />
            <H1>Network</H1>
            <NetworkItem href="">
              Kintsugi Design
              <NetworkLinkIcon />
            </NetworkItem>

            <NetworkDescription>
              - is a creative technology and design studio specializing in
              strategy and future proofing.
            </NetworkDescription>
            <NetworkItem href="">
              Cybernauterne
              <NetworkLinkIcon />
            </NetworkItem>
            <NetworkDescription>
              - offer workshops, courses, advice and lectures on cyber security,
              technological literacy and digital understanding.
            </NetworkDescription>
            <NetworkItem href="">
              Modelling
              <NetworkLinkIcon />
            </NetworkItem>
            <NetworkDescription>
              - is my online viewbook of my modelling work.
            </NetworkDescription>
          </FlexElement>
          <FlexElement col={3} margin={"16px"}>
            <H1>Say Hello</H1>
            <SayHelloElement href="">hello@niklasbuhl.com</SayHelloElement>
            <SayHelloElement href="">
              niklas.buhl@niklasbuhl.com
            </SayHelloElement>
            <SayHelloElement href="">+45 1234 5678</SayHelloElement>
            <SayHelloElement href="../Niklas%20Buhl.vcf">
              Download vCard
              <DownloadIcon style={{ maxWidth: "9px", marginLeft: "7px" }} />
            </SayHelloElement>
            <Spacer height={"24px"} />
            <H1>Located</H1>
            <LocatedTitleLink
              href="https://www.ibm.com/employment/ciceurope/dk-da/contact"
              target="_blank"
            >
              IBM Client Innovation
              <br /> Center Copenhagen
              <NetworkLinkIcon />
            </LocatedTitleLink>
            <LocatedSubtitle>Symbion Univate</LocatedSubtitle>
            <LocatedAddress>
              Njalsgade 76
              <br />
              2300 Copenhagen S
              <br />
              Denmark
            </LocatedAddress>
            <LocatedTitleLink href="http://surfandwork.dk/" target="_blank">
              Silicon VØ
              <NetworkLinkIcon />
            </LocatedTitleLink>
            <LocatedSubtitle>Surf &amp; Work</LocatedSubtitle>
            <LocatedAddress>
              Vesterhavsgade 13
              <br />
              7700 Nørre Vorupør
              <br />
              Denmark
            </LocatedAddress>
          </FlexElement>
        </FlexElement>
      </Content>
      <Spacer height={"64px"} />
    </FlexElement>
  )
}

export default StartContent
