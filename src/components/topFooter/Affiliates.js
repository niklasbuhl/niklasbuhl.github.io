import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const AffiliatesWrap = styled.div`
  ${styles.thirdWidth}
  ${styles.leftCenterRow}
`

const Affiliate = styled.a`
  font-family: "Hack", monospace;
  font-size: 12px;
  // color: var(--neon-purple);
  color: var(--soft-black);
  text-decoration: none;
  ${styles.leftCenterRow}
  ${styles.topFooterTextPadding}
`

const Affiliates = () => {
  return (
    <AffiliatesWrap>
      <Affiliate target="_blank" href="https://kintsugi-design.com/">
        Kintsugi Design
      </Affiliate>
      <Affiliate target="_blank" href="https://cybernauterne.dk/">
        Cybernauterne
      </Affiliate>
      <Affiliate
        target="_blank"
        href="https://www.instagram.com/model.niklasbuhl/"
      >
        Model
      </Affiliate>
    </AffiliatesWrap>
  )
}

export default Affiliates
