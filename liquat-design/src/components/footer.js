import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

import 'material-icons/iconfont/material-icons.css'

function Footer(props) {

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

  const talentData = props.talentData;
  const color = talentData.color;
  const veryDarkColor = talentData.veryDarkColor;

  const StyledFooter = styled.footer`background-color:${color};`;
  const StyledCopyrightFooter = styled.div`background-color:${veryDarkColor}!important;`;

  let content;
  switch (props.talentData.id) {
    case "ALICE":
      content = getAliceContent();
      break;
    case "GUILLAUME":
      content = getGuillaumeContent();
      break;
    case "LIQUAT":
    default:
      content = getLiquatContent();
  }

  function getAliceContent() {
    return (
      <>
        <div className="col s12 m6">
          <h4 className="white-text">Contactez-moi !</h4>
          <div className="footer-link-wrapper">
            <Link to="/alice-foissy/contact" className="grey-text text-lighten-3"><i
              className="material-icons left">mail_outline</i>alice.foissy@gmail.com</Link>
          </div>
          <div className="footer-link-wrapper">
            <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/alice-anne-foissy-93b16290/" target="_blank" rel="noopener noreferrer">
              <Img className="link-icon" fixed={data.linkedinImage.childImageSharp.fixed} alt="Logo LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="col s12 m4">
          <h4 className="white-text">Votre avis m'intéresse</h4>
          <p className="grey-text text-lighten-4 spaced-text">
            Si vous êtes ici, ce site devrait être conçu pour répondre à vos attentes. Satisfait ou pas, je serais heureuse d'avoir votre retour, n'hésitez pas à m'envoyer <a className="orange-link" href="/alice-foissy/contact" target="_blank" rel="noopener noreferrer">un mail</a>.
          </p>
        </div>
      </>
    );
  }

  function getGuillaumeContent() {
    return (
      <>
        <div className="col s12 m6">
          <h4 className="white-text">Contactez-moi !</h4>
          <div className="footer-link-wrapper">
            <Link to="/guillaume-mercier/contact" className="grey-text text-lighten-3"><i
              className="material-icons left">mail_outline</i>gui.mercier1@gmail.com</Link>
          </div>
          <div className="footer-link-wrapper">
            <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/guillaume-mercier-7632b058/" target="_blank" rel="noopener noreferrer">
              <Img className="link-icon" fixed={data.linkedinImage.childImageSharp.fixed} alt="Logo LinkedIn" />
              <span>Panne de réseau ?</span>
            </a>
          </div>
          <div className="footer-link-wrapper">
            <a className="grey-text text-lighten-3" href="https://twitter.com/gui_mercier" target="_blank" rel="noopener noreferrer">
              <Img className="link-icon" fixed={data.twitterImage.childImageSharp.fixed} alt="Logo Twitter" />
              <span >Reliquat du temps libre</span>
            </a>
          </div>
          <div className="footer-link-wrapper">
            <a className="grey-text text-lighten-3" href="https://github.com/GuiMercier1" target="_blank" rel="noopener noreferrer">
              <Img className="link-icon" fixed={data.githubImage.childImageSharp.fixed} alt="Logo GitHub" />
              <span>Expériences plus ou moins réussies</span>
            </a>
          </div>
        </div>
        <div className="col s12 m4">
          <h4 className="white-text">Votre avis m'intéresse</h4>
          <p className="grey-text text-lighten-4 spaced-text">
            Si vous êtes ici, ce site devrait être conçu pour répondre à vos attentes. Satisfait ou pas, je serais heureux d'avoir votre retour, n'hésitez pas à m'envoyer <a className="orange-link" href="/guillaume-mercier/contact" target="_blank" rel="noopener noreferrer">un mail</a>.
        </p>
        </div>
      </>
    );
  }

  function getLiquatContent() {
    return (
      <>
        <div className="col s12 m6">
          <h4 className="white-text">Contactez-nous !</h4>
          <div className="footer-link-wrapper">
            <p>
              <Link to="/contact" className="grey-text text-lighten-3">
                <i className="material-icons left">mail_outline</i>gui.mercier1@gmail.com
              </Link>
            </p>
            <p>
              <Link to="/alice-foissy/contact" className="grey-text text-lighten-3">
                <i className="material-icons left">mail_outline</i>alice.foissy@gmail.com
              </Link>
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <h4 className="white-text">Votre avis nous intéresse</h4>
          <p className="grey-text text-lighten-4 spaced-text">
            Si vous êtes ici, ce site devrait être conçu pour répondre à vos attentes. Satisfait ou pas, nous serons heureux d'avoir votre retour, n'hésitez pas à nous envoyer <a className="orange-link" href="/contact" target="_blank" rel="noopener noreferrer">un mail</a>.
        </p>
        </div>
      </>
    );
  }

  return (
    <StyledFooter className="page-footer">
      <div className="container">
        <div className="row">
          {content}
        </div>
      </div>
      <StyledCopyrightFooter className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Liquat Design
        </div>
      </StyledCopyrightFooter>
    </StyledFooter>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Liquat Design`,
}

export default Footer
