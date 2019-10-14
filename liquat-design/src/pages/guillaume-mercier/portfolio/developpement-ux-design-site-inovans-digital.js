import React from "react"

import Layout from "../../../components/layout"
import ArticleLayout from "../../../components/articleLayout"

const Article = props => {

    return (
        <a href={'https://digital.inovans.fr/'} target="_blank" rel="noopener noreferrer">Site de la Digital Factory d'Inovans</a>
    );
}

export default props => (
    <Layout>
        <ArticleLayout projectID="developpement-ux-design-site-inovans-digital">
            <Article {...props} />
        </ArticleLayout>
    </Layout>
)