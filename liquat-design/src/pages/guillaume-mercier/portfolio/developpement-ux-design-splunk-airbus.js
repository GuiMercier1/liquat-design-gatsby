import React from "react"

import Layout from "../../../components/layout"
import ArticleLayout from "../../../components/articleLayout"

const Article = props => {

    return (
        <>
            <p>
                Splunk a écrit un article et réalisé une vidéo en partenariat avec Airbus, où on voit les dashboards (carte du Monde, liste avec infos au survol, ...) que j'ai conçus et développés via le Splunk Web Framework.</p>
            <p>
                Le lien de l'article : <a href={'https://www.splunk.com/blog/2019/09/19/turning-data-into-doing-at-airbus.html'} target="_blank" rel="noopener noreferrer">Site de Lead Catalog</a>
            </p>
            <p>La vidéo : </p>
            <iframe title="Présentation de l'app Splunk faite pour Airbus" width="560" height="315" src="https://www.youtube.com/embed/4bHHPmwV2Sg" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    );
}

export default props => (
    <Layout>
        <ArticleLayout projectID="developpement-ux-design-splunk-airbus">
            <Article {...props} />
        </ArticleLayout>
    </Layout>
)