import React from "react";
import Avatar from "./avatar";
import Details from "./Details";

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h3 className="name">{props.name}</h3>
                    <Avatar img={props.img} />
                </div>
                <Details tell={props.tell} email={props.email}/>
            </div>
        </div>

    )
}

export default Card