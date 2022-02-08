import React from "react"

const eventDefaultState = {
  width: 0,
  height: 0,
  scroll: 0,
  mouseX: 0,
  mouseY: 0,
}

const EventsContext = React.createContext(eventDefaultState)

class EventsProvider extends React.Component {
  state = {
    width: 0,
    height: 0,
    scroll: 0,
    mouseX: 0,
    mouseY: 0,
  }

  handleScroll = () => {
    let scroll = window.pageYOffset

    // console.log(scroll)

    localStorage.setItem("scroll", JSON.stringify(scroll))
    this.setState({ scroll: scroll })
  }

  handleMouse = event => {
    let mouseX = event.clientX
    let mouseY = event.clientY

    localStorage.setItem("mouseX", JSON.stringify(mouseX))
    this.setState({ mouseX: mouseX })

    localStorage.setItem("mouseY", JSON.stringify(mouseY))
    this.setState({ mouseY: mouseY })

    // console.log("Mouse: x: " + this.state.mouseX + " y: " + this.state.mouseY)
  }

  handleResize = () => {
    // console.log("Resize Window Event")

    let width = window.innerWidth
    let height = window.innerHeight

    localStorage.setItem("width", JSON.stringify(width))
    this.setState({ width: width })

    localStorage.setItem("height", JSON.stringify(height))
    this.setState({ height: height })

    // console.log(this.state)
  }

  componentDidMount() {
    console.log("Events Context Mounted")

    const lsWidth = JSON.parse(localStorage.getItem("width"))
    const lsHeight = JSON.parse(localStorage.getItem("height"))
    const lsScroll = JSON.parse(localStorage.getItem("scroll"))
    const lsMouseX = JSON.parse(localStorage.getItem("mouseX"))
    const lsMouseY = JSON.parse(localStorage.getItem("mouseY"))

    if (lsWidth) {
      this.setState({ width: lsWidth })
    } else {
      this.setState({ width: 0 })
    }

    if (lsHeight) {
      this.setState({ height: lsHeight })
    } else {
      this.setState({ height: 0 })
    }

    if (lsScroll) {
      this.setState({ scroll: lsScroll })
    } else {
      this.setState({ scroll: 0 })
    }

    if (lsMouseX) {
      this.setState({ mouseX: lsMouseX })
    } else {
      this.setState({ mouseX: 0 })
    }

    if (lsMouseY) {
      this.setState({ mouseY: lsMouseY })
    } else {
      this.setState({ mouseY: 0 })
    }

    try {
      window.addEventListener("resize", this.handleResize.bind(this))
      window.addEventListener("scroll", this.handleScroll.bind(this))
      window.addEventListener("mousemove", this.handleMouse.bind(this))
    } catch (error) {
      console.log(error)
    }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener("resize", this.handleResize.bind(this))
      window.removeEventListener("scroll", this.handleScroll.bind(this))
      window.removeEventListener("mousemove", this.handleMouse.bind(this))
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate() {
    // console.log("Event Context Update")
  }

  render() {
    const { children } = this.props
    const { width, height, scroll, mouseX, mouseY } = this.state

    // console.log("width: ", width)

    return (
      <EventsContext.Provider
        value={{
          width,
          height,
          scroll,
          mouseX,
          mouseY,
        }}
      >
        {children}
      </EventsContext.Provider>
    )
  }
}

export default EventsContext

export { EventsProvider }
