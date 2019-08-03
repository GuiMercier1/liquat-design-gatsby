import React from "react"

import "./timeline.css"

function Timeline(props) {

    const alternate = props.alternate === true;

    const steps = props.elements.map((element, index) => {

        const directionClass = alternate ? (index % 2 === 0 ? "direction-l" : "direction-r") : "direction-r";

        return (
            <li key={element.key}>
                <div className={directionClass}>
                    <div className="flag-wrapper">
                        <span className="flag">{element.title}</span>
                        <span className="time-wrapper">
                            <span className="time">{element.date}</span>
                        </span>
                    </div>
                    <div className="desc">{element.description}</div>
                </div>
            </li>
        );
    });

    return (
        <div className="timeline">
            {steps}
        </div>
    )
}

export default Timeline
