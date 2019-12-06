import React, { useState, useEffect } from "react"
import TextCenter from "../TextCenter/TextCenter"

import Home1stCard from "./Home1stCard"

const Home1st = ({ data, language }) => {
  const dataUse = data.frontmatter[`home_1st_${language}`] || {}
  const dataArr = Object.values(dataUse).map(item => item) || []
  const dataBox = dataArr.filter((item, index) => index > 1)
  const [scrollY, setScrollY] = useState(0)
  const icon = ["fa fa-laptop", "fa fa-mobile", "fa fa-gamepad"]
  const logit = () => {
    if (window) setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])
  return (
    <section
      className="main-container "
      style={{ marginTop: 0, backgroundColor: "#f1f1f1" }}
    >
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TextCenter head={dataArr[1]} description={dataArr[0]} />
              <div className="row list-card">
                {dataBox.map((item, index) => (
                  <Home1stCard
                    scrollY={scrollY}
                    key={index}
                    id={index+1}
                    icon={icon[index]}
                    language={language}
                    title={item[`home_box_title_${language}_${index + 1}`]}
                    lead={item[`home_box_desc_${language}_${index + 1}`]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home1st
