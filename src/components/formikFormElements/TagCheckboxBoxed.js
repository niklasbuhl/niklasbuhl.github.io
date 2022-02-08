import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"
import { Field } from "formik"

// Checkbox
const CheckboxContainer = styled.label`
  // margin: 4px;
  margin-right: 2px;
  margin-bottom: 2px;
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
  .checkMark {
    display: flex;
    padding: 4px;
    width: fit-content;
    height: fit-content;
    border: 1px solid var(--gray);
    color: var(--gray);
  }

  // Checked Style
  input:checked + .checkMark {
    border-color: var(--neon-purple);
    color: var(--neon-purple);
  }

  // Checked Background
  input:checked + .checkMark::after {
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
  input:hover + .checkMark {
    border-color: var(--neon-purple);
    color: var(--neon-purple);
  }
`

const TagCheckboxBoxed = props => {
  return (
    <CheckboxContainer>
      <Field
        type="checkbox"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <span className="checkMark">
        <span className="label">{props.content}</span>
      </span>
    </CheckboxContainer>
  )
}

export default TagCheckboxBoxed
