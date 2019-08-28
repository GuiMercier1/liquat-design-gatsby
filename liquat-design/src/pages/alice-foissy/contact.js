import React from "react"

import Layout from "../../components/layout"
import ContactForm from "../../components/contactForm"

export default props => (
  <Layout>
    <ContactForm {...props}/>
  </Layout>
)