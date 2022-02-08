import React from "react"

const logoDefaultState = {
  hidden: true,
  setHidden: () => {},
  toggleHidden: () => {},
}

const LogoContext = React.createContext(logoDefaultState)
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.

// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true

class LogoProvider extends React.Component {
  state = {
    hidden: true,
    scrollPosition: 0,
  }

  toggleHidden = () => {
    let hidden = !this.state.hidden
    localStorage.setItem("hidden", JSON.stringify(hidden))
    this.setState({ hidden: hidden })
  }

  setHidden = boolean => {
    localStorage.setItem("hidden", JSON.stringify(boolean))
    this.setState({ hidden: boolean })
  }

  // handleScroll = () => {
  //   try {
  //     const position = window.pageYOffset
  //     this.setState({ scrollPosition: position })
  //     console.log("Scroll: " + this.state.scrollPosition)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  componentDidMount() {
    console.log("Logo Context Mounted")

    // Getting dark mode value from localStorage!
    const lsHidden = JSON.parse(localStorage.getItem("hidden"))

    if (lsHidden) {
      this.setState({ hidden: lsHidden })
    } else {
      this.setState({ hidden: true })
    }

    // console.log("Logo Context Mount: " + this.state.hidden)

    // console.log(this.props.location.pathname)
    // window.addEventListener("scroll", this.handleScroll)
  }

  // useEffect(() => {
  //   // console.log(props.location.pathname)

  //   if (props.location.pathname != "/") {
  //     logoContext.setHidden(false)
  //     return
  //   }

  //   if (props.scrollPosition >= 320) logoContext.setHidden(false)
  //   else logoContext.setHidden(true)
  // }, [props])

  componentDidUpdate() {
    // console.log("Logo Context Update: " + this.state.hidden)
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const { children } = this.props
    const { hidden } = this.state
    return (
      <LogoContext.Provider
        value={{
          hidden,
          setHidden: this.setHidden,
          toggleHidden: this.toggleHidden,
        }}
      >
        {children}
      </LogoContext.Provider>
    )
  }
}

export default LogoContext

export { LogoProvider }
