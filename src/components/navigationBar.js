import React from "react"
import Link from "./navigationBarLink"

const NavigationBar = () => {
  return (
    <>
      <Link to="/">Niklas Buhl</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
    </>
  )
}

export default NavigationBar
