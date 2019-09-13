import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

function Topic(props) {

    const ImageWrapper = styled.div`
        min-width: 20%!important;
        display: flex;
        align-items: center;
        padding: 10px;
    `

    const TopicLinkContainer = styled.div`
        border-top: none!important;
        padding:0!important;
        display: flex;
        flex-wrap: wrap;
    `

    const TopicLink = styled.a`
        padding:20px;
    `

    const TopicTitle = styled.h5`
        margin-top: 0px;
        text-align:left;
    `

    const links = props.topic.links.map((link, index) => {
        const key = props.key + link.url;
        return (
            <TopicLink key={key} href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</TopicLink>
        );
    });

    const img = <ImageWrapper className="card-image hide-on-small-only">
        {/* <img src={props.topic.imgSrc} alt={props.topic.imgAlt}></img> */}
        <Img fluid={props.topic.fluidImage.node.childImageSharp.fluid} style={{ minWidth: "100%" }} alt={props.topic.imgAlt}></Img>
    </ImageWrapper >;

    const before = props.side === "left" ? img : null;
    const after = props.side === "right" ? img : null;

    return (
        <div key={props.key} className="card horizontal">
            {before}
            <div className="card-stacked">
                <div className="card-content">
                    <TopicTitle>{props.topic.title}</TopicTitle>
                    <p>{props.topic.text}</p>
                </div>
                <TopicLinkContainer className="card-action">
                    {links}
                </TopicLinkContainer>
            </div>
            {after}
        </div>
    )
}

export default Topic
