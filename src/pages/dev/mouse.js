import React from "react"
import { Link } from "gatsby"

const MousePage = () => {
  let root = null

  try {
    root = document.querySelector(":root")
  } catch (e) {
    console.log("Error: ", e)
  }

  try {
    window.onmousemove = function (e) {
      root.style.setProperty("--mouseX", e.clientX + "px")
      console.log(e.clientX)

      root.style.setProperty("--mouseY", e.clientY + "px")
      console.log(e.clientY)
    }
  } catch (e) {
    console.log("Error: ", e)
  }

  return (
    <>
      <Link to="/dev">Back to Development Overview</Link>
      <h1>Mouse</h1>
    </>
  )
}

export default MousePage
