import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectCard from "../components/projectCard"

import parallaxPicture from "../images/alice-foissy/parallax_bg3.jpg"

import orangePicture from "../images/alice-foissy/companies/orange.png"
import armyPicture from "../images/alice-foissy/companies/armee_de_terre.png"
import ctvPicture from "../images/alice-foissy/companies/CTV.png"
import hdgPicture from "../images/alice-foissy/companies/HDG.jpg"
import airFrancePicture from "../images/alice-foissy/companies/air_france.png"

import '@fortawesome/fontawesome-free/css/all.min.css'

if (typeof window !== 'undefined') {
  require('materialize-css/dist/js/materialize.min.js')
}

const useMainPicture = () => {
  const { mainPhoto } = useStaticQuery(
    graphql`
      query AliceFoissyQuery {
        mainPhoto: file(relativePath: { eq: "photo-alice-foissy2.jpg" }) {
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

const AliceFoissy = props => {

  const jobs = [
    {
      title: "FREELANCE",
      tags: [],
      key: "job_freelance"
    }, {
      title: "> UX DESIGNER",
      tags: [],
      key: "job_ux"
    }, {
      title: "> PSYCHOLOGUE",
      tags: [],
      key: "job_web"
    }
  ];

  const skills = [
    {
      title: "Analyse des besoins des utilisateurs",
      description: <>Vous voulez proposer des outils adaptés à votre public, pour cela je vais sur le terrain pour connaître les utilisateurs, leurs tâches et leur environnement.</>,
      icon: <i className="fas fa-microscope"></i>,
      key: "skill_needs"
    }, {
      title: "Co-création avec les utilisateurs",
      description: <>Ateliers de brainstorming pour générer des idées de conception, définir l'architecture d'un site ou encore création de prototype papier. Les utilisateurs sont vos alliés !</>,
      icon: <i className="fas fa-users"></i>,
      key: "skill_codesign"
    }, {
      title: "Travail en équipes multidisciplinaires",
      description: <>Prendre en compte les contraintes de temps, de budget, les contraintes techniques… je travaille main dans la main avec tous les acteurs du projet pour proposer des solutions réalistes et non pas une licorne à paillettes <i className="far fa-laugh-beam"></i></>,
      icon: <i className="far fa-handshake"></i>,
      key: "skill_team"
    }, {
      title: "Background en psychologie",
      description: <>Mon master en psychologie me permet de recueillir des informations en influençant au minimum les utilisateurs. Mes connaissances dans la prise de décision, l'attention ou encore le traitement de l'information soutiennent mes propositions d'interfaces.</>,
      icon: <i className="fas fa-graduation-cap"></i>,
      key: "skill_psycho"
    }, {
      title: "Conception de maquettes",
      description: <>Prototype papier ou informatique pour traduire les besoins en interfaces. Elles me servent à tester les concepts avant leur développement pour vous éviter de perdre du temps et de l'argent, et ça c'est important pour vous <i className="far fa-smile"></i></>,
      icon: <i className="material-icons">&#xe326;</i>,
      key: "skill_mockups"
    }, {
      title: "Agilité",
      description: <>L'essence même de l'UX Design ! Travailler en sprints courts pour confronter les concepts choisis avec la réalité du terrain, et vérifier qu'on ne fait pas fausse route.</>,
      icon: <i className="fas fa-infinity"></i>,
      key: "skill_agility"
    },
  ];

  const companiesPictures = [{
    src: orangePicture,
    alt: "Orange",
    key: "picture_orange"
  }, {
    src: armyPicture,
    alt: "Armée de Terre",
    key: "picture_army"
  }, {
    src: ctvPicture,
    alt: "CToutVert",
    key: "picture_ctoutvert"
  }, {
    src: hdgPicture,
    alt: "Human Design Group",
    key: "picture_hdg"
  }, {
    src: airFrancePicture,
    alt: "Air France",
    key: "picture_af"
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

    const link = "/alice-foissy/portfolio" + urlTags;

    return (
      <h5 key={job.key}>
        <b><Link to={link} className="main-job">{job.title}</Link></b>
      </h5>
    );
  });

  const skillsBoxes = skills.map((skill) => {
    return (
      <div className="col s12 m4 center-align skill-text-col" key={skill.key}>
        <div className="skill-content">
          <div className="skill-icon">{skill.icon}</div>
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

  const talentData = props.talentData;
  const projects = talentData.projects;

  // We only display 3 cards
  const projectsToDisplay = projects.slice(0, 3).map((project) => {

    //TODO ADD RANDOM
    return <ProjectCard key={"project_" + project.id} project={project} talentData={props.talentData}></ProjectCard>;
  });

  const { mainPhoto } = useMainPicture();

  return (
    <>
      <SEO title="Alice-Anne Foissy - Psychologue | UX Designer" />
      <div className="section valign-wrapper about-section">
        <div className="container">
          {/* <!-- Only for mobiles --> */}
          <div id="mobile-about" className="row hide-on-med-and-up">
            <div className="col center-align s12">
              <Img fluid={mainPhoto.childImageSharp.fluid} className="main-pic circle" alt="Alice-Anne Foissy" />
              <h1 className="page-head-title">ALICE-ANNE FOISSY</h1>
              {jobTitles}
              <h5 className="title-location">
                <b><i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion</b>
              </h5>
            </div>
          </div>
          <div className="row valign-wrapper">
            <div className="col m8 hide-on-small-only">
              <h1 className="page-head-title">ALICE-ANNE FOISSY</h1>
              {jobTitles}
              <h5 className="title-location">
                <b><i className="material-icons left">&#xe0c8;</i>Saint Paul, La Réunion</b>
              </h5>
              {/* <!--<p className="flow-text">Vous souhaitez concevoir un produit innovant et adapté à vos utilisateurs ?
            Développer des applications web modernes et performantes ? Faire évoluer votre
            entreprise vers un format plus proche des collaborateurs ?
            Alors n'hésitez pas à me contacter, nous allons faire de grandes choses ensemble :)
                    </p>--> */}
            </div>
            {/* <!-- Only for tablets/desktop --> */}
            <div className="col s6 center-align hide-on-small-only">
              <Img fluid={mainPhoto.childImageSharp.fluid} className="main-pic circle" alt="Alice-Anne Foissy" />
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
                Vous souhaitez concevoir une application métier, un site grand public, l'interface d'une borne de paiement, je suis là pour garantir une expérience agréable à vos utilisateurs, tout en leur permettant d'accomplir leur tâche d'une manière simple et intuitive.
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
              <Link to="/alice-foissy/portfolio" className="waves-effect waves-light btn-large all-projects-button">
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
    </>)
}

export default props => (
  <Layout>
    <AliceFoissy {...props} />
  </Layout>
)
