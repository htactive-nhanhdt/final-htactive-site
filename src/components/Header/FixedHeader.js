import React from "react"
import { connect } from "react-redux"

import NavBar from "./Navbar"
import { Link } from "gatsby"

const HeaderFixed = ({ color, menu, fixed }) => {
  return (
    <header className={`header fixed ${fixed ? "fixed-bar" : " "} clearfix`}>
      <div className="container">
        <div className="row header-fixed">
          <div className={`col-md-3 ${fixed ? "header-left-fixed" : ""}`}>
            <div className="header-left clearfix">
              <Link to="/">
                <div className={`logo ${fixed ? "logo-fixed" : ""}`}></div>
              </Link>
              <div
                className="site-slogan"
                style={{ display: `${fixed ? "none" : "block"}` }}
              >
                Your Satisfaction Is Our Success
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="header-right clearfix">
              <div className="main-navigation animated">
                <NavBar menu={menu} color={color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: value => dispatch({ type: `ACTIVE_NAVBAR`, active: value }),
  }
}
export default connect(mapDispatchToProps)(HeaderFixed)
