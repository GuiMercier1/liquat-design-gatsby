import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const Article1 = () => (
  <Layout>
    <SEO title="Article1" />
    <h1>Hi from the Article1</h1>
    <p>Welcome to page Article1</p>
    <Link to="/">Go back to the Article1</Link>
  </Layout>
)

export default Article1
