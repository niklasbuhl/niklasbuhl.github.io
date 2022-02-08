import React, { Component } from "react";
// import { Link } from "gatsby"
import Emoji from "../emoji/Emoji";
import styled, { css } from "styled-components";
import styles from "../../styles/styles";

import background_01 from "../../files/images/background_01.jpeg";

// background-color: ${props => props.bgColor};

const backgroundImage = css`

  overflow: hidden;

  --img-x: 0;
  --img-y: 0;

  // &::before {
  //   content: "";
  //   position: absolute;

  //   width: 100%;
  //   height: var(--heroHeaderHeight);

  //   background-image: url(${(props) => props.bgImage});
  //   background-repeat: no-repeat;
  //   // background-attachment: fixed;
  //   background-position: center;
  //   background-size: calc(100vw * 1.2);
  //   z-index: -1;

  //   transform: rotate(30deg);

  //   overflow: hidden;

  // }

  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  // background-position: center;
  background-size: calc(100vw * 1.2);

  // transform: rotate(30deg);
`;

const PositionWrap = styled.div`
  width: 100%;
  margin-bottom: var(--heroHeaderMargin);
  ${styles.centerCol}
  ${backgroundImage}
`;
// ${props => props.bgImage === background_01}
// background-image: url(${background_01});

const SizeWrap = styled.div`
  ${styles.contentPageWidth}
  height: var(--heroHeaderHeight);

  // background: rgba(0,255,255,0.4);
`;
const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  ${styles.centerCenter}
  z-index: 20;
`;

const TextStyle = styled.code`
  font-size: 24px;
  /* color: rgba(0,255,0,1); */
  color: white;
`;

const MouseImageInteraction = styled.div`
  width: 100%;
  height: var(--heroHeaderHeight);
  z-index: 10;
  margin-top: -240px;
  // pointer-events: none;
  pointer-events: auto;
`;

class HeroHeader extends Component {
  constructor() {
    super();

    this.state = {
      // Spinning earth component
      earthCount: 0,
    };

    this.earthSymbol = ["🌍", "🌏", "🌎"];

    this.image = "";
    this.mouse = "";
  }

  componentDidMount() {
    window.scrollTo(0, 240);
    // insert code into the HTML?

    this.earthInterval = setInterval(() => {
      this.setState((prevState) => ({
        earthCount: (prevState.earthCount + 1) % 3,
      }));
    }, 200);

    this.root = document.documentElement;
    this.image = document.querySelector("#hero-bg-img");
    this.mouse = document.querySelector("#hero-bg-mouse");

    this.image.addEventListener("mousemove", (e) => {
      // console.log("x: " + e.pageX)

      // this.image.

      // this.image.style.backgroundPositionX = -(e.offsetX / 100) + "px"
      // this.image.style.backgroundPositionY = -(e.offsetY / 100) + "px"
      this.image.style.backgroundPositionX =
        -((e.pageX - this.image.offsetLeft) / 100) + "px";
      this.image.style.backgroundPositionY =
        -((e.pageY - this.image.offsetTop) / 100) + "px";
    });
  }

  render() {
    var { earthCount } = this.state;

    return (
      <PositionWrap id="hero-bg-img" bgImage={background_01}>
        <SizeWrap>
          <ContentWrap>
            <TextStyle>
              Hello World&nbsp;
              <Emoji
                label="earth"
                symbol={this.earthSymbol[earthCount]}
                style={{
                  textShadow:
                    "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                }}
              />
              &nbsp;How are you?
            </TextStyle>
          </ContentWrap>
        </SizeWrap>
      </PositionWrap>
    );
  }
}

// <MouseImageInteraction id="hero-bg-mouse" />

export default HeroHeader;
