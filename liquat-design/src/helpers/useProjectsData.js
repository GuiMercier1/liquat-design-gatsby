import { useStaticQuery, graphql } from "gatsby"

import cloneDeep from 'lodash/cloneDeep';

const getProjectData = () => {

  const { allDataJson, allFile } = useStaticQuery(
    graphql`
        query ProjectsQuery {
          allDataJson {
            edges {
              node {
                projects {
                  company
                  customer
                  en_longDescription
                  en_shortDescription
                  en_title
                  fr_longDescription
                  fr_shortDescription
                  fr_title
                  id
                  imageSrc
                  opacity
                  tags
                  tasks {
                    en
                    fr
                  }
                  tools
                },
                tags {
                  id
                  name
                },
                tools {
                  id
                  name
                }
              }
            }
          }
          allFile(filter: {relativePath: {regex: "/(projects\/)/"}}) {
            edges {
              node {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
                base
              }
            }
          }
        }`
  );

  const projects = cloneDeep(allDataJson.edges[0].node.projects);
  const tags = cloneDeep(allDataJson.edges[0].node.tags);
  const tools = cloneDeep(allDataJson.edges[0].node.tags);
  const imagesNodes = cloneDeep(allFile.edges);

  addProjectsData(projects, tags, tools, imagesNodes);

  return { projects };
};

function addProjectsData(projects, tags, tools, imagesNodes) {

  projects.forEach(project => {
    project.tags = project.tags.map(tag => tags.find(tagData => tagData.id === tag));
    project.tools = project.tools.map(tool => tools.find(toolData => toolData.id === tool));

    project.image = imagesNodes.find(imageNode => imageNode.node.base === project.imageSrc);
  });
}

export default getProjectData;