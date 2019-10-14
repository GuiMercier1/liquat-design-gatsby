import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (props) => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>La page n'existe pas, ce chemin est - hélas - sans issue.</p>
  </>
)

export default props => (
  <Layout>
    <NotFoundPage {...props} />
  </Layout>
)
