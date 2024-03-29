import React from "react"
import Img from "gatsby-image"
import { navigate } from "gatsby"

function ProjectCard(props) {

    if (props.project.tags === undefined) props.project.tags = [];
    const tags = props.project.tags.map((tag) => {
        return (
            <li key={"project_tag_" + tag.id}>
                <span className="tag">#{tag.name}</span>
            </li>
        );
    });

    const link = "/" + (props.talentData.id === "GUILLAUME" ? "guillaume-mercier" : "alice-foissy") + "/portfolio/" + props.project.id;

    // <Link to={baseLink + props.project.id}>
    return (
        <div className="col s12 m4 project-card-col" onClick={event => { navigate(link) }}>
            <div className="card project-card hoverable">
                <div className="card-image">
                    <Img fluid={props.project.image.node.childImageSharp.fluid} alt={props.project.fr_title}></Img>
                    <div className="card-overlay" style={{ opacity: props.project.opacity }}></div>
                </div>
                <div className="card-content">
                    <span className="card-title">{props.project.fr_title}</span>
                    <p>{props.project.fr_shortDescription}</p>
                    <ul className="tags">{tags}</ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
