import React, { useEffect, useState } from "react"
import DevPage from "../../layouts/dev-page-layout"
import styled, { css } from "styled-components"

import Mouse from "../../assets/icons/mouse/mouse-01-scroll-animation.svg"
import Arrow from "../../assets/icons/arrows/arrow-02-scroll-animation.svg"

import ScrollButton from "../../components/interactive/ScrollButton"

import FlexElement from "../../components/elements/FlexElement"
import styles from "../../styles/styles"

const StyledMouse = styled(Mouse)`
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
`

const ScrollDownAnimationV3 = () => {
  return (
    <ScrollButton scrollPixels={200}>
      <Container>
        <StyledMouse />
        <ArrowContainer>
          <StyledArrow />
        </ArrowContainer>
      </Container>
    </ScrollButton>
  )
}

const Page = props => {
  return (
    <DevPage title="Mouse Scroll Animation" location={props.location}>
      <ScrollDownAnimationV3 />
    </DevPage>
  )
}

export default Page

/*


const ScrollDownAnimationV1 = props => {
  const [arrowPosition, setArrowPosition] = useState(0)
  const [counter, setCounter] = useState(0)

  var mouseAnimationInterval

  const minPos = 0
  const maxPos = 20
  const frameRate = 30

  function increase() {
    setCounter((counter + 1) % frameRate)
  }

  function getCounter() {
    return counter
  }

  // var counter

  useEffect(() => {
    console.log("Set Mouse Scroll Animation Interval")

    mouseAnimationInterval = setInterval(() => {
      var offsetX = (maxPos / frameRate) * counter - maxPos / 2

      setCounter(counter => (counter + 1) % frameRate)

      // offsetX =

      // counter = (counter + 1) % frameRate

      // setArrowPosition(offsetX)

      // setCounter((counter + 1) % frameRate)

      console.log("Counter: " + counter)
      console.log("offsetX: " + offsetX)
    }, 1000 / frameRate)

    return () => {
      console.log("Clear Mouse Scroll Animation Interval")
      clearInterval(mouseAnimationInterval)
    }
  })

  return (
    <ScrollButton>
      <Container>
        <StyledMouse />

        <ArrowContainer height={maxPos}>
          <StyledArrow />
        </ArrowContainer>
      </Container>
    </ScrollButton>
  )
}

class ScrollDownAnimationV2 extends React.Component {
  constructor() {
    super()
    this.minPos = 0
    this.maxPos = 20
    this.frameRate = 10

    this.state = {
      counter: 0,
      arrowPosition: 0,
    }
  }

  componentDidMount() {
    // insert code into the HTML?

    console.log("Set Mouse Scroll Animation Interval")
    this.animationInterval = setInterval(() => {
      var x =
        (this.maxPos / this.frameRate) * this.state.counter - this.maxPos / 2

      this.setState(prevState => ({
        counter: (prevState.counter + 1) % this.frameRate,
        arrowPosition: x,
      }))

      // console.log("Arrow: " + this.state.arrowPosition)
    }, 1000 / this.frameRate)
  }
  componentWillUnmount() {
    clearInterval(this.animationInterval)
    console.log("Clear Mouse Scroll Animation Interval")
  }

  render() {
    return (
      <ScrollButton>
        <Container>
          <StyledMouse />

          <ArrowContainer height={this.maxPos}>
            <StyledArrow offset={this.state.arrowPosition} />
          </ArrowContainer>
        </Container>
      </ScrollButton>
    )
  }
}

*/
