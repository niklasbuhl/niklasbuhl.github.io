import React, { useState } from "react"
import DevPage from "../../layouts/dev-page-layout"
import styled, { css } from "styled-components"
import styles from "../../styles/styles"
import CloseIcon from "../../assets/icons/close.svg"
import InfoIcon from "../../assets/icons/info-icon-01.svg"

const Text = styled.span`
  all: unset;
  display: inline;
  font-size: inherit;
  font-family: inherit;
  color: var(--neon-purple);
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`

const BoxPosition = styled.span`
  position: absolute;
  display: flex-inline;
  z-index: 7;
  justify-content: center;
  margin-top: -8px;
  left: 0;
  width: calc(100% - 2 * var(--gutter));
  // background: magenta;
  margin-left: var(--gutter);
  margin-right: var(--gutter);
`

const BoxAbsolute = styled.span`
  all: unset;
  display: flex;
  // background: cyan;
  padding: var(--gutter);
  flex-flow: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
  cursor: default;

  ${props => props.background}
  ${props => props.border}
  ${props => props.textStyle}
  ${styles.shadows.tileShadow01}
`

const InfoBoxLinkStyle = styled.span`
  display: flex-inline;
  text-decoration: underline;
  color: var(--neon-purple);
  cursor: pointer;

  &:hover {
    color: var(--neon-blue);
  }

  &:active {
    color: var(--neon-green);
  }
`

const InfoBoxContentBorder = css`
  border: 2px solid var(--neon-purple);
`

const InfoBoxContentBackground = css`
  background: white;
`

const InfoBoxContentTextStyle = css`
  font-size: 14px;
  color: var(--dark-gray);
  ${styles.fonts.sans}
`

const InfoBoxLink = props => {
  return (
    <InfoBoxLinkStyle
      onClick={() => {
        props.target === "_blank"
          ? window.open(props.href, "_blank")
          : (window.location = props.href)
      }}
    >
      {props.children}
    </InfoBoxLinkStyle>
  )
}

const InfoBoxContent = styled.span`
  display: flew;
  flex-flow: row wrap;
  line-height: 1.6;
  margin-right: var(--gutter);
  ${props => props.textStyle}
`

const StyledInfoIcon = styled(InfoIcon)`
  width: 12px;
  position: relative;
  top: 2px;
  margin-left: 2px;
`

const InfoBox = props => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    // console.log("Toggle open: ", open)
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <Text
      onClick={toggleOpen}
      onBlur={close}
      onFocus={toggleOpen}
      tabIndex={-1}
    >
      {open && (
        <BoxPosition
          onClick={e => {
            // e.stopImmediatePropagation()
            e.stopPropagation()
          }}
        >
          <BoxAbsolute
            background={props.background}
            border={props.border}
            textStyle={props.textStyle}
          >
            <InfoBoxContent textStyle={props.textStyle}>
              {props.children}
            </InfoBoxContent>
            {/* <button onClick={toggleOpen}>close</button> */}
            <span
              style={{
                cursor: "pointer",
                width: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
              }}
              onClick={close}
              onKeyDown={close}
              role="button"
              tabIndex={-1}
            >
              <CloseIcon
                style={{
                  width: "16px",
                  // padding: "2px",
                }}
              />
              {/* close */}
            </span>
          </BoxAbsolute>
        </BoxPosition>
      )}
      {props.title}
      <StyledInfoIcon />
    </Text>
  )
}

const Page = props => {
  return (
    <DevPage title="Info Box" location={props.location}>
      <p>
        I am an altruistic and enthusiastic tech-
        <InfoBox
          title="multipotentialite"
          border={InfoBoxContentBorder}
          background={InfoBoxContentBackground}
          textStyle={InfoBoxContentTextStyle}
        >
          <InfoBoxLink
            href="https://en.wikipedia.org/wiki/Multipotentiality"
            target="_blank"
          >
            multipotentialite
          </InfoBoxLink>
          , multidisciplinary, generalist, t-profile, interdisciplinary,
          octopus, swiss army knife{" "}
          <InfoBoxLink
            href={
              "https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling"
            }
            target="_blank"
          >
            Emilie Wapnick's TED-talk
          </InfoBoxLink>
        </InfoBox>{" "}
        with creativity and ingenuity in design, technology, media and art. Who
        is very curios and passionate about shaping the technology of tomorrow
        to create meaningful digital applications and tangible products to
        improve the quality of life for people with a positive impact on climate
        and society.
      </p>
    </DevPage>
  )
}

export default Page
