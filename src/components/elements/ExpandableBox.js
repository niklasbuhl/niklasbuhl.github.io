import React, { useState, useRef, useEffect } from "react"
import DevPage from "../../layouts/dev-page-layout"
import styled from "styled-components"
import styles from "../../styles/styles"
import EventsContext from "../../context/EventsContext"

const ExpandButton = styled.button`
  all: unset;
  ${styles.fonts.code}
  padding: 8px;
  font-size: 12px;
  height: 12px;

  &:hover {
    cursor: pointer;
  }
`

const ExpandableContainer = styled.div`
  position: relative;
`

const ExpandableContent = styled.div`
  position: relative;
  overflow: hidden;
  // display: flex;
  // flex-flow: column;

  opacity: 0;
  background: var(--light-gray);

  transition-property: all;
  transition-duration: ${props => props.transitionTime}s;
  transition-timing-function: ease-in-out;
  transition-delay: ${props => props.transitionDelay}s;

  // padding: 8px;

  ${props => (props.expandHeight ? "height: 0;" : "")}
  ${props => (props.expandWidth ? "width: 0;" : "")}
  
  &.expanded {
    ${props => (props.expandHeight ? "height: " + props.height + "px;" : "")}
    ${props => (props.expandWidth ? "width: " + props.width + "px;" : "")}



    opacity: 1;
    visibility: visible;
  }
`

const ExpandableContentPrototype = styled.div`
  visibility: hidden;
  width: 100%;
  height: fit-content;
  position: absolute;
  // padding-left: 8px;
  // padding-right: 8px;
  // padding: 8px;
`

const ExpandableBox = props => {
  // Container for Context Consumer

  return (
    <EventsContext.Consumer>
      {eventsContext => {
        return (
          <ExpandableBoxComponent eventsContext={eventsContext}>
            {props.children}
          </ExpandableBoxComponent>
        )
      }}
    </EventsContext.Consumer>
  )
}

const ExpandableBoxComponent = props => {
  const [expanded, setExpanded] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [buttonContent, setButtonContent] = useState("More Info [+]")
  const ref = useRef(null)

  const transitionTime = 200 // milliseconds
  const transitionDelay = 100 // milliseconds

  // https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setWidth(ref.current.clientWidth)
  }, [props.eventsContext.width])

  return (
    <ExpandableContainer>
      <ExpandableContentPrototype ref={ref}>
        {props.children}
      </ExpandableContentPrototype>
      <ExpandableContent
        className={expanded && "expanded"}
        height={height}
        width={width}
        transitionDelay={transitionDelay / 1000}
        transitionTime={transitionTime / 1000} // To seconds
        expandWidth={props.expandWidth}
        expandHeight={
          props.expandHeight === undefined ? true : props.expandWidth
        }
      >
        {props.children}
      </ExpandableContent>
      <ExpandButton
        onClick={() => {
          setExpanded(!expanded)

          setTimeout(() => {
            if (expanded) setButtonContent("More Info [+]")
            else setButtonContent("Collapse [-]")
          }, transitionTime)
        }}
      >
        {buttonContent}
      </ExpandButton>
    </ExpandableContainer>
  )
}

export default ExpandableBox
