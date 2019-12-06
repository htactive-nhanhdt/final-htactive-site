import React from "react"
import { Link } from "gatsby"

const ParagraphLeft = ({ color, data, language }) => {
  return (
    <div className="col-lg-6 col-md-12">
      <h2 className="title">{data[`about_paragraph_title_${language}`]}</h2>
      <div className="row">
        <div className="col-md-6">
          <img className="imgAboutus" src={data.about_img} alt="" />
        </div>
        <div className="col-lg-6 col-md-12" style={{ marginLeft: 0 }}>
          <p>{data[`about_paragraph_${language}_1`]}</p>
        </div>
      </div>
      <p>{data[`about_paragraph_${language}_1`]}</p>
      <Link to="/about" className="btn btn-white">
        {language === "en" ? "READ MORE" : "TÌM HIỂU THÊM"}
      </Link>
      <div className="space hidden-md hidden-lg"></div>
    </div>
  )
}

export default ParagraphLeft
