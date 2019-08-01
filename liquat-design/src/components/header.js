import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header(props) {

  const brand = "G.M.";

  const home = {
    title: "Accueil",
    link: "/guillaume-mercier"
  }

  const portfolio = {
    title: "Portfolio",
    link: "/guillaume-mercier/portfolio"
  }

  const experiences = {
    title: "Expériences",
    link: "/guillaume-mercier/curriculum"
  }

  const topics = {
    title: "Inspirations",
    link: "/guillaume-mercier/topics"
  }

  const contact = {
    title: "Contact",
    link: "/guillaume-mercier/contact"
  }

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to={home.link} className="brand-logo custom-link">{brand}</Link>
            <a href="#" data-target="mobile-menu" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to={home.link} className="custom-link menu-link">{home.title}</Link></li>
              <li><Link to={portfolio.link} className="custom-link menu-link">{portfolio.title}</Link></li>
              <li><Link to={experiences.link} className="custom-link menu-link">{experiences.title}</Link></li>
              <li><Link to={topics.link} className="custom-link menu-link">{topics.title}</Link></li>
              <li><Link to={contact.link} className="custom-link menu-link">{contact.title}</Link></li>
              {/*<li><a href="#" className="lang-switch-button" data-translate="LANG_SWITCH"></a></li>*/}
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-menu">
        <li className="navbar-header"><a href="./index.html" className="mobile-logo brand-logo">A.F.</a></li>
        <li className="navbar-home"><a href="./index.html" className="sidenav-close custom-link menu-link"></a></li>
        <li><a href="./portfolio.html" className="sidenav-close custom-link menu-link"></a></li>
        <li><a href="./curriculum.html" className="sidenav-close custom-link menu-link"></a></li>
        <li><a href="./contact.html" className="sidenav-close custom-link menu-link"></a></li>
        {/*<li><a href="#" className="sidenav-close lang-switch-button" data-translate="LANG_SWITCH"></a></li>*/}
        <li className="navbar-footer">
          <p>Alice-Anne Foissy</p>
          <p>UX Designer</p>
          <p><a href="./contact.html" className="orange-link custom-link" data-link="./contact.html">alice.foissy@gmail.com</a></p>
        </li>
      </ul>
    </header>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Liquat Design`,
}

export default Header
