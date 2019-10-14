import { useRef } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import styled from "styled-components"

import useTalentTheme from "../helpers/useTalentTheme"

if (typeof window !== 'undefined') {
  require('materialize-css/dist/js/materialize.min.js')
}

const Header = props => {

  const sidenav = useRef();

  useEffect(() => {
    sidenav.current = window.M.Sidenav.init(document.querySelectorAll('.sidenav'), { edge: "right" })[0];
  });

  const sidenavClickHandler = () => {
    sidenav.current.open();
  }

  const talentData = props.talentData;
  const color = talentData.color;
  const darkColor = talentData.darkColor;
  const brand = talentData.logoInitials;
  const homeLink = talentData.homeLink;
  const links = talentData.links;
  const mails = talentData.mails;
  const fullName = talentData.fullName;
  const jobLine = talentData.jobLine;

  useTalentTheme(talentData.id);

  const StyledNav = styled.nav`background-color:${color};`;
  const StyledSidenav = styled.ul`background-color:${color};`;
  const DarkStyledSidenav = styled.li`background-color:${darkColor};`;

  const baseLinks = links.map(link => {
    return <li key={"baselink_" + link.link}><Link to={link.link} className="menu-link">{link.title}</Link></li>
  });

  const mobileLinks = links.map((link, index) => {
    const linkClass = index === 0 ? "navbar-home" : "";
    return (
      <li key={"baselink_" + link.link} className={linkClass}>
        <Link to={link.link} className="sidenav-close menu-link">{link.title}</Link>
      </li>
    );
  });

  const mailList = mails.map(({ mail, link }) => {
    return <p key="{link}"><Link to={link} className="sidenav-close orange-link">{mail}</Link></p>
  });

  const jobLineList = jobLine.map((job,index) => {
    return <p key={"job_"+index}>{job}</p>;
  });

  const BurgerIcon = styled.i`
    font-size:32px!important;
  `

  return (
    <header>
      <div className="navbar-fixed">
        <StyledNav>
          <div className="nav-wrapper">
            <Link to={homeLink} className="brand-logo">{brand}</Link>
            <span data-target="mobile-menu" className="sidenav-trigger right hide-on-large-only" onClick={sidenavClickHandler}><BurgerIcon className="material-icons">menu</BurgerIcon></span>
            <ul className="right hide-on-med-and-down">
              {baseLinks}
            </ul>
          </div>
        </StyledNav>
      </div>

      <StyledSidenav className="sidenav" id="mobile-menu">
        <DarkStyledSidenav className="navbar-header">
          <Link to={homeLink} className="sidenav-close mobile-logo brand-logo">{brand}</Link>
        </DarkStyledSidenav>
        {mobileLinks}
        <DarkStyledSidenav className="navbar-footer">
          <p>{fullName}</p>
          {jobLineList}
          {mailList}
        </DarkStyledSidenav>
      </StyledSidenav>
    </header >
  )
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
