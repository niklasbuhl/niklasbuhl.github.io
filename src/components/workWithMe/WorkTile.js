import React from "react"
import Aspect from "../wrappers/Aspect"
import Content from "../wrappers/Content"
import styled, { css } from "styled-components"

const WorkTileStyle = css`
  display: flex;
  flex-flow: column;
  position: relative;

  // margin: var(--gutter);

  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;

  padding: 0;
  margin: var(--halfGutter);
  width: 100%;
  height: 100%;
`

const InnerContent = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  // z-index: 17;
  justify-content: space-between;
  align-content: space-between;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`

const CatchPhrase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: calc(100% - var(--gutter));
  width: calc(50% - var(--gutter));
  margin: var(--halfGutter);
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: none;
  z-index: 7;
`

const OnHover = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  height: calc(100% - var(--gutter));
  width: calc(50% - var(--gutter));
  margin: var(--halfGutter);
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: none;
  z-index: 7;
`

const Arcade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  min-width: 200%;
  // margin: var(--gutter);
  flex-flow: row nowrap;
  transition: all 0.2s;
  z-index: 17;

  &:hover {
    transform: translate(-50%, 0);
  }
`

const WorkTile = props => {
  return (
    <Aspect width={4} height={3}>
      <Content contentStyle={WorkTileStyle}>
        {props.bgImg}
        <InnerContent>
          <Arcade>
            <CatchPhrase>{props.catchPhrase}</CatchPhrase>
            <OnHover>{props.onHover}</OnHover>
          </Arcade>
        </InnerContent>
      </Content>
    </Aspect>
  )
}

export default WorkTile
