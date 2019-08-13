import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

if (typeof window !== 'undefined') {
  require('materialize-css/dist/js/materialize.min.js')
}

class Header extends React.Component {

  componentDidMount() {
    var options = {};
    options.edge = "right";
    let sidenav = document.querySelectorAll('.sidenav');
    this.sidenav = window.M.Sidenav.init(sidenav, options)[0];
  }

  sidenavClickHandler() {
    this.sidenav.open();
  }

  render() {
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
      link: "/guillaume-mercier/experiences"
    }

    const topics = {
      title: "Inspirations",
      link: "/guillaume-mercier/topics"
    }

    const contact = {
      title: "Contact",
      link: "/guillaume-mercier/contact",
      mail: "gui.mercier1@gmail.com"
    }

    const liquat = {
      title: "Liquat Design",
      link: "/"
    }

    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link to={home.link} className="brand-logo">{brand}</Link>
              <span data-target="mobile-menu" className="sidenav-trigger right hide-on-large-only" onClick={() => this.sidenavClickHandler()}><i className="material-icons">menu</i></span>
              {/* <a href="#" data-target="mobile-menu" className="sidenav-trigger right"><i className="material-icons">menu</i></a> */}
              <ul className="right hide-on-med-and-down">
                <li><Link to={home.link} className="menu-link">{home.title}</Link></li>
                <li><Link to={portfolio.link} className="menu-link">{portfolio.title}</Link></li>
                <li><Link to={experiences.link} className="menu-link">{experiences.title}</Link></li>
                <li><Link to={topics.link} className="menu-link">{topics.title}</Link></li>
                <li><Link to={contact.link} className="menu-link">{contact.title}</Link></li>
                <li><Link to={liquat.link} className="menu-link">{liquat.title}</Link></li>
                {/*<li><a href="#" classN ame="lang-switch-button" data-translate="LANG_SWITCH"></a></li>*/}
              </ul>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile-menu">
          <li className="navbar-header">
            <Link to={home.link} className="sidenav-close mobile-logo brand-logo">{brand}</Link>
          </li>
          <li className="navbar-home">
            <Link to={home.link} className="sidenav-close menu-link">{home.title}</Link>
          </li>
          <li>
            <Link to={portfolio.link} className="sidenav-close menu-link">{portfolio.title}</Link>
          </li>
          <li>
            <Link to={experiences.link} className="sidenav-close menu-link">{experiences.title}</Link>
          </li>
          <li>
            <Link to={topics.link} className="sidenav-close menu-link">{topics.title}</Link>
          </li>
          <li>
            <Link to={contact.link} className="sidenav-close menu-link">{contact.title}</Link>
          </li>
          <li>
            <Link to={liquat.link} className="sidenav-close menu-link">{liquat.title}</Link>
          </li>
          {/*<li><a href="#" className="sidenav-close lang-switch-button" data-translate="LANG_SWITCH"></a></li>*/}
          <li className="navbar-footer">
            <p>Guillaume Mercier</p>
            <p>UX - Dev - Management</p>
            <p>
              <Link to={contact.link} className="orange-link">{contact.mail}</Link>
            </p>
          </li>
        </ul>
      </header >
    )
  }
}


//TODO Check if it is usefull
//TODO Check SEO component as well
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Liquat Design`,
}

export default Header
