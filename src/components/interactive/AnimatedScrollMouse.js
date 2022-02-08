import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Mouse from "../../assets/icons/mouse/mouse-01-scroll-animation.svg"
import Arrow from "../../assets/icons/arrows/arrow-02-scroll-animation.svg"
import EventsContext from "../../context/EventsContext"
import ScrollButton from "./ScrollButton"

const StyledMouse = styled(Mouse)`
  width: 100%;
  max-width: 19px;
`

const StyledArrow = styled(Arrow)`
  transform: rotate(90deg);
  position: relative;
  // top: ${props => props.offset}px;
  max-width: 8px;

  animation-name: prototype;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  // -webkit-animation-name: prototype;
  // -webkit-animation-duration: 1s;
  // -webkit-animation-iteration-count: infinite;

  // animation-timing-function: linear;

  @keyframes prototype {
    0% {
      top: 0px;
    }
    // 25% {
    //   top: 0px;
    // }

    50% {
      top: 7px;
    }

    // 75% {
    //   top: 0px;
    // }

    100% {
      top 0px;
    }
  }

  @-webkit-keyframes prototype {
    0% {
      -webkit-top: 0px;
    }
    // 25% {
    //   top: 0px;
    // }

    50% {
      -webkit-top: 7px;
    }

    // 75% {
    //   top: 0px;
    // }

    100% {
      -webkit-top 0px;
    }
  }
`

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  // background: cyan;
  height: 20px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  width: fit-content;
  flex-flow: column;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
  opacity: 1;

  &.hide {
    opacity: 0;
  }
  // ${props => (props.hide ? "opacity: 0;" : "")}
`

const AnimatedScrollMouseComponent = props => {
  const ref = useRef(null)
  const [yPosition, setYPosition] = useState(0)
  const [yHide, setYHide] = useState(0)
  const [hide, setHide] = useState(false)

  // props.hideOnScroll !== undefined || eventsContext.scroll < props.hideOnScroll &&

  // console.log("event scroll: " + props.eventsContext.scroll)
  // console.log("hideOnScroll: " + props.hideOnScroll)
  // console.log("scrollHide: " + props.eventsContext.scroll > props.hideOnScroll)
  // console.log("undefined: ")
  // console.log(typeof props.hideOnScroll === "undefined")
  // console.log(
  //   "hide: " + props.hideOnScroll === undefined ||
  //     props.eventsContext.scroll < props.hideOnScroll
  // )

  useEffect(() => {
    var element = ref.current.getBoundingClientRect()

    // console.log("element: " + element.bottom)

    var initialScroll = 240
    // var yPos = element.bottom + props.eventsContext.scroll
    var yPos = element.bottom + initialScroll
    // console.log("yPos: " + yPos)
    setYPosition(yPos)

    var yHide = yPos + props.hideOnScroll
    // console.log("yHide: " + yHide)
    setYHide(yHide)

    /*
    var trueScroll = props.eventsContext.scroll + props.eventsContext.height

    

    // setYPosition(yPos)

              (typeof props.hideOnScroll !== "undefined" ||
            props.eventsContext.scroll + props.eventsContext.height > yHide) &&
          "hide"
    
    console.log("trueScroll: " + trueScroll)

    if (trueScroll > yHide) console.log("Hide")
    else console.log("Don't hide")

    */

    // setYPosition(element.offsetTop)
    // console.log("yPos: " + ref.current.offsetTop)
  }, [])

  return (
    <ScrollButton
      scrollPixels={props.scrollPixels}
      scrollToId={props.scrollToId}
      offset={props.offset}
    >
      <Container
        ref={ref}
        className={
          props.eventsContext.scroll + props.eventsContext.height > yHide &&
          "hide"
        }
      >
        <StyledMouse />
        <ArrowContainer>
          <StyledArrow />
        </ArrowContainer>
      </Container>
    </ScrollButton>
  )
}

const AnimatedScrollMouse = props => {
  // Container for Context Consumer

  return (
    <EventsContext.Consumer>
      {eventsContext => {
        return (
          <AnimatedScrollMouseComponent
            eventsContext={eventsContext}
            scrollPixels={props.scrollPixels}
            scrollToId={props.scrollToId}
            offset={props.offset}
            hideOnScroll={props.hideOnScroll}
          >
            {props.children}
          </AnimatedScrollMouseComponent>
        )
      }}
    </EventsContext.Consumer>
  )
}

export default AnimatedScrollMouse
