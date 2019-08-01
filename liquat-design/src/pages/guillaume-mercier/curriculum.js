import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Curriculum = () => (
  <Layout>
    <SEO title="Curriculum" />
    <h1>Hi from the Curriculum</h1>
    <p>Welcome to page Curriculum</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Curriculum
