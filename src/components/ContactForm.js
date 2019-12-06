import React from "react"
import GoogleMap from "../components/GoogleMap/GoogleMap"
import { connect } from "react-redux"
import { graphql, useStaticQuery } from "gatsby"
const ContactForm = ({ language }) => {
  const data = useStaticQuery(
    graphql`
      query {
        contact_en: allMarkdownRemark(
          filter: {
            frontmatter: { contact_title_en: { ne: null } }
            fields: { slug: { regex: "/contact/" } }
          }
        ) {
          edges {
            node {
              frontmatter {
                contact_description_en
                contact_title_en
                contact_date_en
                label_1_en
                label_2_en
                label_3_en
                label_4_en
                value_1_en
                value_2_en
                value_3_en
                value_4_en
                address_en
                email_en
                phone_en
                skype_en
                submit_en
                value_1_en
                value_2_en
                value_3_en
                value_4_en
              }
            }
          }
        }
        contact_vn: allMarkdownRemark(
          filter: {
            frontmatter: { contact_title_vn: { ne: null } }
            fields: { slug: { regex: "/contact/" } }
          }
        ) {
          edges {
            node {
              frontmatter {
                contact_description_vn
                contact_title_vn
                contact_date_vn
                label_1_vn
                label_2_vn
                label_3_vn
                label_4_vn
                value_1_vn
                value_2_vn
                value_3_vn
                value_4_vn
                address_vn
                email_vn
                phone_vn
                skype_vn
                submit_vn
                value_1_vn
                value_2_vn
                value_3_vn
                value_4_vn
              }
            }
          }
        }
      }
    `
  )
  const contact = data[`contact_${language}`].edges[0].node.frontmatter
 

  return (
    <React.Fragment>
      <GoogleMap />
      <div className="container">
        <div>
          <h1 className="page-title">
            <br />
            {contact[`contact_title_${language}`]}
          </h1>
          <aside className="col-sm-12 col-lg-4 col-lg-push-8  ">
            <div className="sidebar">
              <div className="side vertical-divider-left">
                <h2 className="title">
                  <strong>HT ACTIVE</strong>
                </h2>
                <ul className="list">
                  <li>
                    <strong />
                  </li>
                  <li>
                    <i className="fa fa-home pr-10" />
                    <abbr title="Address" />
                    {contact[`address_${language}`]}
                  </li>
                  <li>
                    <i className="fa fa-phone pr-10" />
                    <abbr title="Phone" />
                    {contact[`phone_${language}`]}
                  </li>
                  <li>
                    <i className="fa fa-skype pr-10" />
                    <abbr title="Skype" />
                    {contact[`skype_${language}`]}
                  </li>
                  <li>
                    <i className="fa fa-envelope pr-10" />
                    <a href="mailto:services@htactive.com">
                      {contact[`email_${language}`]}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <div className="main col-sm-12 col-lg-8 col-lg-pull-4 ">
            <p>{contact[`contact_description_${language}`]}</p>
            <div className="alert alert-success hidden" id="MessageSent">
              We have received your message, we will contact you very soon.
            </div>
            <div className="alert alert-danger hidden" id="MessageNotSent">
              Oops! Something went wrong please refresh the page and try again.
            </div>
            <div className="contact-form">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group has-feedback">
                  <label htmlFor="name">
                    {contact[`label_1_${language}`]}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder={contact[`value_1_${language}`]}
                  />
                  <i className="fa fa-user form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="email">{contact[`label_2_${language}`]}</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder={contact[`value_2_${language}`]}
                  />
                  <i className="fa fa-envelope form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="subject">{contact[`label_3_${language}`]}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder={contact[`value_3_${language}`]}
                  />
                  <i className="fa fa-navicon form-control-feedback" />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="message">{contact[`label_4_${language}`]}</label>
                  <textarea
                    className="form-control"
                    rows={6}
                    id="message"
                    name="message"
                    placeholder={contact[`value_4_${language}`]}
                    defaultValue={""}
                  />
                  <i className="fa fa-pencil form-control-feedback" />
                </div>
                <input
                  type="submit"
                  className="submit-button btn btn-default"
                  value={contact[`submit_${language}`]}
                  data-loading="<i class='fa fa-spinner fa-spin fa-3x fa-fw'></i> SENDING..."
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ language }) => {
  return { language }
}
export default connect(
  mapStateToProps,
  null
)(ContactForm)