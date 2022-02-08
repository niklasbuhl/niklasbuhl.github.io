import React from "react"
import DevPage from "../../layouts/dev-page-layout"
import styles from "../../styles/styles"
import styled from "styled-components"
import removeRGBA from "../../functions/removeRGBA"
import FullPageSection from "../../components/sections/FullPageSection"

const ResetFormButton = styled.button`
  content: "X";
  display: flex;
  ${styles.fonts.code}
  font-size: 18px;
  color: var(--gray);
  background: var(--light-gray);
  margin: var(--halfGutter);
  padding: var(--gutter);
  border: none;
  width: fit-content;

  &:hover {
    color: var(--neon-purple);
    background: rgba(${removeRGBA("--neon-purple")}, 0.1);
  }

  &:active {
    color: var(--neon-green);
    background: rgba(${removeRGBA("--neon-green")}, 0.1);
  }
`

const ButtonDevPage = props => {
  return (
    <DevPage location={props.location} title="Buttons">
      <FullPageSection>
        <h2>Reset form button</h2>
        <ResetFormButton>Reset</ResetFormButton>
      </FullPageSection>
    </DevPage>
  )
}

export default ButtonDevPage
