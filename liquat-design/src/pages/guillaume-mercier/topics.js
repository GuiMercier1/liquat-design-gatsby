import React from "react"

import Layout from "../../components/layout"
import Topic from "../../components/topic"
import SEO from "../../components/seo"

import exImage from "../../images/topics/ex.jpg"
import ikigaiImage from "../../images/topics/ikigai.jpeg"
import persuasiveImage from "../../images/topics/persuasive.png"
import timeWellSpentImage from "../../images/topics/time_well_spent.png"
import uxImage from "../../images/topics/ux-design.jpg"

function Topics() {

  const topicsData = [
    {
      imgSrc: uxImage,
      imgAlt: "Crédits à interaction-design.org",
      title: "UX Design - Introduction",
      text: "L'UX (ou User eXperience) est un procédé de conception de produits où l'on donne aux utilisateurs finaux une place centrale. On les étudie, on modélise leur personnalité et leurs besoins pour créer une expérience optimale avec le produit. De la définition du projet aux tests finaux en passant par la conception, l'UX Designer impliquera les utilisateurs pour que le produit final réponde à toutes leurs attentes.",
      links: [
        {
          url: "https://www.nngroup.com/",
          title: "Norman Nielsen Group (EN)",
        },
        {
          url: "https://www.linkedin.com/pulse/le-design-ux-cest-quoi-marie-glandus/",
          title: "UX par Marie Glandus (FR)"
        },
        {
          url: "https://uxplanet.org/what-is-ui-vs-ux-design-and-the-difference-d9113f6612de",
          title: "UI n'est pas UX (EN)"
        },
      ],
      key: "topic_ux"
    },
    {
      imgSrc: exImage,
      imgAlt: "Expérience Employé - Crédits à hrreporter.com",
      title: "eXpérience Employé (EX)",
      text: "Ma propre définition de l'expérience employé (EX), c'est d'appliquer les processus de l'UX aux employés d'une entreprise. En tant que principaux acteurs de celle-ci, ils doivent être écoutés et pris en compte dans la plupart des décisions de l'entreprise. En utilisant les techniques et ateliers de l'UX, on peut donc définir leurs valeurs et leurs attentes pour créer une vraie symbiose avec les besoins économiques et stratégiques de l'entreprise. Travailler sur l'EX aura un grand impact sur le bien-être et donc l'implication de vos employés.",
      links: [
        {
          url: "https://www.lemagit.fr/definition/Experience-employe",
          title: "Introduction (FR)"
        },
        {
          url: "http://www.globoforce.com/wp-content/uploads/2016/10/The_Employee_Experience_Index.pdf",
          title: "Le guide (EN)"
        }
      ],
      key: "topic_ex"
    },
    {
      imgSrc: ikigaiImage,
      imgAlt: "Ikigaï - Crédits à lesnouveauxtravailleurs.fr",
      title: "Ikigaï",
      text: "Droit venu du Japon, l'Ikigaï propose une vision très concrète du job \"idéal\" en le plaçant à la jonction de quatre domaines : ce que j'aime faire, ce dans quoi je suis doué, ce pour quoi je peux être payé et ce dont le monde a besoin. Loin d'apporter une solution évidente, il permet de soulever des questions primordiales au développement personnel et professionnel. Attention, ces lectures sont à prendre avec du recul pour ne pas sombrer dans une contre-productive course à la perfection !",
      links: [
        {
          url: "https://lesnouveauxtravailleurs.fr/comment-trouver-son-ikigai-ma-methode-en-4-etapes/",
          title: "Premiers pas (FR)"
        },
        {
          url: "https://theascent.pub/finding-your-lifes-purpose-discovering-your-ikigai-1c4832a5b35b",
          title: "Premiers pas (EN)"
        }
      ],
      key: "topic_ikigai"
    },
    {
      imgSrc: persuasiveImage,
      imgAlt: "Conception persuasive - Crédits à behaviormodel.org",
      title: "Application persuasives",
      text: "En jouant sur les biais cognitifs et en suivant certaines théories de design (comme celles de BJ Fogg), les applications persuasives sont conçues pour faire évoluer le comportement des utilisateurs dans un but défini par le concepteur (i.e. faire du sport, manger sainement, acheter un objet, ...). Si ce domaine est captivant pour un UX Designer, il doit être considéré avec précausion à cause de toutes les questions d'éthiques qu'il soulève. Incitation VS. manipulation, la limite est fine et le designer devra se confronter à ses propres règles morales.",
      links: [
        {
          url: "https://www.behaviormodel.org/",
          title: "Le modèle comportemental de BJ Fogg (EN)"
        },
        {
          url: "https://en.wikipedia.org/wiki/Nudge_(book)",
          title: "Nudge - Le livre (EN)"
        },
        {
          url: "http://www.axellescom.com/blog/le-dark-pattern-la-bete-noire-de-lexperience-utilisateur-ux/",
          title: "Dark Patterns (FR)"
        },
        {
          url: "https://www.blogdumoderateur.com/ux-design-ethique-deontologie-realite-marche",
          title: "UX et éthique (FR)"
        }
      ],
      key: "topic_persuasive"
    },
    {
      imgSrc: timeWellSpentImage,
      imgAlt: "Time Well Spent - Crédits à tristanharris.com",
      title: "Time Well Spent",
      text: "Tristan Harris a été philosophe produit chez Google, où il a été un des premiers à lever une alerte sur le marché de l'attention via nos smartphones : \"Le problème est que notre téléphone met un nouveau choix au menu, qui sera toujours mieux en apparence, plus gratifiant, que la réalité. Ce n’est pas vrai, mais ça nous donne cette impression.\". Notre attention vaut de l'or pour les compagnies comme Google, Apple, Facebook, Amazon, ... Il a donc décidé de créer un label, le \"Time Well Spent\" (\"Temps bien dépensé\") et le \"Centre pour une Technologie Humaine\" pour rendre aux utilisateurs leur liberté de choix au quotidien.",
      links: [
        {
          url: "https://humanetech.com/",
          title: "Center for Humane Tech (EN)"
        },
        {
          url: "https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3",
          title: "Comment la tech. pirate nos cerveaux (EN)"
        },
        {
          url: "https://www.nouvelobs.com/rue89/rue89-le-grand-entretien/20160604.RUE3072/tristan-harris-des-millions-d-heures-sont-juste-volees-a-la-vie-des-gens.html",
          title: "Interview de T.H. pour Rue89 (FR)"
        },
      ],
      key: "topic_tws"
    }
  ];

  const topics = topicsData.map((topic, index) => {
    let side = index % 2 === 0 ? "left" : "right";
    return (
      <div key={topic.key} className="row">
        <div className="col s12">
          <Topic topic={topic} side={side}></Topic>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <SEO title="Inspirations" />
      <div className="section">
        <div className="container">

          <div className="row no-bottom">
            <h1 className="page-head-sub-title colored-title">Inspirations</h1>
            <p>Voici une liste de sujets qui m'inspirent, et vu que d'autres en parlent mieux que moi je vous propose une sélection des meilleurs articles à ce sujet !</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          {topics}
        </div>
      </div>
    </Layout>
  )
}

export default Topics
