import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Timeline from "../../components/timeline"

class Experiences extends React.Component {

  constructor(props) {
    super(props);

    this.experiences = [{
      title: "Freelance",
      date: "Mai 2019 - Présent",
      description: (<>
        <p>
          Conseil en transformation digitale, développement web, UX Design, Management, AMOA.
        </p>
        <p>
          <a href='./contact' target='_blank' rel="noopener noreferrer">Contactez-moi</a> pour discuter de vos projets !
        </p>
      </>),
      key: "job_freelance2"
    }, {
      title: "Dev. Splunk",
      date: "Mai 2019 - Présent",
      description: <>Développement en freelance de dashboards Splunk personnalisés en JavaScript pour Canal +, Métro et Idnomic.</>,
      key: "job_splunk"
    }, {
      title: "Inovans",
      date: "Sept. 2017 - Jan. 2019",
      description: (<>
        <ul>
          <li>UX design et développement de dashboards Splunk pour Airbus</li>
          <li>Écriture et présentation d'une formation Splunk</li>
          <li>Gestion du bien-être au travail</li>
          <li>UX et gestion de projets internes pour Inovans</li>
        </ul>
      </>),
      key: "job_inovans"
    }, {
      title: "\"Au Bureau\"",
      date: "Août. 2018 - Sept. 2018",
      description: <>Chef de rang et serveur dans un bar-restaurant</>,
      key: "job_aubureau"
    }, {
      title: "Voyage",
      date: "Déc. 2016 - Juillet. 2017",
      description: <>Voyage en sac-à-dos en Asie du Sud-Est et à La Réunion pour découvrir et se découvrir :)</>,
      key: "job_trip"
    }, {
      title: "Sycomore T.",
      date: "Oct. 2015 - Nov. 2016",
      description: <>UX Design et Web dev :
      <ul>
          <li>Appli d’analyse et de visualisation de données scientifiques</li>
          <li>Appli de catalogage dynamique des fichiers d’une entreprise</li>
          <li>Appli de gestion des échantillons d’un laboratoire</li>
        </ul>
      </>,
      key: "job_syco"
    }, {
      title: "Capgemini",
      date: "Juin 2015 - Oct. 2015",
      description: <>UX Design et Web dev :
      <ul>
          <li>Conception d'un outil de saisie d'informations et de négociation pour les marchés internationaux.</li>
          <li>Conception d'une application de gestion et de consultation des doctrines de l'Armée</li>
          <li>Conception et dev d'une appli de communication avec un robot spatial</li>
        </ul>
      </>,
      key: "job_capge"
    }, {
      title: "Freelance",
      date: "Nov. 2014 - Juin 2015",
      description: <>UX Design et Web dev : <ul>
        <li>Appli d’analyse et de visualisation de données scientifiques</li>
        <li>Appli de catalogage dynamique des fichiers d’une entreprise</li>
        <li>Appli de gestion des échantillons d’un laboratoire</li>
      </ul>
      </>,
      key: "job_freelance1"
    }, {
      title: "Efficiencia",
      date: "Sept. 2013 - Sept. 2014",
      description: <>
        <ul>
          <li>Conception d'un serious game pour mieux gérer la consommation énergétique des  bâtiments.</li>
          <li>Conception d'un logiciel de saisie thermique</li>
          <li>Conception et développement d'un outil Web pour visualiser les prévisions de consommation énergétique des bâtiments.</li>
        </ul>
      </>,
      key: "job_efficiencia"
    }, {
      title: "IntuiFace",
      date: "Mai 2013 - Août 2013",
      description: <>Développement de composants graphiques multi-touch et implémentation d'un moteur physique en HTML5</>,
      key: "job_intuiface"
    }, {
      title: "Upsilon",
      date: "Nov. 2012 - Fév. 2013",
      description: <>Développement d'un éditeur d'images Web et d'un éditeur de texte in-line</>,
      key: "job_upsilon"
    }, {
      title: "Millegen",
      date: "Juil. 2012 - Août 2012",
      description: <>Développement d'un outil représentant les interactions entre les fichiers d'une plate-forme d'applications de bio-informatique</>,
      key: "job_millegen"
    }
    ];

    this.studies = [
      {
        title: "Master IHM",
        date: "2011 - 2013",
        description: (<>
          <p>UX Design, Psychologie cognitive, Architecture de l'information, Data visualisation, Développement d'interfaces, Management de projets, Agilité</p>
          <p>ENAC / Paul Sabatier, Toulouse</p>
        </>),
        key: "study_ihm"
      }, {
        title: "Licence Informatique",
        date: "2010 - 2011",
        description: (<>
          <p>Développement (Java, Web, Assembleur, Camel, ...), Gestion de projet, Architecture logicielle</p>
          <p>Paul Sabatier, Toulouse</p>
        </>),
        key: "study_computer"
      }, {
        title: "Maîtrise de Maths",
        date: "2005 - 2010",
        description: (<>
          <p>Mathématiques appliquées à l'Enseignement, Mathématiques fondamentales, Admissible au CAPES</p>
          <p>Paul Sabatier, Toulouse</p>
        </>),
        key: "study_maths"
      }
    ]
  }

  render() {

    return (
      <>
        <SEO title="Experiences" />
        <div className="section">
          <div className="container">
            <div className="row curriculum-title no-bottom">
              <h1 className="page-head-sub-title colored-title center-align">Expériences</h1>
            </div>
            <div className="row">
              <div className="col s12 center">
                <a className="waves-effect waves-light btn colored-button"
                  href="../../files/CV_Guillaume_Mercier.pdf" download>
                  <i className="material-icons left">cloud_download</i><span>Mon CV (PDF)</span>
                </a>
              </div>
            </div>
            <div className="row">
              <Timeline elements={this.experiences} alternate={true}></Timeline>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row curriculum-title no-bottom">
              <h2 className="colored-title center-align">Etudes</h2>
            </div>
            <div className="row">
              <Timeline elements={this.studies}></Timeline>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default props => (
  <Layout>
    <Experiences {...props}/>
  </Layout>
)
