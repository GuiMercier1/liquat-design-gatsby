import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Topics = () => (
  <Layout>
    <SEO title="Inspirations" />
    <h1>Hi from the topics</h1>
    <p>Welcome to page topics</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Topics
