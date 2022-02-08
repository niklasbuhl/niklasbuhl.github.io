import React from "react"
// import PageLayout from "../../layouts/page-layout"
// import FullPageCenter from "../../components/wrappers/FullPageCenter"
import DevPage from "../../layouts/dev-page-layout"
// import styled from "styled-components"
import styles from "../../styles/styles"
import Flex from "../../components/elements/Flex"
// import { Link } from "gatsby"
import Content from "../../components/wrappers/Content"

/*
const Flex = styled.div`
  display: flex;
  width: ${props => (props.w ? props.w : "100%")};
  height: ${props => (props.h ? props.h : "100%")};
  background: ${props => props.bg};
  flex-direction: ${props => props.dir};
`

const RowWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const ColWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
*/

const DevGridPage = props => {
  return (
    <DevPage title="Grid" location={props.location}>
      <Content>
        <Flex dir="row">
          <Flex w="calc(100% /3)" h="100%" bg="magenta">
            <Flex dir="column">
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="magenta"
                dir="column"
                pos={styles.positions.leftUp}
              >
                <h1>Left Up</h1>
              </Flex>
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="cyan"
                pos={styles.positions.leftCenter}
              >
                Left Center
              </Flex>
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="magenta"
                pos={styles.positions.leftDown}
              >
                Left Down
              </Flex>
            </Flex>
          </Flex>
          <Flex w="calc(100% /3)" h="100%" bg="cyan">
            {" "}
            <Flex dir="column">
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="cyan"
                pos={styles.positions.centerUp}
              >
                Center Up
              </Flex>
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="magenta"
                pos={styles.positions.centerCenter}
              >
                Center Center
              </Flex>
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="cyan"
                pos={styles.positions.centerDown}
              >
                Center Down
              </Flex>
            </Flex>
          </Flex>
          <Flex w="calc(100% /3)" h="100%" bg="magenta">
            {" "}
            <Flex dir="column">
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="magenta"
                pos={styles.positions.rightUp}
              >
                Right Up
              </Flex>
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="cyan"
                pos={styles.positions.rightCenter}
              >
                Right Center
              </Flex>
              <Flex
                w="100%"
                h="calc(100% /3)"
                bg="magenta"
                pos={styles.positions.rightDown}
              >
                Right Down
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Content>
    </DevPage>
  )
}

export default DevGridPage
