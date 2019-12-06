import React, { useState } from "react"

import CardPort from "./CardPortfolio"

const MainPortfolio = ({ categoriesData, cardPortfolioData, color }) => {
  const [active, setActive] = useState("all")
  return (
    <section className="main-container">
      <div className="container">
        <div className="row">
          {/* main start */}
          {/* ================ */}
          <div className="main col-md-12">
            <div className="shield"></div>
            <div className={`filters ${color}`}>
              <ul className="nav nav-pills">
                <li
                  className={`${active === "all" ? "active" : " "}`}
                  onClick={() => setActive("all")}
                >
                  <p>All</p>
                </li>
                {categoriesData.map((item, index) => (
                  <li
                    key={index}
                    className={`${active === item.tag_name ? "active" : " "}`}
                    onClick={() => setActive(item.tag_name)}
                  >
                    <p>{item.category_title}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* isotope filters end */}
            {/* portfolio items start */}
            <div
              className="image-boxes isotope-container row"
              style={{
                position: "relative",
              }}
            >
              {cardPortfolioData.map((item, index) => (
                <CardPort
                  key={index}
                  title={item.card_title}
                  image={item.card_img}
                  content={item.card_lead}
                  link={item.card_slug}
                  tag={item.tag_card}
                  active={active}
                />
              ))}
            </div>
            {/* portfolio items end */}
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </section>
  )
}
export default MainPortfolio
