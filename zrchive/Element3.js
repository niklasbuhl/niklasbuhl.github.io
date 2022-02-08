/*

# External styles
- inner
- outer

# Aspect
- #:#

# Background

# Theme

# Width (Responsive)
- col (1-12)
- px (?)
- % (0-100)
- grow (true/false)

# Functionality
- Link

# Content Alignment

# Gutter

*/

import React, { Component } from "react"
import Emoji from './Emoji'
import styled, { css } from "styled-components"
import styles from "../styles/styles"

// Background, width, responsiveness, outer
const SuperWrap = styled.div`
  display: flex;
  flex-grow: ${props => props.grow === false ? '0' : '1'};

  min-width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};

  ${props => props.gut === 'mar' ? styles.mar : ''}
`
// width: ${props => props.width != undefined ? props.width : '100%'};

// Aspect
const AspectWrap = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-top: ${props => props.aspect};
`

// Aspect Element
const AspectCSS = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// Content, inner, (theme?), functionality
const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.alignHori};
  align-items: ${props => props.alignVert};

  ${props => (props.aspect != undefined ? AspectCSS : 'width: 100%')}

  ${props => props.gut === 'pad' ? styles.pad : ''}
`
// ${props => (props.aspect != undefined ? AspectCSS : '')}

class Element3 extends Component {

  constructor(props) {
    super()

    this.state = {
      widthInside: 0,
      widthOutside: 0,

      aspect: undefined,

      minWidth: undefined,
      width: undefined,
      maxWidth: undefined,

      height: undefined,
      minHeight: undefined,

      alignHori: 'center',
      alignVert: 'center',
    }

    this.ref = React.createRef()

    this.updateDimensions = this.updateDimensions.bind(this)

  }

  updateDimensions()   {
    this.setState({
      widthInside: this.ref.current.offsetWidth,
      widthOutside: this.ref.current.parentNode.offsetWidth,
      //widthOutside:this.ref.current.parentNode.clientWidth,

    })

    // If outside is less than width, width is 100%

  }

  componentWillMount() {

    // # Height

    if (this.props.minHeight != undefined) {
      this.setState({ minHeight: this.props.minHeight })
    }

    // # Width

    if (this.props.minWidth != undefined) {
      this.setState({ minWidth: this.props.minWidth })
    }

    // # Aspect

    // width:height 1:1 2:1 4:3 1920:1080

    if (this.props.aspect != undefined) {

      var inputAspect = this.props.aspect

      // Check if the aspect includes ':'
      if (!inputAspect.includes(':')) console.log("Error: Aspect does not include ':'")

      // Split the input with ':'
      inputAspect = inputAspect.split(':')

      // Check if the aspect is two numbers
      if (inputAspect.length > 2) console.log("Error: Aspect is more than 2 numbers")

      // Convert string to numbers
      for (var i = 0; i < inputAspect.length; i++) {
        inputAspect[i] = Number(inputAspect[i])
      }

      // Calculate the aspect height in %
      var aspect = 100 * inputAspect[1] / inputAspect[0] + "%"


      this.setState({ aspect: aspect })

    }

    // # Alignment

    if (this.props.align != undefined) {

      var align = this.props.align

      if (align.includes('left')) this.setState({ alignHori: 'flex-start' })
      else if (align.includes('right')) this.setState({ alignHori: 'flex-end' })

      if (align.includes('top')) this.setState({ alignVert: 'flex-start' })
      else if (align.includes('bottom')) this.setState({ alignVert: 'flex-end' })

    } // else console.log("Align is undefined")

    if (this.props.width != undefined) {

      // Width
      var inputWidth = this.props.width

      // Pixels
      if (inputWidth.includes('px')) {

        this.setState({ setWidth: inputWidth })

      }

      // Percent
      else if (inputWidth.includes('%')) {

        this.setState({ setWidth: inputWidth })

      }

      // Col
      else if (inputWidth.includes('col')) {

      }

      else {

        console.log("Error: Something wrong with 'width':" + inputWidth)

      }

    }

    else console.log("Error: No width defined.")

  }


  componentDidMount () {
    this.updateDimensions()

    window.addEventListener('resize', this.updateDimensions)
    // console.log(this.ref.current.offsetWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {

    return (

      <SuperWrap
        style={this.props.outerStyle}
        width={this.state.width}
        minWidth={this.state.minWidth}
        minHeight={this.state.minHeight}
        ref={this.ref}
        grow={this.props.grow}
        gut={this.props.gut}
      >

        <AspectWrap
          aspect={this.state.aspect}
        >

          <ContentWrap
            aspect={this.state.aspect}
            style={this.props.innerStyle}
            alignHori={this.state.alignHori}
            alignVert={this.state.alignVert}
            gut={this.props.gut}
          >
            {this.props.children}
          </ContentWrap>

        </AspectWrap>

      </SuperWrap>
    )

  }

}

export default Element3
