import React from "react"

import Layout from "../../../components/layout"
import ArticleLayout from "../../../components/articleLayout"

const Article = props => {

    return (
        <></>
    );
}

export default props => (
    <Layout>
        <ArticleLayout projectID="ux-design-icare-gestion-consommation-energetique">
            <Article {...props} />
        </ArticleLayout>
    </Layout>
)