// import SimpleIcon from "simple-icons-react-component"

const SizedSimpleIcon = props => (
  <div
    style={{
      height: props.size,
      width: props.size,
      margin: "calc(" + styles.margin + "/ 2)",
    }}
  >
    <SimpleIcon name={props.name} color={props.color} />
  </div>
)

import React from "react"

import SimpleIcons from "simple-icons-react-component"

function Icon(props) {
  return (
    <div className={props.className}>
      <SimpleIcons name={props.name} color={props.color} />
    </div>
  )
}

export default Icon
