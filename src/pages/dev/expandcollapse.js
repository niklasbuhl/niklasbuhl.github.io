import React, { useState, useRef, useEffect } from "react"
import DevPage from "../../layouts/dev-page-layout"
import styled from "styled-components"
import styles from "../../styles/styles"
import EventsContext from "../../context/EventsContext"

const ExpandButton = styled.button`
  all: unset;
  ${styles.fonts.code}
  padding: 8px;
  padding-left: 0;
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
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.1s;

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

const ExpandablePrototype2 = props => {
  // Container for Context Consumer

  return (
    <EventsContext.Consumer>
      {eventsContext => {
        // console.log("Expandable Width: ", eventsContext.width)
        return (
          <ExpandablePrototype2Events eventsContext={eventsContext}>
            {props.children}
          </ExpandablePrototype2Events>
        )
      }}
    </EventsContext.Consumer>
  )
}

const ExpandablePrototype2Events = props => {
  const [expanded, setExpanded] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [buttonContent, setButtonContent] = useState("More Info [+]")
  const ref = useRef(null)

  // https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element

  useEffect(() => {
    // console.log("Use Effect")
    // setWidth(props.eventsContext.width)
    setHeight(ref.current.clientHeight)
    setWidth(ref.current.clientWidth)
    // console.log(height)
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
          // setButtonContent("")
          setTimeout(() => {
            if (expanded) setButtonContent("More Info [+]")
            else setButtonContent("Collapse [-]")
            // console.log(buttonContent)
          }, 200)
        }}
      >
        {buttonContent}
      </ExpandButton>
    </ExpandableContainer>
  )
}

const Expandable = props => {
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [buttonContent, setButtonContent] = useState("More Info")
  const ref = useRef(null)

  // https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setWidth(ref.current.clientWidth)
    // console.log(height)
  })

  return (
    <ExpandableContainer>
      <ExpandableContentPrototype ref={ref}>
        {props.children}
      </ExpandableContentPrototype>
      <ExpandableContent
        className={expanded && "expanded"}
        height={height}
        width={width}
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
          // setButtonContent("")
          setTimeout(() => {
            if (expanded) setButtonContent("More Info")
            else setButtonContent("Collapse")
            console.log(buttonContent)
          }, 200)
        }}
      >
        {buttonContent}
      </ExpandButton>
    </ExpandableContainer>
  )
}

const Page = props => {
  return (
    <DevPage title="Expand Collapse" location={props.location}>
      <p>Expand and Collapse Element</p>
      <Expandable id="" placeholder={<>Placeholder</>}>
        Cumque reprehenderit iure qui tenetur sit explicabo aliquid eum. Nihil
        possimus ut ab. Consequuntur ab quibusdam optio excepturi et totam
        tenetur doloribus. Sequi aut sed aut aperiam sit sint ut. Quibusdam
        exercitationem dolorum dicta. Praesentium quasi nobis suscipit
        accusantium velit aut quo.
      </Expandable>
      <Expandable id="" placeholder={<>Placeholder</>}>
        <h4>Fablab VØ</h4>
        <p className="description">
          A digital fabrication laboratory and art space in the office community
          Silicon VØ. Links, images.
        </p>
        <h4>Caribbean</h4>
        <p className="description">
          Travelled the Caribbean with the sailboat Queen Bee (pictures?) during
          the winter, and where expecting to be away for the majority of 2020.
        </p>
        <h3>
          <a href="http://idemolab.com/" target="_blank">
            IdemoLab at FORCE Technology
          </a>
        </h3>
      </Expandable>
      <h2>Prototype 2</h2>
      <ExpandablePrototype2>
        <h3>Hello, World</h3>
        <h4>Fablab VØ</h4>
        <p className="description">
          A digital fabrication laboratory and art space in the office community
          Silicon VØ. Links, images.
        </p>
        <h4>Caribbean</h4>
        <p className="description">
          Travelled the Caribbean with the sailboat Queen Bee (pictures?) during
          the winter, and where expecting to be away for the majority of 2020.
        </p>
        <h3>
          <a href="http://idemolab.com/" target="_blank">
            IdemoLab at FORCE Technology
          </a>
        </h3>
      </ExpandablePrototype2>
    </DevPage>
  )
}

export default Page
