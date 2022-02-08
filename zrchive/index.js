import { Link } from "gatsby"
import React from "react"
import PageLayout from "../src/layouts/page-layout"
import FullPageCenterContent from "../src/components/wrappers/FullPageCenterContent"

const DevIndex = props => {
  return (
    <PageLayout location={props.location}>
      <FullPageCenterContent>
        <h1>Development Pages</h1>
        <ul style={{ margin: "8px" }}>
          <li>
            <Link to="/dev/links">Links</Link>
          </li>
          <li>
            <Link to="/dev/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/dev/colors">Colors</Link>
          </li>
          <li>
            <Link to="/dev/borders">Borders</Link>
          </li>
          <li>
            <Link to="/dev/cols">Cols</Link>
          </li>
          <li>
            <Link to="/dev/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dev/display">Display</Link>
          </li>
          <li>
            <Link to="/dev/element">Element</Link>
          </li>
          <li>
            <Link to="/dev/fullpagebackground">FullPageBackground</Link>
          </li>
          <li>
            <Link to="/dev/grid">Grid</Link>
          </li>
          <li>
            <Link to="/dev/links">Links</Link>
          </li>
          <li>
            <Link to="/dev/mouse">Mouse</Link>
          </li>
          <li>
            <Link to="/dev/responsive">Responsive</Link>
          </li>
          <li>
            <Link to="/dev/shadows">Shadows</Link>
          </li>
        </ul>
      </FullPageCenterContent>
    </PageLayout>
  )
}

export default DevIndex
