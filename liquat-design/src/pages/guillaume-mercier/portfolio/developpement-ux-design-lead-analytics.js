import React from "react"

import Layout from "../../../components/layout"
import ArticleLayout from "../../../components/articleLayout"

const Article = props => {

    return (
        <a href={'http://sycomore-tech.com/nos-solutions/lead-analytics/'} target="_blank" rel="noopener noreferrer">Site de Lead Analytics</a>
    );
}

export default props => (
    <Layout>
        <ArticleLayout projectID="developpement-ux-design-lead-analytics">
            <Article {...props} />
        </ArticleLayout>
    </Layout>
)