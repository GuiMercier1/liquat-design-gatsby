import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

import useTalentData from "../helpers/useTalentData"

import 'material-icons/iconfont/material-icons.css'

function Footer(props) {

  const contact = {
    link: "/guillaume-mercier/contact",
    text: "gui.mercier1@gmail.com"
  }

  const linkedin = {
    link: "https://www.linkedin.com/in/guillaume-mercier-7632b058/",
    text: "Panne de réseau ?"
  }

  const twitter = {
    link: "https://twitter.com/gui_mercier",
    text: "Reliquat du temps libre"
  }

  const github = {
    link: "https://github.com/GuiMercier1",
    text: "Expériences plus ou moins réussies"
  }

  const talentData = props.talentData;
  const color = talentData.color;
  const veryDarkColor = talentData.veryDarkColor;
  const brand = talentData.logoInitials;
  const homeLink = talentData.homeLink;
  const links = talentData.links;
  const contactLink = talentData.contactLink;
  const mail = talentData.mail;
  const fullName = talentData.fullName;
  const jobLine = talentData.jobLine;

  const StyledFooter = styled.footer`background-color:${color};`;
  const StyledCopyrightFooter = styled.div`background-color:${veryDarkColor}!important;`;

  const data = useStaticQuery(graphql`
    query {
      linkedinImage: file(relativePath: { eq: "logos/icon_linkedin.png" }) {
        childImageSharp {
          fixed(width:24) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      twitterImage: file(relativePath: { eq: "logos/icon_twitter.png" }) {
        childImageSharp {
          fixed(width:24) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      githubImage: file(relativePath: { eq: "logos/icon_github.png" }) {
        childImageSharp {
          fixed(width:24) {
            ...GatsbyImageSharpFixed
          }
        }
      },
    }
  `)


  

  return (
    <StyledFooter className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h4 className="white-text">Contactez-moi !</h4>
            <div className="footer-link-wrapper">
              <Link to={contact.link} className="grey-text text-lighten-3"><i
                className="material-icons left">mail_outline</i>{contact.text}</Link>
            </div>
            <div className="footer-link-wrapper">
              <a className="grey-text text-lighten-3" href={linkedin.link} target="_blank" rel="noopener noreferrer">
                <Img className="link-icon" fixed={data.linkedinImage.childImageSharp.fixed} alt="Logo LinkedIn" />
                <span>{linkedin.text}</span>
              </a>
            </div>
            <div className="footer-link-wrapper">
              <a className="grey-text text-lighten-3" href={twitter.link} target="_blank" rel="noopener noreferrer">
                <Img className="link-icon" fixed={data.twitterImage.childImageSharp.fixed} alt="Logo Twitter" />
                <span >{twitter.text}</span>
              </a>
            </div>
            <div className="footer-link-wrapper">
              <a className="grey-text text-lighten-3" href={github.link} target="_blank" rel="noopener noreferrer">
                <Img className="link-icon" fixed={data.githubImage.childImageSharp.fixed} alt="Logo GitHub" />
                <span>{github.text}</span>
              </a>
            </div>
          </div>
          <div className="col s12 m4">
            <h4 className="white-text">Votre avis m'intéresse</h4>
            <p className="grey-text text-lighten-4 spaced-text">
              Si vous êtes ici, ce site devrait être conçu pour répondre à vos attentes. Satisfait ou pas, je serais heureux d'avoir votre retour, n'hésitez pas à m'envoyer <a className="orange-link" href={contact.link} target="_blank" rel="noopener noreferrer">un mail</a>.
            </p>
          </div>
        </div>
      </div>
      <StyledCopyrightFooter className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Liquat Design
        </div>
      </StyledCopyrightFooter>
    </StyledFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Liquat Design`,
}

export default Footer
