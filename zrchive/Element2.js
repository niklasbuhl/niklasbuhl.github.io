import React, { Component } from "react"
import styled, { css } from "styled-components"
import styles from "../styles/styles"
import "../styles/style.scss"

const colNum = 12
const minPercentage = 0.8
var colNums = []
var colShare = []
var colAvgs = []
var colMins = []

for (var i = 0; i < colNum; i++) {
  colNums.push(i + 1)
}

for (i = 0; i < colNum; i++) {
  colShare.push(colNum / (i+1))
}

for (i = 0; i < colNum; i++) {

  var result = Number(styles.maxPageWidth.replace('px', '')) - 16

  result = Math.floor((result / colShare[i]) - 16)

  colAvgs.push(result)

}

for (i = 0; i < colNum; i++) {

  result = Math.floor(colAvgs[i] * minPercentage)

  colMins.push(result)

}




const ElementDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px black;
  padding: 8px;
  margin: 8px;
  flex-grow: 1;
`

class Element2 extends Component {

  constructor(props) {
    super()

    this.state = {
      widthInside: 0,
      widthOutside_1: 0,
      widthOutside_2: 0,
      height: 0,
    }

    this.ref = React.createRef()

    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions()   {
    this.setState({
      widthInside: this.ref.current.offsetWidth,
      widthOutside_1:this.ref.current.parentNode.offsetWidth,
      widthOutside_2:this.ref.current.parentNode.clientWidth,

    })

    // console.log(this.ref.current.offsetWidth)
    if (this.props.debug) console.log(this.state.widthInside)
  }

  componentWillMount() {
    // this.updateDimensions()
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

    var debug, percent

    percent = (100 / this.state.widthOutside_2) * this.state.widthInside

    if (this.props.debug) {
      debug = (<>
        Width Inside: {this.state.widthInside} <br />
        Width Outside 1: {this.state.widthOutside_1} <br />
        Width Outside 2: {this.state.widthOutside_2} <br />
        Percent: {percent}<br />

      </>)
    }

    console.log(colNums)
    console.log(colShare)
    console.log(colAvgs)
    console.log(colMins)

    return (
      <ElementDiv ref={this.ref}>
        {debug}
        {this.props.children}
      </ElementDiv>
    )
  }
}

export default Element2
