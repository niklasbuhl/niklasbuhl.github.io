import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"
import { Field } from "formik"
import removeRGBA from "../../functions/removeRGBA"

const SearchBarStyle = styled(Field)`
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

const SearchBar = props => {
  return (
    <SearchBarStyle
      // key={props.key}
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      style={props.style}
    />
  )
}

export default SearchBar
