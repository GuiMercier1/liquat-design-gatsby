import React from "react"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectCard from "../../components/projectCard"

// http://localhost:8000/___graphql

const Portfolio = props => {

  const talentData = props.talentData;

  const projects = talentData.projects;

  let filters = [];
  projects.forEach(project => {
    project.tags.forEach(tag => {
      if (filters.indexOf(tag) === -1) {
        tag.active = false;
        filters.push(tag);
      }
    });
  });

  setActiveFiltersFromURL();
  filters.forEach(setFilterLink);
  const projectsCards = getProjectsToDisplay();

  function getActiveFilters() {
    return filters.filter(filter => filter.active);
  }

  function setActiveFiltersFromURL() {
    const filtersInUrl = getQueryObject(props.location.search).filter;

    if (filtersInUrl === undefined) return;

    if (typeof filtersInUrl === 'string') {
      let focusedFilter = filters.find(filter => filter.id === filtersInUrl);
      focusedFilter.active = true;
    }
    else if (filtersInUrl) {
      filtersInUrl.forEach((urlFilter) => {
        let focusedFilter = filters.find(filter => filter.id === urlFilter);
        focusedFilter.active = true;
      });
    }

    return getActiveFilters();
  }

  function setFilterLink(baseFilter) {
    let activeFilters = getActiveFilters();

    // We - virtually - toggle the filter status
    if (baseFilter.active) {
      activeFilters = activeFilters.filter(filter => filter.id !== baseFilter.id);
    } else {
      activeFilters.push(baseFilter);
    }

    // Then we build the URL
    let newFilterQuery = "/guillaume-mercier/portfolio?";
    activeFilters.forEach(function (filter, index) {
      newFilterQuery += "filter=" + filter.id;
      if (index < activeFilters.length - 1) newFilterQuery += "&";
    });

    baseFilter.url = newFilterQuery;
  }

  function getProjectsToDisplay() {
    let activeFilters = getActiveFilters();

    // If all filters are inactive => All projects must be displayed
    if (activeFilters.length === 0) activeFilters = filters;

    return projects.reduce(function (projectsReduced, project) {

      let mustBeDisplayed = false;
      project.tags.forEach(tag => {
        const filterIndex = activeFilters.findIndex(filter => tag.id === filter.id);
        if (filterIndex !== -1) mustBeDisplayed = true;
      });

      if (mustBeDisplayed) projectsReduced.push(<ProjectCard key={"project_" + project.id} project={project} talentData={props.talentData}></ProjectCard>);

      return projectsReduced;
    }, []);
  }

  return (
    <>
      <SEO title="Portfolio" />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="page-head-sub-title colored-title center-align">
                <span>Portfolio ({projectsCards.length})</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <ul className="filters">
                {filters.map(filter => <Filter key={filter.id} filter={filter}></Filter>)}
              </ul>
            </div>
          </div>
          <div className="row flex" id="projects-list">
            {projectsCards}
          </div>
        </div>
      </div>
    </>
  )
}

function Filter({ filter }) {
  return (
    <li key={"filter_" + filter.id}>
      <Link className={"filter " + (filter.active ? "filter-selected" : "")} to={filter.url}>#{filter.name}</Link>
    </li>
  );
}

// Provides a JS object from all the query strings
function getQueryObject(locationSearch) {

  // get query string from window
  var queryString = locationSearch.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      // paramName = paramName.toLowerCase();
      // if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}

export default props => (
  <Layout>
    <Portfolio {...props}/>
  </Layout>
)
