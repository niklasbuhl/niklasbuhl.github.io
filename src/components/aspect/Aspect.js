import React, { Component } from 'react'

import '../styles/styles.scss'

class Aspect extends Component {
  constructor(props) {
    super()

  }

  componentWillMount() {

  }

  componentDidMount() {


    // console.log("Aspect ID: " + id)

  }

  render() {

    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    console.log("Aspect ID: " + id)

    const aspect = 100 * this.props.height / this.props.width + "%"

    // console.log(aspect)

    // https://www.w3schools.com/howto/howto_css_aspect_ratio.asp

    return(
        <div id={id} style={{
          width: '100%',
          position: 'relative',
          paddingTop: aspect
        }}>

          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0'
          }}>
            {this.props.children}
          </div>
        </div>
    )
  }
}
