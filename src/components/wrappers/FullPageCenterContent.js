import React from "react"
import styled from "styled-components"
import styles from "../../styles/styles"

/* FullPageCenterContent

- flow

*/

const PositionWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${styles.centerCol}
`
const SizeWrap = styled.div`
  display: flex;
  height: 100%;
  ${styles.pageContentWidth}
`

const ContentWrap = styled.div`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "column")};
  padding: var(--halfGutter);
  // flex-wrap: wrap;
  // flex-direction: column;
  // background: yellow;
  width: 100%;
  overflow: hidden;
`

const FullPageCenterContent = props => {
  return (
    <PositionWrap>
      <SizeWrap>
        <ContentWrap>{props.children}</ContentWrap>
      </SizeWrap>
    </PositionWrap>
  )
}

export default FullPageCenterContent

/* 
// Top Navition Background
const NavHeaderBackground = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${styles.navigationHeaderHeight};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  content: "";
`
// Top Footer Background Div
const TopFooterBackground = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: calc(
    ${styles.navigationHeaderHeight} - ${styles.topFooterHeight}
  );
  height: ${styles.topFooterHeight};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  content: "";
`
*/
