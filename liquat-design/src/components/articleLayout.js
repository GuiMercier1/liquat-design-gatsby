import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../components/seo"

import "./articleLayout.css"

const ArticleLayout = props => {

    const projects = props.talentData.projects;
    const projectIndex = projects.findIndex(project => project.id === props.projectID);
    const project = projects[projectIndex];
    const previousProjectID = projectIndex === 0 ? projects[projects.length - 1].id : projects[projectIndex - 1].id;
    const nextProjectID = projectIndex === projects.length - 1 ? projects[0].id : projects[projectIndex + 1].id;
    const baseURL = props.talentData.homeLink + "/portfolio/";

    let childrenWithProjectData;

    if (props.children) childrenWithProjectData = React.cloneElement(props.children, { project: project });

    function Tasks(props) {
        if (props.tasks.length === 0) return <></>;
        else {
            const taskList = props.tasks.map(task => {
                return <li className="browser-default" key={encodeURI(task.fr)}>{task.fr}</li>;
            });
            return (
                <>
                    <MarginedHeader>Tâches</MarginedHeader>
                    <ul className="browser-default">{taskList}</ul>
                </>);
        }
    }

    function Tools(props) {
        if (props.tools.length === 0) return <></>;
        else {
            const toolsList = props.tools.map(tool => {
                return <li key={tool.id}>{tool.name}</li>;
            });
            return (
                <>
                    <MarginedHeader>Outils utilisés</MarginedHeader>
                    <ul>{toolsList}</ul>
                </>
            );
        }
    }

    function Administrative(props) {
        const customer = <p><b>Client :</b> {props.project.customer}</p>;
        const company = <p><b>Structure :</b> {props.project.company}</p>;

        const date = props.project.date ? <p><b>Date :</b> {props.project.date}</p> : <></>;
        const location = props.project.location ? <p><b>Lieu :</b> {props.project.location}</p> : <></>;

        if (props.project.customer === props.project.company) {
            return customer;
        }
        else {
            return (
                <>
                    {customer}
                    {company}
                    {date}
                    {location}
                </>
            )
        }
    }

    if (project.tags === undefined) project.tags = [];
    const tags = project.tags.map((tag) => {
        return (
            <li key={"project_tag_" + tag.id}>
                <span className="tag">#{tag.name}</span>
            </li>
        );
    });

    const ImageWrapper = styled.div`
        border: 1px solid #e2e3e8;
        height: 202px;
    `

    const MarginedHeader = styled.h4`
        margin-top:50px;
        margin-bottom:20px;
        color:${props.talentData.color}
    `

    const InlineList = styled.ul`
        display:inline-block;
    `

    const ButtonDiv = styled.div`
        margin-top:50px;
    `

    const PreviousButton = styled(Link)`
        margin-right:20px;
    `

    if (childrenWithProjectData) {
        childrenWithProjectData =
            <>
                <MarginedHeader>Plus en détail</MarginedHeader>
                <>{childrenWithProjectData}</>
            </>
    }

    return (
        <>
            <SEO title={project.fr_title} />
            <div className="section">
                <div className="container">
                    <ImageWrapper className="row">
                        <div className="col s12 center-align">
                            <Img className="portfolio-main-image" alt={project.fr_title} fixed={project.image.node.childImageSharp.fixed}></Img>
                        </div>
                    </ImageWrapper>
                    <div className="row">
                        <h1 className="page-head-sub-title colored-title center-align">{project.fr_title}</h1>
                        <p className="center-align margin-bottom">{project.fr_shortDescription}</p>
                        <div className="center-align">
                            <InlineList className="tags">{tags}</InlineList>
                        </div>
                        <Tasks tasks={project.tasks}></Tasks>
                        <MarginedHeader>Use case</MarginedHeader>
                        <p dangerouslySetInnerHTML={{ __html: project.fr_longDescription }}></p>
                        <Tools tools={project.tools}></Tools>
                        <MarginedHeader>Contexte</MarginedHeader>
                        <Administrative project={project}></Administrative>
                        {childrenWithProjectData}
                        <ButtonDiv>
                            <PreviousButton className="btn" to={baseURL + previousProjectID}>Précédent</PreviousButton>
                            <Link className="btn" to={baseURL + nextProjectID}>Suivant</Link>
                        </ButtonDiv>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleLayout