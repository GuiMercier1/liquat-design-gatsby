import React from "react"
import styled from "styled-components"

function Topic(props) {

    const links = props.topic.links.map((link, index) => {
        const key = "topic_link_" + index + Date.now();
        return (
            <a key={key} href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
        );
    });

    const ImageWrapper = styled.div`
        max-width: 20%!important;
        display: flex;
        align-items: center;
        padding: 10px;
    `

    const img = <ImageWrapper className="card-image hide-on-small-only">
        <img src={props.topic.imgSrc}></img>
    </ImageWrapper>;

    const before = props.side === "left" ? img : null;
    const after = props.side === "right" ? img : null;

    return (
        <div className="card horizontal">
            {before}
            <div className="card-stacked">
                <div className="card-content">
                    <h5 className="topic-title">{props.topic.title}</h5>
                    <p>{props.topic.text}</p>
                </div>
                <div className="card-action topic-link-container">
                    {links}
                </div>
            </div>
            {after}
        </div>
    )
}

export default Topic
