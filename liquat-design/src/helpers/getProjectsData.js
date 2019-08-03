import { useStaticQuery, graphql } from "gatsby"

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

    return { allDataJson, allFile };
};

export default getProjectData;