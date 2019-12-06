import React, { useEffect } from "react"
import { connect } from "react-redux"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Banner from "../components/Services/BannerParallax"
import MainServices from "../components/Services/MainServices"

const Services = ({ language, changeActive, changeSlug, data }) => {
  const rawData = data.allMarkdownRemark.edges.map(
    item => item.node.frontmatter
  )

  const bannerData = rawData.filter(item => item.banner_services !== null)
  const cardServiceData = rawData.filter(item => item.card_services !== null)
  const categoriesData = rawData.filter(item => item.service_category !== null)

  const propBanner = bannerData.filter(
    item => item.banner_services.language === language
  )[0].banner_services
  const propCard = cardServiceData
    .filter(item => item.card_services.language === language)
    .map(item => item.card_services)
  const propCategories = categoriesData
    .filter(item => item.service_category.language === language)
    .map(item => item.service_category)

  useEffect(() => {
    changeActive("2")
    changeSlug("/")
    return
  })

  return (
    <Layout>
      <SEO title="Services" />
      <Banner propBanner={propBanner}/>
      <MainServices propCard={propCard} propCategories={propCategories} />
    </Layout>
  )
}
const mapStateToProps = ({ language }) => {
  return { language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
    changeSlug: slug => dispatch({ type: `CHANGE_SLUG`, slug: slug }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Services)

export const query = graphql`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/services/" } } }) {
      edges {
        node {
          frontmatter {
            banner_services {
              banner_img
              banner_lead
              banner_title
              language
            }
            card_services {
              card_img
              card_lead
              card_title
              language
              tag_card
            }
            service_category {
              category_lead
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
