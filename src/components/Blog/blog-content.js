import React from "react"
import CardBlog from "./blog-card"
import { ModalProvider } from "react-modal-hook"

const BlogContent = ({ posts, language }) => {
  return (
    <ModalProvider>
      <section className="main-container" style={{ marginTop: "10px" }}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-12">
              <div className="masonry-grid row">
                {posts.map((item, index) => (
                  <CardBlog
                    key={index}
                    src={item.node.frontmatter[`thumbnail_${language}`]}
                    postday={item.node.frontmatter[
                      `blog_date_${language}`
                    ].substring(8, 10)}
                    postmonth={item.node.frontmatter[
                      `blog_date_${language}`
                    ].substring(5, 7)}
                    postyear={item.node.frontmatter[
                      `blog_date_${language}`
                    ].substring(0, 4)}
                    cardTitle={item.node.frontmatter[`blog_title_${language}`]}
                    author={item.node.frontmatter[`author_${language}`]}
                    iframe={item.node.frontmatter[`iframe_${language}`]}
                    cardContent={
                      item.node.frontmatter[`blog_description_${language}`]
                    }
                    linkImg={item.node.frontmatter[`thumbnail_${language}`]}
                    linkBlog={item.node.fields.slug}
                  />
                ))}
              </div>
              {/* masonry grid end */}
            </div>
          </div>
        </div>
      </section>
    </ModalProvider>
  )
}
export default BlogContent
