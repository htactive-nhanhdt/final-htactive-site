import React, {useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContent from "../components/Blog/blog-content"
import { connect } from "react-redux"
const Blog = ({ data, language, changeActive, changeSlug }) => {
  useEffect(() => {
    changeActive("4")
    changeSlug("/")
    return ;
  })
  const posts = data[`blog_${language}`].edges
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogContent posts={posts} language={language} />
    </Layout>
  )
}
export const query = graphql`
  query {
    blog_en: allMarkdownRemark(
      filter: { frontmatter: { author_en: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            author_en
            blog_date_en
            blog_title_en
            blog_description_en
            thumbnail_en
            iframe_en
          }
          fields {
            slug
          }
        }
      }
    }
    blog_vn: allMarkdownRemark(
      filter: { frontmatter: { author_vn: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            author_vn
            blog_date_vn
            blog_title_vn
            blog_description_vn
            thumbnail_vn
            iframe_vn
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
const mapStateToProps = ({ language }) => {
  return { language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
    changeSlug: slug => dispatch({ type: `CHANGE_SLUG`, slug: slug }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
