import React, { Component } from "react";
// import { Link } from "gatsby"
import Emoji from "../emoji/Emoji";
import styled, { css } from "styled-components";
import styles from "../../styles/styles";

import background_01 from "../../files/images/background_01.jpeg";

const PositionWrap = styled.div`
  width: 100%;
  height: 40%;

  overflow: hidden;

  display: flex;

  background-color: coral;
`;

const BackgroundWrap = styled.div`
  ${(props) => props.maxMovement}

  --image-x: 0;
  --image-y: 0;

  display: flex;

  background-image: url(${background_01});
  background-repeat: no-repeat;
  background-size: calc(100% + 2 * ${(props) => props.maxMovement});
  background-position: center;

  // margin-top: -5%;
  // margin-bottom: -5%;
  // margin-left: -5%;
  // margin-right: -5%;

  margin: -${(props) => props.maxMovement};

  // transform: rotate(30deg);

  width: calc(100% + 2 * ${(props) => props.maxMovement});
  // height: 100%;

  //  Input from x turn into max "5%"...

  transform: translate(calc(var(--image-x)), calc(var(--image-y)));

  transition: transform 0.1s;

  // transition-delay: 0.1s;
`;

const SizeWrap = styled.div``;

const ContentWrap = styled.div``;

class MovingBackground extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.root = document.documentElement;

    this.image = document.querySelector("#image-" + this.props.id);

    this.image.addEventListener("mousemove", (e) => {
      /*

            this.image.style.backgroundPositionX = (
                -((e.pageX - this.image.offsetLeft) / 100) + "px"
            )

            this.image.style.backgroundPositionY = (
                -((e.pageY - this.image.offsetTop) / 100) + "px"
            )

            */

      var x = e.pageX - this.image.offsetLeft;
      var y = e.pageY - this.image.offsetTop;

      x = this.image.offsetWidth / 2 - x;
      y = this.image.offsetHeight / 2 - y;

      // Translate into max 5% to either side

      x = x / 20;
      y = y / 20;

      // console.log("x: " + x + " y: " + y)

      this.image.style.setProperty("--image-x", -x + "px");

      this.image.style.setProperty("--image-y", -y + "px");
    });
  }

  render() {
    return (
      <PositionWrap>
        <BackgroundWrap id={"image-" + this.props.id} maxMovement="5%">
          <SizeWrap>
            <ContentWrap>{this.props.children}</ContentWrap>
          </SizeWrap>
        </BackgroundWrap>
      </PositionWrap>
    );
  }
}

export default MovingBackground;
