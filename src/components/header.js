import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="main-header contain">

      <h1 style={{ margin: 0 }}>
      <Link className="logo-group" to="/">
        <img src={logo} className="logo-img" alt="doo logo" />
        <h1 className="logo-type">{siteTitle}</h1>
      </Link>
      </h1>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
