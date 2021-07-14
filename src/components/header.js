import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import Cta from "./cta"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="main-header contain">


      <Link className="logo-group" to="/">
        <img src={logo} className="logo-img" alt="doo logo" />
        <h1 className="logo-type">{siteTitle}</h1>
      </Link>

      <div className="menu">
        <Cta 
          size="small-cta" 
          buttonText="Sign in"
          linkTo="http://www.doo.tools"
          color="white"
          className="cta"
        />
      </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
