import { useStaticQuery, graphql } from "gatsby"
import cloneDeep from 'lodash/cloneDeep';

const useTalentData = props => {

  const { dataJson, allFile } = useStaticQuery(
    graphql`
      query TalentsDataQuery {
          dataJson {
              talentData {
                color
                darkColor
                veryDarkColor
                id
                logoInitials
                mail
                homeLink
                contactLink
                fullName
                jobLine
                links {
                  title
                  link
                }
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
                  tools
                  tasks {
                    en
                    fr
                  }
                }
              }
              tools {
                  id
                  name
              }
              tags {
                  id
                  name
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

  const formatedTalentData = computeProjects(dataJson.talentData, allFile.edges, dataJson.tools, dataJson.tags);
  const talentData = formatedTalentData.find(talent => talent.id === props.talent);
  return { talentData };
};

function computeProjects(talentData, images, tools, tags) {

  const imagesNodes = cloneDeep(images);

  const talentDataClone = cloneDeep(talentData);

  talentDataClone.forEach(talent => {

    if (!talent.projects) return;

    talent.projects.forEach(project => {
      project.tags = project.tags.map(tag => tags.find(tagData => tagData.id === tag));
      project.tools = project.tools.map(tool => tools.find(toolData => toolData.id === tool));

      project.image = imagesNodes.find(imageNode => imageNode.node.base === project.imageSrc);
    });
  });

  return talentDataClone;
}

export default useTalentData;
