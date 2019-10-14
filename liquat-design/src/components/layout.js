/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Location } from '@reach/router';

import Header from "./header"
import Footer from "./footer"
import useTalentData from "../helpers/useTalentData"

import "materialize-css/dist/css/materialize.min.css"
import "./layout.css"

const TALENTS = {
  ALICE: "ALICE",
  GUILLAUME: "GUILLAUME",
  LIQUAT: "LIQUAT"
};

const Layout = props => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let focusedTalent;

  if (props.location.pathname.includes("/guillaume-mercier")) focusedTalent = TALENTS.GUILLAUME;
  else if (props.location.pathname.includes("/alice-foissy")) focusedTalent = TALENTS.ALICE;
  else focusedTalent = TALENTS.LIQUAT;

  const { talentData } = useTalentData({ talent: focusedTalent });

  const childrenWithTalentData = React.cloneElement(props.children, { talentData: talentData });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} talentData={talentData} />
      <main className="page-content">{childrenWithTalentData}</main>
      <Footer talentData={talentData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <Location>
    {locationProps => <Layout {...locationProps} {...props} />}
  </Location>
);