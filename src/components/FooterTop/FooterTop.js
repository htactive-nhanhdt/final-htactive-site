import React, { useEffect } from "react"
import "../FooterTop/FooterTop.css"
import { useStaticQuery, graphql } from "gatsby"

const FooterTop = ({language}) => {  
  const data = useStaticQuery(
    graphql`
      query {
        carousel_en: markdownRemark(frontmatter: {carousel_en: { carousel_en_1: {ne: null}}}) {
          frontmatter {
            carousel_en {
              carousel_en_1
              carousel_en_2
              carousel_en_3
              carousel_en_4
              carousel_en_5
              carousel_en_6
              carousel_en_7
            }
          }
        }
        carousel_vn: markdownRemark(frontmatter: {carousel_vn: {carousel_vn_1: {ne: null}}}) {
          frontmatter {
            carousel_vn {
              carousel_vn_1
              carousel_vn_2
              carousel_vn_3
              carousel_vn_4
              carousel_vn_5
              carousel_vn_6
              carousel_vn_7
            }
          }
        }
      }
    `
  )
  const carousel = data[`carousel_${language}`].frontmatter[`carousel_${language}`]
  const carouselArr = Object.values(carousel).map(item => item) || []  
  const carouselImg = [...carouselArr,...carouselArr].map((item, index) => (
    <div key = {index} className="owl-item" style={{ width: "139px" }}>
      <div className="client">
        <a href="/">
          <img src={item} alt="" />
        </a>
      </div>
    </div>
  ))
  useEffect(() => {
    const element = document.getElementById("float-img")
    let count = 1
    setInterval(() => {
      if (count < 5) {
        element.style.transform = `translate3d(-${count * 140}px, 0px, 0px)`
      } else {
        count = 1
      }
      count++
    }, 5000)
  }, [])

  return (
    <div className="section text-muted footer-top clearfix">
      <div className="container">
        <div className="row ">
          <div className="col-xl-6 col-sm-12">
            <div
              className="owl-carousel clients owl-theme"
              style={{ opacity: 1, display: "block" }}
            >
              <div className="owl-wrapper-outer">
                <div
                  className="owl-wrapper"
                  id="float-img"
                  style={{
                    width: "2224px",
                    left: "0px",
                    display: "block",
                    transition: "all 800ms ease 0s",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                 {carouselImg}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12">
            <blockquote className="inline">
              <p className="margin-clear">
                Design is not just what it looks like and feels like. Design is
                how it works.
              </p>
              <footer>
                <cite title="Source Title">Steve Jobs </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
