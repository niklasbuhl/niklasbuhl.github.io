/*

https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element

      <FullPageCenter>
        <ElementResponsive col={4}>Hello, World!</ElementResponsive>
        <ElementResponsive col={4}>Hello, World!</ElementResponsive>
        <ElementResponsive col={4}>Hello, World!</ElementResponsive>
      </FullPageCenter>

  const ResponsiveElementDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  color: magenta;
  height: ${props => (props.height ? props.height + "px" : "fit-content")};
  background: ${props => props.color};
  min-width: ${props => props.minWidth - 1}px;
  flex-basis: ${props => (props.percent ? props.percent + "%" : "content")};
  max-width: ${props => props.maxWidth + 1}px;
`

const ElementResponsive = props => {
  const componentRef = useRef()
  const { col, width, minWidth, maxWidth, percent, height } =
    useResponsiveContainer(componentRef, props.col)

  return (
    <ResponsiveElementDiv
      ref={componentRef}
      bgColor={props.bgColor}
      percent={percent}
      minWidth={minWidth}
      maxWidth={maxWidth}
    >
      {props.children}
      <br />
      Col: {col}
      <br />
      Width: {width}
      <br />
      Min Width: {minWidth}
      <br />
      Max Width: {maxWidth}
      <br />
      Percent: {percent}
      <br />
      Height: {height}
    </ResponsiveElementDiv>
  )
}

*/

import { useEffect, useState } from "react"
import styles from "../src/styles/styles"

export const useResponsiveContainer = (myRef, col) => {
  const initialCol = col || 12

  // # Set max page width
  const mPW = styles.variables.maxPageWidth

  // # Component Width(s)

  // ## Optimal Element Width
  const opW = (mPW / 12) * initialCol

  // ## Minimum Element Width
  const minW = opW * 0.8

  // ## Maximum Element Width
  const maxW = opW * 1.2

  // console.log("Max Page Width:\t", mPW)
  // console.log("Min Page W:\t", minW)
  // console.log("Optimal Page W:\t", opW)
  // console.log("Max Page W:\t", maxW)

  const getDimensions = () => {
    const width = myRef.current.offsetWidth
    const height = myRef.current.offsetHeight

    console.log("Width: ", width)
    console.log("Max Width: ", maxW)

    if (width > maxW) {
      console.log("Increase N.")
      const newN = n + 1
      setN(newN)
      console.log("n: ", n)
      console.log("newN: ", newN)
    }

    if (width < minW && n > 1) {
      console.log("Reduce N.")
      const newN = n - 1
      setN(newN)
      console.log("n: ", n)
    }

    dimensions.percent = 100 / n

    console.log("%: ", dimensions.percent)
    console.log("n: ", n)

    var result = {
      col: col,
      width: width,
      minWidth: minW,
      maxWidth: maxW,
      percent: dimensions.percent,
      height: height,
    }
    return result
  }

  const [n, setN] = useState(1)

  const [dimensions, setDimensions] = useState({
    col: initialCol,
    width: 0,
    minWidth: 0,
    maxWidth: 0,
    percent: (100 / 12) * initialCol,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions
}
