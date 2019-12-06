import React, { useState} from "react"
import { Link, graphql } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubSlider from "../components/Portfolio/LeftSliderPortfolio"

import avatar from "../../static/img/avatar.jpg"

const PortfolioChildPage = ({ data, language, color }) => {
  const [openTab, setOpenTab] = useState(1)
  const [openVideo, setOpenVideo] = useState(false)
  const rawData = data.markdownRemark.frontmatter.card_portfolio
  const tag = rawData.tag_card
  
  const footerPortfolio = rawData.card_page.footer_portfolio
  const sliderData = rawData.card_page.slider_img
  const productDetailData = rawData.card_page.product_detail.product_detail.sort(
    (a, b) => a.detail_id - b.detail_id
  )
  const descriptionData = rawData.card_page.product_description.product_desc.sort(
    (a, b) => a.desc_id - b.desc_id
  )
  const commentData =
    rawData.card_page.product_comment !== null
      ? rawData.card_page.product_comment.product_comment
      : []
  

  return (
    <Layout>
      <SEO title={`${rawData.card_title}`} />
      <div className="page-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ol className="breadcrumb">
                <li className={`${color}`}>
                  <i className="fa fa-home pr-10" />
                  {rawData.tag_card === "web" && (
                    <Link to="/products">Web Application</Link>
                  )}
                  {rawData.tag_card === "game" && (
                    <Link to="/products">Mobile Game</Link>
                  )}
                  {rawData.tag_card === "app" && (
                    <Link to="/products">Mobile Application</Link>
                  )}
                </li>
                <li className="active">{rawData.card_title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="main-container" style={{ marginTop: "0px" }}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-12">
              {/* page-title start */}
              {/* ================ */}
              <h1 className="page-title margin-top-clear">
                {rawData.card_title}
              </h1>
              {/* page-title end */}
              <div className="row">
                <div className={`col-md-4 ${color}`}>
                  {/* Nav tabs */}
                  <ul className={`nav nav-pills white space-top `} role="tablist">
                    <li>
                      <button
                        title="images"
                        className={`${openVideo ? "" : "active"}`}
                        onClick={() => setOpenVideo(false)}
                      >
                        <i className="fa fa-camera pr-2" />
                        {language === "en" ? "Image" : "Hình ảnh"}
                      </button>
                    </li>

                    <li>
                      <button
                        title="video"
                        className={`${openVideo ? "active" : ""}`}
                        onClick={() => setOpenVideo(true)}
                      >
                        <i className="fa fa-video-camera pr-2" />
                        Video
                      </button>
                    </li>
                  </ul>
                  {/* Tab panes start*/}
                  {openVideo === false && (
                    <div className="tab-content clear-style">
                      <SubSlider listImg={sliderData} />
                      <div className="tab-pane" id="product-video">
                        <div className="embed-responsive embed-responsive-16by9"></div>
                      </div>
                    </div>
                  )}
                  {openVideo && (
                    <div
                      className="tab-pane active"
                      id="product-video"
                      style={{ marginTop: "15px" }}
                    >
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          title={rawData.card_title}
                          className="embed-responsive-item"
                          src={rawData.card_page.video_url}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tab panes end*/}
                  <hr />
                </div>
                {/* product side start */}
                <aside className="col-md-8">
                  <div className="sidebar">
                    <div className="side product-item vertical-divider-left">
                      <div className={`tabs-style-2 ${color} `}>
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                          <li className={`${color}`}>
                            <button
                              onClick={() => setOpenTab(1)}
                              className={`btn ${
                                openTab === 1 ? "btn-default" : ""
                              }`}
                            >
                              <i className="fa fa-file-text-o pr-3" />
                              {`${
                                language === "en"
                                  ? "Product"
                                  : `${tag !== "game" ? "Mô tả" : "Thông tin"}`
                              }`}
                            </button>
                          </li>

                          <li className={`${color}`}>
                            <button
                              onClick={() => setOpenTab(2)}
                              className={`btn ${
                                openTab === 2 ? "btn-default" : ""
                              }`}
                            >
                              <i className="fa fa-files-o pr-3" />
                              {`${
                                language === "en"
                                  ? "Description"
                                  : `${tag !== "game" ? "Công nghệ" : "Mô tả"}`
                              }`}
                            </button>
                          </li>

                          {language === "vn" && (
                             <li className={`${color}`}>
                              <button
                                onClick={() => setOpenTab(3)}
                                className={`btn ${
                                  openTab === 3 ? "btn-default" : ""
                                }`}
                              >
                                <i className="fa fa-star pr-3" />(
                                {commentData.length})Nhận xét
                              </button>
                            </li>
                          )}
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content padding-top-clear padding-bottom-clear">
                          {openTab === 1 && (
                            <div
                              className="tab-pane fade-in active"
                              id="h2tab1"
                            >
                              {productDetailData.map((item, index) => (
                                <div key={index}>
                                  <h4 className="title">{item.name}</h4>
                                  {item.content_list.length === 1 ? (
                                    <p>{item.content_list[0].content}</p>
                                  ) : (
                                    <ul className="list-detail-content">
                                      {item.content_list.map(
                                        (content, index) => (
                                          <li key={index} className="list-detail-item">{content.content}</li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {openTab === 2 && (
                            <div className="tab-pane">
                              <h4 className="space-top">
                                {language === "en"
                                  ? `${rawData.card_title} description`
                                  : `${
                                      tag !== "game"
                                        ? "Công nghệ sử dụng trong hệ thống"
                                        : `Chi tiết về ${rawData.card_title}`
                                    }`}
                              </h4>
                              <hr />
                              <dl className="dl-horizontal">
                                {descriptionData.map(item => (
                                  <div key={item.desc_id}>
                                    <dt>{item.name}</dt>
                                    <dd>{item.tech_content}</dd>
                                  </div>
                                ))}
                              </dl>
                              <hr />
                            </div>
                          )}
                          {openTab === 3 && (
                            <div className="comments margin-clear space-top">
                              {commentData.map(item => (
                                <div
                                  className="comment clearfix"
                                  key={item.comment_id}
                                >
                                  <div className="comment-avatar">
                                    <img src={avatar} alt="avatar" />
                                  </div>
                                  <div className="comment-content">
                                    <h3>{item.title}</h3>
                                    <div className="comment-meta">
                                      <i className="fa fa-star text-default" />
                                      <i className="fa fa-star text-default" />
                                      <i className="fa fa-star text-default" />
                                      <i className="fa fa-star text-default" />
                                      <i className="fa fa-star text-default" />|{" "}
                                      {item.comment_date}
                                    </div>
                                    <div className="comment-body clearfix">
                                      <p>{item.comment_content}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="tab-pane fade" id="h2tab3">
                            {/* comments start */}
                            <div className="comments margin-clear space-top"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                {/* product side end */}
              </div>
            </div>
            {/* main end */}
          </div>
        </div>
      </section>
      <div className="section gray-bg clearfix">
        <div className="container">
          <div className="call-to-action">
            <div className="row">
              <div className="col-md-8">
                <h1 className="title text-center">
                  {tag === "web"
                    ? language === "en"
                      ? "More detail"
                      : "Tìm hiểu thêm"
                    : language === "en"
                    ? "Find on Store"
                    : "Bạn muốn xem thêm chi tiết"}
                </h1>
                <p className="text-center">
                  {tag === "web"
                    ? language === "en"
                      ? `Go to ${rawData.card_title}`
                      : `Truy cập vào ${rawData.card_title} để tìm hiểu thêm`
                    : language === "en"
                    ? "Check on stores for more detail"
                    : "Truy cập vào những link ở bên để tìm hiểu kĩ hơn."}
                </p>
              </div>
              <div className="col-md-4">
                {footerPortfolio.map((item, index) => (
                  <div key={index} className="text-center">
                    <a
                      style={{ width: "230px" }}
                      href={item.store_link}
                      className="btn btn-default"
                    >
                      {tag === "web"
                        ? language === "en"
                          ? `Go to ${item.store_title}`
                          : `Đến ${item.store_title}`
                        : item.store_title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = ({ language, color }) => {
  return { language, color }
}
const mapDispatchToProps = dispatch => {
  return {
    changeSlug: slug => dispatch({ type: `CHANGE_SLUG`, slug: slug }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioChildPage)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: { card_portfolio: { card_slug: { eq: $slug } } }
    ) {
      frontmatter {
        card_portfolio {
          tag_card
          language
          card_title
          card_slug
          card_page {
            footer_portfolio {
              store_link
              store_title
            }
            product_comment {
              product_comment {
                comment_content
                comment_date
                comment_id
                title
              }
            }
            product_description {
              product_desc {
                name
                desc_id
                tech_content
              }
            }
            slider_img {
              slider
              id
            }
            product_detail {
              product_detail {
                content_list {
                  content
                }
                detail_id
                name
              }
            }
            video_url
          }
        }
      }
    }
  }
`
