import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Timeline from "../../components/timeline"

class Experiences extends React.Component {

  constructor(props) {
    super(props);

    this.experiences = [{
      title: "Freelance",
      date: "Août 2019 - Présent",
      description: (<>
        Contactez-moi pour discuter de vos projets.
      </>),
      key: "job_freelance"
    }, {
      title: "CToutVert",
      date: "Mai 2018 - Déc. 2018",
      description: <ul>
        <li>Amélioration de l’expérience utilisateur sur le logiciel d’administration des campings.</li>
        <li>Refonte du logiciel de gestion des réservations par téléphone</li>
        <li>Conception d’une appli interne pour le partage des photos de vacances dans les campings du groupe.</li>
      </ul>,
      key: "job_ctv"
    }, {
      title: "Bertin - HDG",
      date: "Sept. 2017 - Déc. 2017",
      description: (<>
        <ul>
          <li>Refonte d’un portail à destination des Ingénieurs Commerciaux.</li>
          <li>Analyse de l’activité des techniciens Orange et sous-traitants en répartiteurs habités pour la refonte de leur application métier.</li>
        </ul>
      </>),
      key: "job_hdg"
    }, {
      title: "Orange",
      date: "Mars 2017 - Août 2017",
      description: <ul>
        <li>Conception d’une grille d’évaluation de la charge de travail et d’un modèle de représentation graphique des ressources mobilisées pour réaliser l’activité.</li>
        <li>Soutien sur divers projets du SI.</li>
      </ul>,
      key: "job_orange"
    }, {
      title: "UTBM",
      date: "Mars 2015 - Sept. 2015",
      description: <ul>
        <li>Recommandations d’intégrations des technologies dans les futurs véhicules militaires pour le projet Scorpion de l’Armée de Terre.</li>
        <li>UTBM : Université de Technologie Belfort-Montbéliard</li>
      </ul>,
      key: "job_utbm"
    }];

    this.studies = [
      {
        title: "Master Ergonomie",
        date: "2016 - 2017",
        description: (<>
          Master 2 Pro Sociologie et Ergonomie des Technologies Numériques - Université Sophia-Antipolis, Nice
        </>),
        key: "study_ergo"
      }, {
        title: "Master Psycho",
        date: "2014 - 2015",
        description: (<ul>
          <li>Master 2 Pro Psychologie spécialité Ergonomie Cognitive et Ingénierie Linguistique Université Toulouse 2 Jean Jaurès.</li>
          <li>Mémoire : Apports et limites d'une intervention en psychologie et ergonomie cognitive dans le cadre de l'intégration de technologies innovantes dans des véhicules militaires (sous la direction de M. André TRICOT).</li>
        </ul>),
        key: "study_psycho"
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
                  href="../../files/CV_UX_Designer_Alice_Foissy.pdf" download>
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
    <Experiences {...props} />
  </Layout>
)
