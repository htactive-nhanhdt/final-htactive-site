import React from "react"
import NavBar from "./Header/Navbar"
import { Link } from "gatsby"
import { connect } from "react-redux"

const Footer = ({ footer, menu, language }) => {
  const engRoute = ["/", "/services/", "/products/", "/blog/", "/contact/"]
  let menuItem = []
  if (menu) {
    const dataUse = menu.frontmatter[`menu_${language}`] || {}
    const dataArr = Object.values(dataUse).map(item => item) || []
    menuItem = dataArr.map((item, index) => {
      return (
        <li key={index}>
          <Link to={engRoute[index]}>{item}</Link>
        </li>
      )
    })
  }

  return (
    <footer id="footer" className={footer}>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-md-12 col-xl-6"
              style={{ marginLeft: "0!important" }}
            >
              <div className="footer-content">
                <Link to="/">
                  <div>
                    <img
                      className="logo-footer"
                      alt=""
                      src="/img/logo_footer.png"
                    ></img>
                  </div>
                </Link>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <p>
                      {language === "en"
                        ? "Your satisfaction is our success!"
                        : "HT Active - Sự hài lòng của bạn là thành công của chúng tôi."}
                    </p>
                    <ul className="social-links circle">
                      <li className="facebook">
                        <a href="https://www.facebook.com/htactive">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="https://twitter.com/hoangvhh">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="googleplus">
                        <a href="https://plus.google.com/u/0/117715430853979848085">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li className="skype">
                        <a href="skype:hoangvhh">
                          <i className="fa fa-skype"></i>
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="https://www.linkedin.com/in/hoang-pham-6236b8b7">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <ul className="list-icons">
                      <li>
                        <i className="fa fa-map-marker pr-10"></i>{" "}
                        <span>
                          150 Duy Tan
                          <br />
                          <span style={{ marginLeft: "30px" }}>
                            Da Nang, Viet Nam
                          </span>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-phone pr-10"></i> (+84) 905 610 229
                      </li>
                      <li>
                        <i className="fa fa-mobile pr-10"></i> (+84) 1227 423
                        919
                      </li>
                      <li>
                        <i className="fa fa-envelope-o pr-10"></i>
                        <a className="link" href="mailto:recruit@htactive.com">
                          recruit@htactive.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to="/about" className="link-arrow link">
                  <span>{language === "en" ? "About Us" : "Về chúng tôi"}</span>
                </Link>
              </div>
            </div>
            <div className="space-bottom hidden-lg hidden-xs"></div>
            <div className="col-sm-12 col-md-6 col-xl-2">
              <div className="footer-content">
                <h2>Links</h2>
                <nav>
                  <ul className="nav nav-pills nav-stacked footer-nav">
                    {menuItem}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="footer-content">
                <h2>CONNECT WITH US!</h2>
                <iframe
                  title="ht active pages"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhtactive%2F&amp;tabs&amp;width=340&amp;height=214&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=1780445882280832"
                  width="340"
                  height="214"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    height: "213px",
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="space-bottom hidden-lg hidden-xs"></div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>Copyright © 2019 by HT Active. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <NavBar menu={menu} isFooter = {true} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
const mapStateToProps = ({ active, language, color, footer }) => {
  return { active, language, color, footer }
}
export default connect(mapStateToProps, null)(Footer)
