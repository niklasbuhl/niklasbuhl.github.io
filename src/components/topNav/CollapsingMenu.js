import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PositionWrap = styled.div`
  position: absolute;
  left: 0;
  top: var(--topNavBarHeight);
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: var(--light-gray);
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  // background: white;
  padding: calc(var(--gutter) / 2);
`

const StyledLink = styled(Link)`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.7px;
  /* color: grey; */
  color: var(--dark-gray);
  text-decoration: none;
  padding: calc(var(--gutter) / 2);

  &:hover {
    color: var(--neon-purple);
  }

  &.notReady {
    color: lightgrey;
    text-decoration: line-through;

    &.hover {
      color: lightgrey;
    }
  }
`

const CollapseMenu = props => {
  if (props.open) {
    return (
      <PositionWrap>
        <ContentWrap>
          <StyledLink to="/projects">Projects</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </ContentWrap>
      </PositionWrap>
    )
  }

  return null
}

export default CollapseMenu

/*

<StyledLink to="/">
  <LinkText content="Work With Me" className="notReady" />
</StyledLink>

            <StyledLink to="/">
              <LinkText content="Writings" className="notReady" />
            </StyledLink>



const StyledA = styled.a`
  text-decoration: none;
`
*/
