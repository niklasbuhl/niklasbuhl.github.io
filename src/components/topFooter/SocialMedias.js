import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

const SocialMediasWrap = styled.div`
  ${styles.thirdWidth}
  ${styles.rightCenterRow}
`

const SocialMedia = styled.a`
  font-family: "Hack", monospace;
  font-size: 12px;
  // color: black;
  color: var(--soft-black);
  text-decoration: none;
  ${styles.centerCenter}
  ${styles.topFooterTextPadding}
`

const SocialMedias = () => {
  return (
    <SocialMediasWrap>
      <SocialMedia
        target="_blank"
        href="https://www.linkedin.com/in/niklasbuhl/"
      >
        LinkedIn
      </SocialMedia>
      <SocialMedia target="_blank" href="https://github.com/niklasbuhl">
        Github
      </SocialMedia>
      <SocialMedia
        target="_blank"
        href="https://www.instagram.com/niklasbuhl.xyz/"
      >
        Instagram
      </SocialMedia>
      {/* <SocialMedia target="_blank" href="https://twitter.com/niklasbuhl">
        Twitter
      </SocialMedia> */}
    </SocialMediasWrap>
  )
}

export default SocialMedias
