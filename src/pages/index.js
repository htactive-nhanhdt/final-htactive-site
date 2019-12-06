import React, {useEffect} from "react"
import { graphql } from "gatsby"
import Home2nd from "../components/Home/Home2nd/Home2nd"
import Home3rd from "../components/Home/Home3rd/Home3rd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Home/BannerHome/BannerSlider"
import BannerHome from "../components/Home/BannerHome/BannerParallax"
import PageTop from "../components/Home/pageTop"
import Home1st from "../components/Home/Home1st/Home1st"
import { connect } from "react-redux"
import Helmet from "react-helmet"

const IndexPage = ({ data, color, footer, language,changeActive, changeSlug }) => {
  useEffect(() => {
    changeActive('1')
    changeSlug("/")
    return ;
  })

  return (
    <Layout footer={footer} >
      <Helmet></Helmet>
      <SEO title="Home" color={color} />
      <Banner data={data[`slide_${language}`]} language={language}></Banner>
      <PageTop data={data[`lead_${language}`]} language={language} />
      <Home1st data={data[`home1st_${language}`]} color={color} language={language} />
      <Home2nd data={data[`home2nd_${language}`]} color={color} language={language} />
      <BannerHome data={data[`banner_${language}`]} language={language} />
      <Home3rd data={data[`home3rd_${language}`]}  language={language}/>
    </Layout>
  )
}

const mapStateToProps = ({ color, footer, language }) => {
  return { color, footer, language }
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
)(IndexPage)

export const query = graphql`
  query {
    home1st_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        home_1st_en {
          home_1st_des_en
          home_1st_title_en
          home_1st_en_1 {
            home_box_desc_en_1
            home_box_title_en_1
          }
          home_1st_en_2 {
            home_box_desc_en_2
            home_box_title_en_2
          }
          home_1st_en_3 {
            home_box_desc_en_3
            home_box_title_en_3
          }
        }
      }
    }
    home2nd_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        home_2nd_en {
          about_paragraph_en {
            about_img
            about_paragraph_title_en
            about_paragraph_en_1
            about_paragraph_en_2
          }
          home_2nd_desc_en
          home_2nd_title_en
          panel_en_1 {
            home_panel_desc_en_1
            home_panel_title_en_1
          }
          panel_en_2 {
            home_panel_desc_en_2
            home_panel_title_en_2
          }
          panel_en_3 {
            home_panel_desc_en_3
            home_panel_title_en_3
          }
          panel_en_4 {
            home_panel_desc_en_4
            home_panel_title_en_4
          }
        }
      }
    }
    home3rd_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        home_3rd_en {
          home_3rd_desc_en
          home_3rd_title_en
          tab1_en {
            tab_img_en_1
            tab_desc_en_1
            tab_title_en_1
          }
          tab2_en {
            tab_desc_en_2
            tab_img_en_2
            tab_title_en_2
          }
          tab3_en {
            tab_desc_en_3
            tab_img_en_3
            tab_title_en_3
          }
          tab4_en {
            tab_desc_en_4
            tab_img_en_4
            tab_title_en_4
          }
        }
      }
    }
    banner_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        home_banner_en {
          banner_img_en
          home_banner_desc_en
          home_banner_heading_en
        }
      }
    }
    lead_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        lead_en
      }
    }
    menu_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        menu_en
      }
    }
    slide_en: markdownRemark(
      frontmatter: { home_1st_en: { home_1st_des_en: { ne: null } } }
    ) {
      frontmatter {
        slide_en {
          slide_caption1_en
          slide_caption2_en
          slide_caption3_en
          slide_detail1_en
          slide_detail2_en
          slide_detail3_en
          slide_img1_en
          slide_img2_en
          slide_img3_en
        }
      }
    }
    home1st_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        home_1st_vn {
          home_1st_des_vn
          home_1st_title_vn
          home_1st_vn_1 {
            home_box_desc_vn_1
            home_box_title_vn_1
          }
          home_1st_vn_2 {
            home_box_desc_vn_2
            home_box_title_vn_2
          }
          home_1st_vn_3 {
            home_box_desc_vn_3
            home_box_title_vn_3
          }
        }
      }
    }
    home2nd_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        home_2nd_vn {
          about_paragraph_vn {
            about_img
            about_paragraph_title_vn
            about_paragraph_vn_1
            about_paragraph_vn_2
          }
          home_2nd_desc_vn
          home_2nd_title_vn
          panel_vn_1 {
            home_panel_desc_vn_1
            home_panel_title_vn_1
          }
          panel_vn_2 {
            home_panel_desc_vn_2
            home_panel_title_vn_2
          }
          panel_vn_3 {
            home_panel_desc_vn_3
            home_panel_title_vn_3
          }
          panel_vn_4 {
            home_panel_desc_vn_4
            home_panel_title_vn_4
          }
        }
      }
    }
    home3rd_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        home_3rd_vn {
          home_3rd_desc_vn
          home_3rd_title_vn
          tab1_vn {
            tab_img_vn_1
            tab_desc_vn_1
            tab_title_vn_1
          }
          tab2_vn {
            tab_desc_vn_2
            tab_img_vn_2
            tab_title_vn_2
          }
          tab3_vn {
            tab_desc_vn_3
            tab_img_vn_3
            tab_title_vn_3
          }
          tab4_vn {
            tab_desc_vn_4
            tab_img_vn_4
            tab_title_vn_4
          }
        }
      }
    }
    banner_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        home_banner_vn {
          banner_img_vn
          home_banner_desc_vn
          home_banner_heading_vn
        }
      }
    }
    lead_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        lead_vn
      }
    }
    menu_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        menu_vn
      }
    }
    slide_vn: markdownRemark(
      frontmatter: { home_1st_vn: { home_1st_des_vn: { ne: null } } }
    ) {
      frontmatter {
        slide_vn {
          slide_caption1_vn
          slide_caption2_vn
          slide_caption3_vn
          slide_detail1_vn
          slide_detail2_vn
          slide_detail3_vn
          slide_img1_vn
          slide_img2_vn
          slide_img3_vn
        }
      }
    }
  }
`
