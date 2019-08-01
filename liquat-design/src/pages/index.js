import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MyP = styled.p`
  color:red;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <MyP>Welcome to your new Gatsby site.</MyP>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/guillaume-mercier/">Go to Guillaume Mercier</Link>
    <Link to="/guillaume-mercier/portfolio/">Go to page Portfolio</Link>
    <Link to="/guillaume-mercier/portfolio/article-1">Go to page Article1</Link>
    <Link to="/guillaume-mercier/contact/">Go to page Contact</Link>
  </Layout>
)

export default IndexPage
