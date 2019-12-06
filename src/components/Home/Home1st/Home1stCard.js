import React from "react"
import {Link } from "gatsby"


const Home1stCard =({icon, title, lead, id, scrollY,language})=> {
return (
    <div className="col-sm-4">
    <div
      className={`box-style-1 white-bg object-non-visible animated object-visible ${
        scrollY > 300 ? `fade-in-bottom-${id}` : ""
      }`}
    >
      <i className={icon}></i>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{lead}</p>
      <Link to="/services" className="btn-default btn">
      {language === "en" ? "READ MORE" : "TÌM HIỂU THÊM"}
      </Link>
    </div>
  </div>
)}
export default Home1stCard
