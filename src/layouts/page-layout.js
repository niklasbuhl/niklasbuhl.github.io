import React from "react"
import NavigationBar from "../components/navigationBar"

const AboutPage = (props) => {
	return (
		<>
			<NavigationBar />
			{props.children}
		</>
	)
}

export default AboutPage
