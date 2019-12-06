import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const RelatedPost = ({ tags, slug, language }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allPost: allMarkdownRemark(
          filter: { fields: { slug: { regex: "/blog/" } } }
        ) {
          edges {
            node {
              frontmatter {
                tags_en
                blog_description_en
                blog_title_en
                tags_vn
                blog_description_vn
                blog_title_vn
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  let relatedPosts = data.allPost.edges
    .filter(
      item =>
        tags &&
        item.node.frontmatter[`tags_${language}`] &&
        item.node.frontmatter[`tags_${language}`].indexOf(tags[0]) !== -1 &&
        item.node.fields.slug !== slug
    )
    .slice(0, 2)

  relatedPosts =
    relatedPosts.length === 0 
    ? data.allPost.edges.slice(0, 2) 
    : relatedPosts
  const relatedCard = relatedPosts.map(({ node },index) => (
    <div className="image-box" key={index}>
      <div className="image-box-body">
        <h3 className="title">
          <Link to={node.fields.slug}>
            {node.frontmatter[`blog_title_${language}`]}
          </Link>
        </h3>
        <p>{node.frontmatter[`blog_description_${language}`]}</p>
        <Link to={node.fields.slug} className="link">
          <span>Read more</span>
        </Link>
      </div>
    </div>
  ))
  return (
    <aside className="col-lg-3 col-md-offset-1">
      <div className="sidebar">
        <div className="block clearfix">
          <h3 className="title">Related posts</h3>
          <div className="separator" />
          {relatedCard}
        </div>
      </div>
    </aside>
  )
}

export default RelatedPost
