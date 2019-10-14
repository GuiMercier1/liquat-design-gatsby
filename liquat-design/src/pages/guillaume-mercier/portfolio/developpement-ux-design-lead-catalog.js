import React from "react"

import Layout from "../../../components/layout"
import ArticleLayout from "../../../components/articleLayout"

const Article = props => {

    return (
        <a href={'https://sycomore-tech.com/nos-solutions/lead-catalog/'} target="_blank" rel="noopener noreferrer">Site de Lead Catalog</a>
    );
}

export default props => (
    <Layout>
        <ArticleLayout projectID="developpement-ux-design-lead-catalog">
            <Article {...props} />
        </ArticleLayout>
    </Layout>
)