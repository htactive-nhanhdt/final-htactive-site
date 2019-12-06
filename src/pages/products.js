import React, {useEffect} from "react"
import {connect} from "react-redux"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Portfolio/BannerParallax"
import MainPortfolio from "../components/Portfolio/MainPortfolio"

const PortfolioPage = ({language, data, color, changeActive, changeSlug}) => {
  const rawData= data.allMarkdownRemark.edges.map(item=> item.node.frontmatter);

  const bannerData= rawData.filter((item)=>item.banner_portfolio!==null)
  const cardPortfolioData= rawData.filter(item=> item.card_portfolio!==null)
  const categoriesData = rawData.filter(item=> item.portfolio_category!==null)

  const propBanner= bannerData.filter(item=> item.banner_portfolio.language===language)[0].banner_portfolio
  const propCardPort= cardPortfolioData.filter(item=>item.card_portfolio.language===language).map(item=>item.card_portfolio)
  const propCategories= categoriesData.filter(item=> item.portfolio_category.language===language).map(item=> item.portfolio_category)

  useEffect(() => {
    changeActive("3")
    changeSlug("/")
    return ;
  })
  
  return (
    <Layout>
      <SEO title="Our Portfolios" />
      <Banner color={color} data={propBanner}/>
      <MainPortfolio categoriesData={propCategories} cardPortfolioData={propCardPort} color={color}/>
    </Layout>
  )
}

const mapStateToProps = ({ language, color }) => {
  return { language, color }
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
)(PortfolioPage)

export const query=graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {regex: "/portfolio/"}}}) {
    edges {
      node {
        frontmatter {
          banner_portfolio {
            banner_img
            banner_leads {
              banner_lead
            }
            banner_title
            language
          }
          card_portfolio {
            cardId
            card_img
            card_lead
            card_slug
            card_title
            language
            tag_card
          }
          portfolio_category {
            category_title
            id
            language
            tag_name
          }
        }
      }
    }
  }
}
`


