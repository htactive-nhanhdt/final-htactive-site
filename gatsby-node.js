const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            card_portfolio {
              cardId
              card_slug
            }
          }
        }
      }
    }
  }
`)
result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  createPage({
    path: node.fields.slug,
    component: path.resolve(`./src/templates/blogPost.js`),
    context: {
      slug: node.fields.slug,
    },
  })
  if(node.frontmatter.card_portfolio!==null){
    createPage({
      path: node.frontmatter.card_portfolio.card_slug,
      component: path.resolve(`./src/templates/portfolioPage.js`),
      context: {
        slug: node.frontmatter.card_portfolio.card_slug,
      },
    })
  }
})
}