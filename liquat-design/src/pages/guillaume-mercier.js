import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectCard from "../components/projectCard"
import useProjectsData from "../helpers/useProjectsData"

import parallaxPicture from "../images/parallax_bg_very_light.jpg"

import airbusPicture from "../images/companies/airbus.png"
import armyPicture from "../images/companies/armee_de_terre.png"
import capgeminiPicture from "../images/companies/capgemini.png"
import canalPicture from "../images/companies/canalplus.png"
import inovansPicture from "../images/companies/inovans.png"
import lfbPicture from "../images/companies/lfb.png"

const getParallaxImage = () => {
  const { mainPhoto } = useStaticQuery(
    graphql`
      query ParallaxQuery {
        mainPhoto: file(relativePath: { eq: "photo-guillaume-mercier.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`
  );

  return { mainPhoto };
};

function GuillaumeMercier() {

  const jobs = [
    {
      title: "FREELANCE",
      tags: [],
      key: "job_freelance"
    }, {
      title: "> UX DESIGNER",
      tags: ["UX-DESIGN","PERSUASIVE", "BIG-DATA", "PROJECT-MANAGEMENT"],
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

  const skills = [
    {
      title: "Développeur Web",
      description: <>De la conception à son développement, travaillons ensemble pour créer un site web à votre image, grâce aux dernières technologies (React, Angular, Gatsby, JSS, ...)</>,
      icon: <>&#xe326;</>,
      key: "skill_dev_web"
    }, {
      title: "UX Designer",
      description: <><p>Je mets ma créativité à l'écoute de vos utilisateurs pour concevoir des logiciels utiles, utilisables et attractifs.</p><p>Pour en savoir plus sur l'UX Design :&nbsp;<a href='https://theblog.adobe.com/what-does-a-ux-designer-actually-do/' target='_blank' rel="noopener noreferrer">cliquez ici.</a></p></>,
      icon: "how_to_reg",
      key: "skill_ux"
    }, {
      title: "Chef de projet",
      description: <>Je gère pour vous les coûts, les délais et la qualité de votre projet tout en assurant la communication interne et le lien entre les différents acteurs.</>,
      icon: <>&#xe7ef;</>,
      key: "skill_lead"
    }, {
      title: "Product Owner",
      description: <>Elaborons ensemble une stratégie autour de votre produit, et je veille à sa réalisation auprès du client et des équipes de développement.</>,
      icon: <>&#xe8cc;</>,
      key: "skill_po"
    }, {
      title: "Développeur Splunk",
      description: <>Dépassons les limites de Splunk pour créer des dashboards dynamiques qui présentent des données utiles et utilisables en suivant les préceptes de la \"data visualization\".</>,
      icon: <>&#xe315;</>,
      key: "skill_splunk"
    }, {
      title: "Booster d'équipe",
      description: <>Le travail n'a pas à être pénible ! Renforçons ensemble la motivation de vos équipes pour créer un environnement dans lequel nous pourrons tous révéler notre plein potentiel.</>,
      icon: <>&#xe1a3;</>,
      key: "skill_team"
    },
  ];

  const companiesPictures = [{
    src: canalPicture,
    alt: "Canal +",
    key: "picture_canal"
  }, {
    src: armyPicture,
    alt: "Armée de Terre",
    key: "picture_army"
  }, {
    src: capgeminiPicture,
    alt: "Capgemini",
    key: "picture_capgemini"
  }, {
    src: airbusPicture,
    alt: "Airbus",
    key: "picture_airbus"
  }, {
    src: inovansPicture,
    alt: "Inovans",
    key: "picture_inovans"
  }, {
    src: lfbPicture,
    alt: "LFB",
    key: "picture_lfb"
  }];

  useEffect(() => {
    var options = {};
    let parallaxElement = document.querySelectorAll('.parallax');
    window.M.Parallax.init(parallaxElement, options);
  });

  const jobTitles = jobs.map((job) => {

    let urlTags = "";
    job.tags.forEach(function (tag, index) {
      urlTags += index === 0 ? "?" : "&";
      urlTags += "filter=" + tag;
    });

    const link = "/guillaume-mercier/portfolio" + urlTags;

    return (
      <h5 key={job.key}>
        <Link to={link} className="main-job">{job.title}</Link>
      </h5>
    );
  });

  const skillsBoxes = skills.map((skill) => {
    return (
      <div className="col s12 m4 center-align skill-text-col" key={skill.key}>
        <div className="skill-content">
          <div className="skill-icon">
            <i className="material-icons">{skill.icon}</i>
          </div>
          <p className="skill-title">{skill.title}</p>
          <div className="skill-text">
            {skill.description}
          </div>
        </div>
      </div>
    );
  });

  const companies = companiesPictures.map((company) => {
    return (
      <div key={company.key} className="col s6 m4 ref valign-wrapper">
        <img src={company.src} alt={company.alt} />
      </div>
    )
  });

  const { projects } = useProjectsData();

  // We only display 3 cards
  const projectsToDisplay = projects.slice(0, 3).map((project) => {

    //TODO ADD RANDOM
    console.log(project);

    return <ProjectCard key={"project_" + project.id} project={project}></ProjectCard>;
  });

  const { mainPhoto } = getParallaxImage();

  return (
    <Layout>
      <SEO title="Accueil" />
      <div className="section valign-wrapper about-section">
        <div className="container">
          {/* <!-- Only for mobiles --> */}
          <div id="mobile-about" className="row hide-on-med-and-up">
            <div className="col center-align s12">
              <Img fluid={mainPhoto.childImageSharp.fluid} className="main-pic circle" alt="Guillaume Mercier" />
              <h1 className="page-head-title">GUILLAUME MERCIER</h1>
              {jobTitles}
              <h5 className="title-location">
                <i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion</h5>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col m8 hide-on-small-only">
              <h1 className="page-head-title">GUILLAUME MERCIER</h1>
              {jobTitles}
              <h5 className="title-location">
                <i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion
                </h5>
              {/* <!--<p className="flow-text">Vous souhaitez concevoir un produit innovant et adapté à vos utilisateurs ?
            Développer des applications web modernes et performantes ? Faire évoluer votre
            entreprise vers un format plus proche des collaborateurs ?
            Alors n'hésitez pas à me contacter, nous allons faire de grandes choses ensemble :)
                    </p>--> */}
            </div>
            {/* <!-- Only for tablets/desktop --> */}
            <div className="col s6 center-align hide-on-small-only">
              <Img fluid={mainPhoto.childImageSharp.fluid} className="main-pic circle" alt="Guillaume Mercier" />
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container hide-on-med-and-up mobile-parallax">
        <div className="parallax">
          <img className="parallax-img" src={parallaxPicture} alt="Carnet et stylos - Crédits à picjumbo.com de Pexels" />
        </div>
      </div>

      <div className="parallax-container hide-on-small-only screen-parallax">
        <div className="parallax">
          <img className="parallax-img" src={parallaxPicture} alt="Carnet et stylos - Crédits à picjumbo.com de Pexels" />
        </div>
      </div>

      <div id="skills-section" className="section valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h3 className="colored-title">Compétences</h3>
              <p className="skill-intro">
                Avec plus de 5 ans d'expériences dans l'univers du digital, je peux assister vos projets, vos clients et vos utilisateurs de plusieurs manières :
                </p>
            </div>
          </div>
          <div className="row skill-row">
            {skillsBoxes}
          </div>
        </div>
      </div>

      <div className="parallax-container hide-on-med-and-up mobile-parallax">
        <div className="parallax">
          <img className="parallax-img" src={parallaxPicture} alt="Carnet et stylos - Crédits à picjumbo.com de Pexels" />
        </div>
      </div>

      <div className="parallax-container hide-on-small-only screen-parallax">
        <div className="parallax">
          <img className="parallax-img" src={parallaxPicture} alt="Carnet et stylos - Crédits à picjumbo.com de Pexels" />
        </div>
      </div>

      <div id="portfolio-section" className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h3 className="colored-title">Portfolio</h3>
            </div>
          </div>
          <div className="row flex">
            {projectsToDisplay}
          </div>
          <div className="row">
            <div className="col s12 center">
              <Link to="/guillaume-mercier/portfolio" className="waves-effect waves-light btn-large all-projects-button">
                <i className="material-icons left">web</i><span>Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container hide-on-med-and-up mobile-parallax">
        <div className="parallax">
          <img className="parallax-img" src={parallaxPicture} alt="Carnet et stylos - Crédits à picjumbo.com de Pexels" />
        </div>
      </div>

      <div className="parallax-container hide-on-small-only screen-parallax">
        <div className="parallax">
          <img className="parallax-img" src={parallaxPicture} alt="Carnet et stylos - Crédits à picjumbo.com de Pexels" />
        </div>
      </div>

      <div className="section" id="references-section">
        <div className="container">
          <div className="row">
            <div className="col s12 center-align">
              <h3 className="colored-title">Quelques collaborations !</h3>
            </div>
          </div>
          <div className="row" id="references-container">
            {companies}
          </div>
        </div>
      </div>
    </Layout>)
}

export default GuillaumeMercier
