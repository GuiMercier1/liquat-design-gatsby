import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h4 className="white-text" data-translate="FOOTER_CONTACT"></h4>
            <p className="grey-text text-lighten-4">
              <Link to={contact.link} className="grey-text text-lighten-3 custom-link"><i
                className="material-icons left">mail_outline</i>{contact.text}</Link>
            </p>
            <p className="grey-text text-lighten-4">
              <a className="grey-text text-lighten-3" href={linkedin.link} target="_blank">
                <img className="link-icon" src="img/icon_linkedin.png" alt="Logo LinkedIn" />
                <span>{linkedin.text}</span>
              </a>
            </p>
            <p className="grey-text text-lighten-4">
              <a className="grey-text text-lighten-3" href={twitter.link} target="_blank">
                <img className="link-icon" src="img/icon_twitter.png" alt="Logo Twitter" />
                <span >{twitter.text}</span>
              </a>
            </p>
            <p className="grey-text text-lighten-4">
              <a className="grey-text text-lighten-3" href={github.link} target="_blank">
                <img className="link-icon" src="img/icon_github.png" alt="Logo GitHub" />
                <span>{github.text}</span>
              </a>
            </p>
          </div>
          <div className="col s12 m4">
            <h4 className="white-text">Votre avis m'intéresse</h4>
            <p className="grey-text text-lighten-4 spaced-text">
              Si vous êtes ici, ce site devrait être conçu pour répondre à vos attentes. Satisfait ou pas, je serais heureux d'avoir votre retour, n'hésitez pas à m'envoyer <a className="orange-link" href={contact.link} target="_blank">un mail</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Liquat Design
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Liquat Design`,
}

export default Footer
