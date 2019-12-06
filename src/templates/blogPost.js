import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import RelatedPost from "../components/Blog/RelatedPost"
import { connect } from "react-redux"

const BlogPost = ({ data, language, changeActive }) => {
  useEffect(() => {
    changeActive("4")
    return
  }, [changeActive])

  const post = data.post
  const monthList = [
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
  const getDate = date => {
    if (date) {
      const day = date.substring(8, 10)
      let month = date.substring(5, 7)
      const year = date.substring(0, 4)
      month = month.includes("0") ? month.substring(1, 2) : month
      return [day, month, year]
    }
    return ["11", "12", "2019"]
  }
  return (
    <Layout>
      <SEO title={`${post.frontmatter.blog_title_en}`} />
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="main col-lg-8">
              <h1 className="page-title">
                {post.frontmatter[`blog_title_${language}`]}
              </h1>
              <article className="clearfix blogpost full">
                <div className="blogpost-body">
                  <div className="side">
                    <div className="post-info">
                      <span className="day day--big">
                        {getDate(post.frontmatter[`blog_date_${language}`])[0]}
                      </span>
                      <span className="month">
                        {
                          monthList[
                            getDate(
                              post.frontmatter[`blog_date_${language}`]
                            )[1]
                          ]
                        }
                      </span>
                      <span className="year">
                        {getDate(post.frontmatter[`blog_date_${language}`])[2]}
                      </span>
                    </div>
                    <div id="affix" className="affix-top">
                      <span className="share">Share this</span>
                      <div id="share" className="sharrre">
                        <ul className="social-links clearfix">
                          <li className="facebook">
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftrusting-brown-c4f562.netlify.com${post.fields.slug}%2F`}
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a
                              href={`https://twitter.com/intent/tweet/?text=Check%20out%20this%20website!&url=https%3A%2F%2Ftrusting-brown-c4f562.netlify.com${post.fields.slug}%2F&via=HTActive"`}
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="googleplus">
                            <a
                              href={`https://plus.google.com/share?url=https%3A%2F%2Ftrusting-brown-c4f562.netlify.com${post.fields.slug}%2F`}
                            >
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blogpost-content">
                    <header>
                      <div className="submitted">
                        <i className="fa fa-user pr-5" /> by{" "}
                        <Link to="/blog/">
                          {post.frontmatter[`author_${language}`]}
                        </Link>
                      </div>
                    </header>
                    <div
                      className="blogPost-content"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </div>
                  {}
                </div>
              </article>
            </div>
            <RelatedPost
              slug={post.fields.slug}
              language={language}
              tags={post.frontmatter[`tags_${language}`]}
            />
            {/* sidebar end */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

const mapStateToProps = ({ language }) => {
  return { language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
export const query = graphql`
  query($slug: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        tags_en
        author_en
        blog_title_en
        blog_date_en
        tags_vn
        author_vn
        blog_title_vn
        blog_date_vn
      }
    }
  }
`
