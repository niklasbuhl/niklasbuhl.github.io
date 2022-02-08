import React, { useEffect } from "react"
import styled, { css } from "styled-components"

// Inspiration: https://www.w3schools.com/howto/howto_css_flip_card.asp

const flippedOrientation = css`
  transform: rotateX(var(--rotateBusinessCardY))
    rotateY(calc(var(--rotateBusinessCardX) - 180deg));
  // transform: rotateX(16deg) rotateY(-184deg);
`

const notFlippedOrientation = css`
  transform: rotateX(var(--rotateBusinessCardY))
    rotateY(var(--rotateBusinessCardX));
  // transform: rotateX(16deg) rotateY(4deg);
`

const normalOrientation = css`
  transform: rotateX(0deg) rotateY(0deg);
`

const cardShadow = css`
  box-shadow: rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;
`

const FlipCard = styled.div`
  ${props => props.cardStyle}

  animation-timing-function: ease;

  &.size {
    background-color: transparent;
    width: 8.5cm;
    height: 5.5cm;
    perspective: 800px;
  }

  &.content {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    ${cardShadow}
  }

  &.size .content {
    ${props =>
      props.$flipped ? `${flippedOrientation}` : `${notFlippedOrientation}`}
  }

  &.size:hover .content {
    ${normalOrientation}
  }

  &.front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    /* -webkit-backface-visibility: hidden; */
    backface-visibility: hidden;
  }

  &.front,
  .back,
  .content {
    border-radius: 8px;
  }

  &.front {
    background-color: var(--neon-purple);
  }

  &.back {
    transform: rotateY(180deg);
    background-color: var(--neon-yellow);
  }
`

const BusinessCard = props => {
  // Get root, but leads to <html> (?)

  // Set the business card rotation

  // Add the event listener
  useEffect(() => {
    var r = null

    try {
      r = document.querySelector(":root")
    } catch (error) {
      console.log(error)
    }

    const setRotation = e => {
      // Center
      var cX = document.documentElement.clientWidth / 2
      var cY = document.documentElement.clientHeight / 2

      // Mouse Position
      var x = e.clientX
      var y = e.clientY

      // Offset
      var oX = x - cX
      var oY = y - cY

      // Rotation
      var rX = oX * 0.1
      var rY = -(oY * 0.1)

      if (r !== undefined) {
        r.style.setProperty("--rotateBusinessCardX", rX + "deg")
        r.style.setProperty("--rotateBusinessCardY", rY + "deg")
      }
    }

    window.addEventListener("mousemove", setRotation)

    // Clean up
    return () => {
      window.removeEventListener("mousemove", setRotation)
    }
  }, [])

  // console.log("Business Card Flipped: " + props.flipped)

  return (
    <FlipCard
      className="size"
      $flipped={props.flipped}
      cardStyle={props.cardStyle}
    >
      <FlipCard className="content" $flipped={props.flipped}>
        <FlipCard className="front">{props.frontContent}</FlipCard>
        <FlipCard className="back">{props.backContent}</FlipCard>
      </FlipCard>
    </FlipCard>
  )
}

// const BusinessCard = props => {
//   // Container for Context Consumer

//   return (
//     <EventsContext.Consumer>
//       {eventsContext => {
//         return (
//           <BusinessCard eventsContext={eventsContext}>
//             {props.children}
//           </BusinessCard>
//         )
//       }}
//     </EventsContext.Consumer>
//   )
// }

export default BusinessCard
