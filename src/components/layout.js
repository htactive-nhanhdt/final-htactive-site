import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"

import Header from "./Header/MainHeader"
import Footer from "./footer"
import FooterTop from "./FooterTop/FooterTop"
import StyleSwitcher from "../components/StyleSwitcher/StyleSwitcher"


import "./layoutCss/assets/css/bootstrap.css"
import "./layoutCss/assets/css/icons.css"
import "./layoutCss/assets/css/main.css"
import "./layoutCss/assets/css/carousel.css"
import "./layoutCss/assets/voc/css/animations.css"
import "./layoutCss/assets/voc/css/style.css"
import "./layout.css"
require("typeface-open-sans")



const Layout = ({  children, color, open, language }) => {
  const data = useStaticQuery(
    graphql`
      query {
        menu_vn: markdownRemark(frontmatter: { menu_vn: { ne: null } }) {
          frontmatter {
            menu_vn
          }
        }
        menu_en: markdownRemark(frontmatter: { menu_en: { ne: null } }) {
          frontmatter {
            menu_en
          }
        }
      }
    `
  )
  const menu = data[`menu_${language}`]
  return (
    <div className={"page-wrapper " + (open ? "blur-bg" : "")}>
      <StyleSwitcher></StyleSwitcher>
      <Header menu={menu} color={color} language={language} />
      <main>{children}</main>
      <FooterTop  language={language}/>
      <Footer menu={menu} />
      <ScrollUpButton AnimationDuration={1500} ShowAtPosition={0} />
      <div>
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = ({ color, open, language }) => {
  return { color, open, language }
}
export default connect(
  mapStateToProps,
  null
)(Layout)
