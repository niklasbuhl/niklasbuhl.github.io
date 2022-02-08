import styled from "styled-components"
import styles from "../../styles/styles"
import removeRGBA from "../../functions/removeRGBA"

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

export default ResetFormButton
