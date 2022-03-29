import React from "react";

export default function divs(props) {
    const customOff = () => {
        return <p>{props.data}</p>
    }

    const customOn = () => {
        return props.data
    }

    return (
        <div className={props.name}>
            <h4>{props.title}</h4>
            {props.custom ? customOn() : customOff()}
        </div>
    )
    }