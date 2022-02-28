import React from "react";
import "./styles/style.css"
import Hero from "./hero";
import CardContainer from "./cardcontainer";

export default function Container(params) {
    return(
        <div className="container">
            <Hero />
            <CardContainer />
        </div>
    )
}