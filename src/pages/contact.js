import React, {useEffect} from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { connect } from "react-redux"

const Contact = ({ changeActive, changeSlug }) => {
  useEffect(() => {
    changeActive("5")
    changeSlug("/")
    return ;
  })
 
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: active => dispatch({ type: `ACTIVE_NAVBAR`, active: active }),
    changeSlug: slug => dispatch({ type: `CHANGE_SLUG`, slug: slug }),
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Contact)
