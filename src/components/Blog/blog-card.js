import React, { useState } from "react"
import { Link } from "gatsby"
import "../Blog/blog-card.css"
import { useModal } from "react-modal-hook"
import ReactModal from "react-modal"
import { connect } from "react-redux"
import { RemoveScrollBar } from "react-remove-scroll-bar"

const CardBlog = ({
  src,
  postday,
  postmonth,
  postyear,
  cardTitle,
  cardContent,
  author,
  linkBlog,
  linkImg,
  iframe,
  toggleOverlay,
}) => {
  const month = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]
  const [open, setOpen] = useState(false)

  postmonth = postmonth.includes("0") ? postmonth.substring(1, 2) : postmonth
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <div
        className="open-div"
        style={{ width: "100vw", height: "100vh" }}
        onClick={() => {
          hideModal()
          setOpen(false)
          toggleOverlay(false)
        }}
      >
        <div className="off-modal">x</div>
        <img src={src} alt=""></img>
      </div>
    </ReactModal>
  ))
  return (
    <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
      <article className="clearfix blogpost">
        <div className="overlay-container blog-overlay">
          <button
            className="overlay-btn"
            style={{
              position: "absolute",
              top: "86px",
              left: "180px",
              zIndex: "10",
              width: 50,
              height: 30,
              background: "transparent",
              border: "none",
              color: "transparent",
            }}
            onClick={() => {
              showModal()
              setOpen(true)
              toggleOverlay(true)
            }}
          >
            Click
          </button>
          <Link
            to={linkBlog}
            className="link-btn"
            style={{
              position: "absolute",
              top: "86px",
              left: "130px",
              zIndex: "10",
              width: 50,
              height: 30,
              background: "transparent",
              border: "none",
              color: "transparent",
            }}
          ></Link>
          {iframe ? (
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td
                    className="iframe-small"
                    dangerouslySetInnerHTML={{ __html: iframe }}
                  />
                </tr>
              </tbody>
            </table>
          ) : (
            <React.Fragment>
              <img
                src={src}
                alt="Những Material component tuyệt vời trong React Native."
              />
              <div className={"overlay "}>
                <div className="overlay-links">
                  <Link to={linkBlog}>
                    <i className="fa fa-link" />
                  </Link>
                  <a
                    href={"/"}
                    className="popup-img-single"
                    title="image title"
                  >
                    <i className="fa fa-search-plus" />
                  </a>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="blogpost-body">
          <div className="post-info">
            <span className="day"> {postday}</span>
            <span className="month">{month[postmonth]}</span>
            <span className="year">{postyear}</span>
          </div>
          <div className="blogpost-content">
            <header className="blog-card-header">
              <h2 className="title">
                <Link to={linkBlog} className="post-title">
                  {cardTitle}
                </Link>
              </h2>
              <div className=" blog-card-author submitted">
                <i className="fa fa-user pr-5" /> by{" "}
                <Link to="/blog">{author}</Link>
              </div>
            </header>
            <p className="card-content">{cardContent}</p>
          </div>
        </div>
        <footer className="clearfix hidden">
          <ul className="links pull-left hidden">
            <li>
              <i className="fa fa-comment-o pr-5" />{" "}
              <Link to="/blog">20 comments</Link> |
            </li>
            <li>
              <i className="fa fa-tags pr-5" /> <Link to="/blog">{"tag"}</Link>
            </li>
          </ul>
          <Link className="pull-right link" to={linkBlog}>
            <span>Read more</span>
          </Link>
        </footer>
      </article>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    toggleOverlay: open => dispatch({ type: `TOGGLE_OVERLAY`, open: open }),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(CardBlog)
