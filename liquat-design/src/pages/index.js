import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const useMainPictures = () => {
  const { photoGuillaume, photoAlice } = useStaticQuery(
    graphql`
      query LiquatPicturesQuery {
        photoGuillaume: file(relativePath: { eq: "photo-guillaume-mercier.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
        photoAlice: file(relativePath: { eq: "photo-alice-foissy2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`
  );

  return { photoGuillaume, photoAlice };
};

const IndexPage = () => {

  const guiJobs = [
    {
      title: "FREELANCE",
      tags: [],
      key: "job_freelance"
    }, {
      title: "> UX DESIGNER",
      tags: ["UX-DESIGN", "PERSUASIVE", "BIG-DATA", "PROJECT-MANAGEMENT"],
      key: "job_ux"
    }, {
      title: "> WEB DEVELOPER",
      tags: ["WEB-DEV", "SPLUNK", "BIG-DATA", "SEO"],
      key: "job_web"
    }, {
      title: "> MANAGER",
      tags: ["PROJECT-MANAGEMENT", "HAPPINESS", "BUSINESS"],
      key: "job_management"
    },
  ];

  const LinkTitle = styled(Link)`
    color: rgba(0, 0, 0, 0.87);
  `

  const LiquatTitle = styled.h1`
    font-family: 'Indie Flower', cursive;
  `

  const jobTitles = guiJobs.map((job) => {

    let urlTags = "";
    job.tags.forEach(function (tag, index) {
      urlTags += index === 0 ? "?" : "&";
      urlTags += "filter=" + tag;
    });

    const link = "/guillaume-mercier/portfolio" + urlTags;

    return (
      <h5 key={job.key}>
        <LinkTitle to={link} className="main-job">{job.title}</LinkTitle>
      </h5>
    );
  });

  const { photoGuillaume, photoAlice } = useMainPictures();

  return (
    <>
      <SEO title="Accueil" />
      <div className="page-content">
        <div className="row">
          <div className="col center-align s12">
            <LiquatTitle>LIQUAT DESIGN</LiquatTitle>
          </div>
        </div>
        <div className="section valign-wrapper">
          <div className="container">
            {/* <!-- Only for mobiles --> */}
            <div id="mobile-about" className="row hide-on-med-and-up">
              <div className="col center-align s12">
                <Link to="/alice-foissy">
                  <Img fluid={photoAlice.childImageSharp.fluid} className="main-pic circle" alt="Alice-Anne Foissy" />
                </Link>
                <h1 className="page-head-title">
                  <LinkTitle to="/alice-foissy">ALICE-ANNE FOISSY</LinkTitle>
                </h1>
                <h5>
                  <LinkTitle to="/alice-foissy/portfolio">FREELANCE</LinkTitle>
                </h5>
                <h5>
                  <LinkTitle to="/alice-foissy/portfolio">> UX DESIGNER</LinkTitle>
                </h5>
                <h5>
                  <LinkTitle to="/alice-foissy/portfolio">> PSYCHOLOGUE</LinkTitle>
                </h5>
                <h5 className="title-location">
                  <i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion
                </h5>
              </div>
            </div>
            <div className="row valign-wrapper">
              <div className="col m8 hide-on-small-only">
                <h1 className="page-head-title">
                  <LinkTitle to="/alice-foissy">ALICE-ANNE FOISSY</LinkTitle>
                </h1>
                <h5>
                  <LinkTitle to="/alice-foissy/portfolio">FREELANCE</LinkTitle>
                </h5>
                <h5>
                  <LinkTitle to="/alice-foissy/portfolio">> UX DESIGNER</LinkTitle>
                </h5>
                <h5>
                  <LinkTitle to="/alice-foissy/portfolio">> PSYCHOLOGUE</LinkTitle>
                </h5>
                <h5 className="title-location">
                  <i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion
                </h5>
              </div>
              {/* <!-- Only for tablets/desktop --> */}
              <div className="col s6 center-align hide-on-small-only">
                <Link to="/alice-foissy">
                  <Img fluid={photoAlice.childImageSharp.fluid} className="main-pic circle" alt="Alice-Anne Foissy" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="section valign-wrapper">
          <div className="container">
            {/* <!-- Only for mobiles --> */}
            <div id="mobile-about" className="row hide-on-med-and-up">
              <div className="col center-align s12">
                <Link to="/guillaume-mercier">
                  <Img fluid={photoGuillaume.childImageSharp.fluid} className="main-pic circle" alt="Guillaume Mercier" />
                </Link>
                <h1 className="page-head-title">
                  <LinkTitle to="/guillaume-mercier">GUILLAUME MERCIER</LinkTitle>
                </h1>
                {jobTitles}
                <h5 className="title-location">
                  <i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion
                </h5>
              </div>
            </div>
            <div className="row valign-wrapper">
              <div className="col m8 hide-on-small-only">
                <h1 className="page-head-title">
                  <LinkTitle to="/guillaume-mercier">GUILLAUME MERCIER</LinkTitle>
                </h1>
                {jobTitles}
                <h5 className="title-location">
                  <i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion
                </h5>
              </div>
              {/* <!-- Only for tablets/desktop --> */}
              <div className="col s6 center-align hide-on-small-only">
                <Link to="/guillaume-mercier">
                  <Img fluid={photoGuillaume.childImageSharp.fluid} className="main-pic circle" alt="Guillaume Mercier" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default props => (
  <Layout>
    <IndexPage {...props}/>
  </Layout>
)