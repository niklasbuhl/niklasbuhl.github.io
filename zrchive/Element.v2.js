import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { useContainerDimensions } from "../../functions/containerDimensions"

const ComponentWrap = styled.div`
  background: cyan;
  width: ${props => props.width};
`

const Element = props => {
  const componentRef = useRef()
  const { width, height } = useContainerDimensions(componentRef)

  const [n, setN] = useState(3)
  const [percent, setPercent] = useState(100 / n)

  const responsive = () => {
    console.log(width)
    if (width < 270) setN(n - 1)
    // if (width >= 270) setN(n + 1)
  }

  useEffect(() => {
    window.addEventListener("resize", responsive)
    // responsive()

    return () => {
      window.removeEventListener("resize", responsive)
    }
  }, [])

  return (
    <ComponentWrap ref={componentRef} width={percent + "%"}>
      {props.children} Width: {width} Height: {height} N: {n}
    </ComponentWrap>
  )
}

export default Element
