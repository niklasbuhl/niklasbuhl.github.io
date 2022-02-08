import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const LegalWrap = styled.div`
  ${styles.thirdWidth}
  ${styles.centerCenter}
  font-family: 'Hack', monospace;
  font-size: 12px;
  color: lightgray;
  ${styles.topFooterTextPadding}
`

const Legal = () => {
  var year = new Date().getFullYear()

  return <LegalWrap>&copy; {year} Niklas Buhl</LegalWrap>
}

export default Legal
