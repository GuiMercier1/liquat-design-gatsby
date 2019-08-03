import React from "react"
import Img from "gatsby-image"

function ProjectCard(props) {

    return (
        <>
            <div className="col s12 m4 project-card-col">
                <div className="card project-card hoverable">
                    <div className="card-image">
                        <Img fluid={props.image.node.childImageSharp.fluid} alt={props.project.fr_title}></Img>
                        <div className="card-overlay" style={{ opacity: props.project.opacity }}></div>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{props.project.fr_title}</span>
                        <p>{props.project.fr_shortDescription}</p>
                        {/* tagsHTML */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
