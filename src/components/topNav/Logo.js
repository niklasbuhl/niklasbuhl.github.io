import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
// import styles from "../../styles/styles"
import { StaticImage } from "gatsby-plugin-image"
// import LogoContext from "../../context/LogoContext"
import styles from "../../styles/styles"

const logoHidden = css`
  transform: translateY(-96px);
`

// const logoShown = css``

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;
  align-items: center;
  overflow: hidden;

  animation-timing-function: ease;
  transition: transform 0.7s;
  ${props => (props.hidden ? `${logoHidden}` : "")}
`

const LogoLink = styled(Link)`
  display: flex;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: -0.7px;
  color: var(--hard-black);
  text-decoration: none;
  margin: calc(var(--gutter) / 2);

  :active {
    color: var(--neon-pink);
  }
`

const LogoImageContainer = styled.div`
  display: flex;
  margin: var(--halfGutter);
  margin-right: 0;
  width: fit-content;
  height: fit-content;
`

const Logo = props => {
  // console.log("Logo Location Pathname: " + props.location.pathname)
  // console.log("Logo Context Consumer: " + props.logoContext.hidden)

  // const [hideLogo, setHideLogo] = useState(true)

  useEffect(() => {
    if (props.location.pathname !== "/") {
      props.logoContext.setHidden(false)
      return
    }

    if (props.scrollPosition >= 320) props.logoContext.setHidden(false)
    else props.logoContext.setHidden(true)
  }, [props.scrollPosition])

  return (
    <LogoContainer hidden={props.logoContext.hidden}>
      <LogoImageContainer>
        <StaticImage
          src="../../assets/nb-logos/favicon-32.png"
          alt="Niklas Buhl Logo"
          placeholder="blurred"
          layout="fixed"
          width={16}
          height={16}
        />
      </LogoImageContainer>
      <LogoLink
        to="/"
        onClick={() => {
          try {
            console.log("scroll")
            window.scrollTo({
              top: styles.variables.heroHeaderHeight,
              behavior: "smooth",
            })
          } catch (error) {
            console.log(error)
          }
        }}
      >
        Niklas Buhl
      </LogoLink>
    </LogoContainer>
  )
}

export default Logo
