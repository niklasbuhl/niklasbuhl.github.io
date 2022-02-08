import React, { Component } from "react"
import { Link } from "gatsby"
import DevPage from "../../layouts/dev-page-layout"
import FullPageSection from "../../components/sections/FullPageSection"

export default class DevDisplayPage extends Component {
  constructor() {
    super()

    this.state = {
      displayData: 0,
    }
  }

  componentDidMount() {
    // console.log(styles.backgroundImage)
    console.log("Display Mounted")
  }

  getDisplayData(data) {
    // console.log("Display State")
    // console.log(data)

    this.setState({ displayData: data })
  }

  render() {
    // console.log("Display Data: " + this.props.hello)

    // console.log("Article Hello: " + this.props.hello)

    // console.log(this.state)

    return (
      <DevPage title="Examples" location={this.props.location}>
        <FullPageSection>
          <Link to="/dev">Back to Development Overview</Link>
          <h1>Display</h1>

          <p className="code">Browser Width: {this.state.displayData.width}</p>
          <p className="code">
            Browser Height: {this.state.displayData.height}
          </p>
          <p className="code">
            Available Width: {this.state.displayData.availWidth}
          </p>
          <p className="code">
            Available Height: {this.state.displayData.availHeight}
          </p>
          <p className="code">Ratio: {this.state.displayData.displayRatio}</p>
        </FullPageSection>
      </DevPage>
    )
  }
}

// <h1 style={{(styles.shadow.neonGreen)}}>TestStylesPage</h1>

// styles.shadow.neonGreen
