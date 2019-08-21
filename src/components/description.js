import React from "react";
import '../css/app.scss';
import '../css/header.scss';

function Description(props) {
    const description = props.description;
    return (
        <div className="description-wrapper">
            <h2>Player Info</h2>
            <p>{description}</p>
        </div>
    );
}
export default Description;