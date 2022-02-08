import { css } from "styled-components"

// https://www.cssmatic.com/box-shadow

const box = css`
  -webkit-box-shadow: 8px 8px 34px -8px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 8px 8px 34px -8px rgba(0, 0, 0, 0.7);
  box-shadow: 8px 8px 34px -8px rgba(0, 0, 0, 0.7);
`

const vignette = css`
  -webkit-box-shadow: inset 0px 0px 56px -20px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: inset 0px 0px 56px -20px rgba(0, 0, 0, 0.7);
  box-shadow: inset 0px 0px 56px -20px rgba(0, 0, 0, 0.7);
`

const softShadow = css`
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.024), 1px 1px 2px rgba(0, 0, 0, 0.05),
    2px 2px 4px rgba(0, 0, 0, 0.03), 2px 2px 7px rgba(0, 0, 0, 0.4);
`

const neonGreen = css`
  color: #ffffff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
`

const rgbGreenMagenta = css`
  text-shadow: 0.04em 0 0px rgba(255, 0, 255, 0.8),
    -0.04em 0 0px rgba(0, 255, 0, 0.8);
`

const rgbBlueRed = css`
  text-shadow: 0.04em 0 0px rgba(0, 0, 255, 0.8),
    -0.04em 0 0px rgba(255, 0, 0, 0.8);
`

const stereoscopic = css`
  text-shadow: -0.04em 0 0 #f22613, 0.04em 0 0 #00ffff;
`

const stereoscopicOpaque = css`
  text-shadow: -0.04em 0 0 rgba(242, 38, 19, 0.7),
    0.04em 0 0 rgba(0, 255, 255, 0.7);
`

const layered = css`
  color: #ffffff;
  text-shadow: -0.05em 0.05em 0px #00e6e6, -0.1em 0.1em 0px #01cccc,
    -0.15em 0.15em 0px #00bdbd;
`

const tileShadow01 = css`
  box-shadow: rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;
`

// https://polypane.app/css-3d-transform-examples/

const hollow = css`
  /* color: var(--hard-white); */
  background-color: #565656;
  color: transparent;

  text-shadow: 0.02em 0.04em 3px rgb(255, 255, 255);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
`

// https://designshack.net/articles/css/inner-shadows-in-css-images-text-and-beyond/

const shadows = {
  // Box
  box: box,
  vignette: vignette,
  neonGreen: neonGreen,

  // Text
  rgbGreenMagenta: rgbGreenMagenta,
  rgbBlueRed: rgbBlueRed,
  stereoscopic: stereoscopic,
  stereoscopicOpaque: stereoscopicOpaque,
  layered: layered,
  hollow: hollow,
  softShadow: softShadow,

  // Tile
  tileShadow01: tileShadow01,
}

export default shadows
