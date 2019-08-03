import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectCard from "../../components/projectCard"

import getProjectsData from "../../helpers/getProjectsData"

// http://localhost:8000/___graphql

function Portfolio() {

  const { allDataJson, allFile } = getProjectsData();

  return (

    <Layout>
      <SEO title="Portfolio" />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="page-head-sub-title colored-title">
                <span>Portfolio ({computeProjectAmount(allDataJson.edges[0].node.projects)})</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div id="filter-container"></div>
            </div>
          </div>
          <div className="row flex">
            {buildProjectList({ allDataJson, allFile })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio;

function computeProjectAmount(projects) {
  return projects.length;
}

function buildProjectList({ allDataJson, allFile }) {

  const projects = allDataJson.edges[0].node.projects;
  const imagesNodes = allFile.edges;

  return projects.map((project) => {

    // We find the correct image
    const image = imagesNodes.find(function (imageNode) {
      return imageNode.node.base === project.imageSrc
    });

    return (
      <ProjectCard key={"project_" + project.id} project={project} image={image}></ProjectCard>
    );
  });
}
