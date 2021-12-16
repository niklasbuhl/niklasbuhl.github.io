import React from "react"
import { Link } from "gatsby"

const NavigationBarLink = (props) => {
	return (
		<Link to={props.to} activeStyle={{ color: "gray" }}>
			{props.children}
		</Link>
	)
}

export default NavigationBarLink
