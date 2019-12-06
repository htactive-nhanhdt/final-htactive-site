import React from "react"
import { Link } from "gatsby"

const PageTop = ({ data, language }) => {
  const dataUse = data.frontmatter[`lead_${language}`] || {}
  return (
    <div className="page-top" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="call-to-action">
              <p className="lead">{dataUse}</p>
              <Link className="btn btn-white more" to="/services">
                {language === "en" ? "READ MORE" : "TÌM HIỂU THÊM"}
                <i className="pl-10 fa fa-info"></i>
              </Link>

              <Link to="/contact" className="btn btn-default contact">
              {language === "en" ? "CONTACT" : "LIÊN HÊ"}
                <i className="pl-10 fa fa-phone"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageTop
