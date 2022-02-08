import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Emoji from "../elements/Emoji"
import Spacer from "../elements/Spacer"
// import BottomFooter from "./BottomFooter"

// --- Legal

const LegalUl = styled.ul`
  display: flex;
  flex-direction: row;
  // padding: var(--halfGutter);
  width: calc(100% - var(--gutter));
  justify-content: center;
`

const LegalLi = styled.li`
  margin: var(--halfGutter);
`

const LegalContainer = props => {
  return <LegalUl>{props.children}</LegalUl>
}

const LegalLink = styled(Link)`
  text-decoration: none;
  font-family: "Charter", serif;
  color: var(--super-dark-gray);
  letter-spacing: -0.2px;

  &:hover {
    color: var(--neon-green);
  }

  &:active {
    color: var(--neon-lime);
  }
`

const LegalItem = props => {
  return (
    <LegalLi>
      <LegalLink to={props.to}>{props.children}</LegalLink>
    </LegalLi>
  )
}

// --- Coded

const CodedContainer = styled.div`
  display: flex;
  flex-direction: column;
  // padding: var(--halfGutter);
  width: calc(100% - var(--gutter));
  // align-items: center;
`

const CodedItem = styled.code`
  display: flex;
  // flex-basis: content;
  max-width: fit-content;
  margin: var(--halfGutter);
`

const SrcLink = styled.a`
  color: var(--neon-purple);

  :link {
    color: var(--neon-purple);
  }
  :visited {
    color: var(--neon-purple);
  }
  :hover {
    color: var(--neon-blue);
  }

  :active {
    color: var(--neon-green);
  }
`

// --- Enjoy Life

const EnjoyContainer = styled.div`
  display: flex;
  flex-direction: column;
  // padding: var(--halfGutter);
  width: calc(100% - var(--gutter));
  align-items: center;
`
const EnjoyItem = styled.code`
  display: flex;
  // flex-basis: content;
  max-width: fit-content;
  margin: var(--halfGutter);
`

// --- Bottom Content

const EndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const EndContent = () => {
  return (
    <EndContentContainer>
      <Spacer height={"48px"} />
      <CodedContainer>
        <CodedItem>
          <Emoji symbol={"⌨️"} label={"keyboard"} />
          {/* &nbsp;&amp;&nbsp; */}
          {/* <Emoji symbol={"✏️"} label={"pencil"} /> */}
          &nbsp;with&nbsp;
          <Emoji symbol={"❤️"} label={"love"} /> &nbsp;and&nbsp;
          <Emoji symbol={"☕️"} label={"coffee"} />
          &nbsp;by the wildly talented @niklasbuhl
        </CodedItem>
        <CodedItem>Made with Gatsby, React, JS, CSS3, HTML5</CodedItem>
        <CodedItem>
          <Emoji symbol={"⚡️"} label={"lightning"} />
          &nbsp;by GitHub Pages and Actions
        </CodedItem>
        <CodedItem>
          <SrcLink
            href="https://github.com/niklasbuhl/niklasbuhl.github.io"
            target="_blank"
          >
            <code className="codeSnip">/src</code>
          </SrcLink>
          &nbsp;@ GitHub
        </CodedItem>
      </CodedContainer>
      <Spacer height={"48px"} />
      <EnjoyContainer>
        <EnjoyItem>Code Hard, Surf Hard, Enjoy Life</EnjoyItem>
        <EnjoyItem>&amp; Say Nice Things to Each Other</EnjoyItem>
      </EnjoyContainer>
      <Spacer height={"96px"} />
      <LegalContainer>
        <LegalItem to="/legal/credits">Credits</LegalItem>
        <LegalItem to="/legal/disclaimer">Disclaimer</LegalItem>
        <LegalItem to="/legal/privacy-policy">Privacy Policy</LegalItem>
        <LegalItem to="/legal/terms-and-conditions">
          Terms and Conditions
        </LegalItem>
        <LegalItem to="/legal/faq">FAQ</LegalItem>
        <LegalItem to="/legal/enterprise">Enterprise</LegalItem>
      </LegalContainer>
    </EndContentContainer>
  )
}

export default EndContent

/*


*/
