import React, { Component } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"

// Inspiration: https://www.w3schools.com/howto/howto_css_flip_card.asp

const flippedOrientation = css`
  transform: rotateX(16deg) rotateY(-184deg);
`

const notFlippedOrientation = css`
  transform: rotateX(16deg) rotateY(4deg);
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
      props.flipped ? `${flippedOrientation}` : `${notFlippedOrientation}`}
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
    background-color: var(--hard-white);
  }

  &.back {
    transform: rotateY(180deg);
    background-color: var(--neon-yellow);
  }
`

class BusinessCard extends Component {
  render() {
    return (
      <FlipCard className="size" flipped={this.props.flipped}>
        <FlipCard className="content" flipped={this.props.flipped}>
          <FlipCard className="front">
            <h1>Niklas Buhl</h1>
            <p>Tel: 60 19 87 44</p>
            <p>Mail: niklas.buhl-cic@ibm.com</p>
          </FlipCard>

          <FlipCard className="back">
            <h1>Graphics</h1>
          </FlipCard>
        </FlipCard>
      </FlipCard>
    )
  }
}

class DevContactPage extends Component {
  constructor() {
    super()

    this.state = {
      flipBusinessCard: false,
    }

    this.flipBusinessCard = this.flipBusinessCard.bind(this)
  }

  flipBusinessCard() {
    console.log("Flip business card.")

    this.setState(prevState => ({
      flipBusinessCard: !prevState.flipBusinessCard,
    }))
  }

  render() {
    return (
      <DevPage title="Examples" location={this.props.location}>
        <FullPageSection>
          <Link to="/dev">Back to Development Overview</Link>
          <h1>Contact Card</h1>

          <BusinessCard flipped={this.state.flipBusinessCard} />

          <button
            type="button"
            onClick={this.flipBusinessCard}
            style={{ height: "48px", width: "96px" }}
          >
            Flip
          </button>
        </FullPageSection>
      </DevPage>
    )
  }
}

export default DevContactPage

//

// <h1 style={{(styles.shadow.neonGreen)}}>TestStylesPage</h1>

// styles.shadow.neonGreen
