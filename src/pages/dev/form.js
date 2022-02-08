import React from "react"
import DevPage from "../../layouts/dev-page-layout"
import styled from "styled-components"
import styles from "../../styles/styles"
import removeRGBA from "../../functions/removeRGBA"

const Form = styled.form`
  display: flex;
  flex-flow: column;

  h2 {
    color: var(--gray);
    margin-top: 48px;
  }
`

// Search Bar

const SearchBar = styled.input`
  display: flex;
  // width: 100%;
  ${styles.fonts.code}

  font-size: 18px;
  background: var(--light-gray);
  margin: var(--halfGutter);
  padding: var(--gutter);
  border: none;

  &:hover {
    background: rgba(${removeRGBA("--neon-purple")}, 0.1);
  }
`

// Checkbox
const CheckboxContainer = styled.label`
  margin: var(--halfGutter);
  ${styles.positions.centerCenter}
  cursor: pointer;
  display: flex;
  position: relative;
  width: fit-content;

  // Original Checkbox
  input {
    display: none;
  }

  .label {
    ${styles.fonts.code}
    font-size: 12px;
    line-height: 10px;
    margin-top: 1px;
  }

  // Unchecked
  .checkmark {
    display: flex;
    padding: 8px;
    width: fit-content;
    height: fit-content;
    border: 1px solid var(--gray);
    color: var(--gray);
  }

  // Checked Style
  input:checked + .checkmark {
    border-color: var(--neon-purple);
    color: var(--neon-purple);
  }

  // Checked Background
  input:checked + .checkmark::after {
    display: flex;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: var(--neon-purple);
  }

  // Hover
  input:hover + .checkmark {
    border-color: var(--neon-purple);
    color: var(--neon-purple);
  }
`

const TagCheckbox = props => {
  return (
    <CheckboxContainer>
      <input type="checkbox" />
      <span className="checkmark">
        <span className="label">{props.content}</span>
      </span>
    </CheckboxContainer>
  )
}

const Page = props => {
  return (
    <DevPage title={"Form Styling"} location={props.location}>
      <Form>
        <h2>Search Bar</h2>
        <SearchBar type="text" placeholder="Search" />
        <h2>Tag Checkbox</h2>
        <TagCheckbox content={"sustainability"} type="checkbox" />
        <h2>Tag 3D Checkbox</h2>
      </Form>
    </DevPage>
  )
}

export default Page
