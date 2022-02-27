import React from "react";
import Popbutton from "./popbutton";
import "./styles/style.css"


export default function Hero(props) {
    return(
        <div className="hero">
            <h1 className="text-white">Gabriel Agbese</h1>
            <h1 className="text-white"></h1>
            <h2 className="text-white">Creative Frontend Developer.</h2>
            <h4 className="text-white">Open to exploring part-time opportunities</h4>
            <div className="cta-container">
                <Popbutton color = "green"/>
                <Popbutton color = "orange"/>
            </div>
        </div>
    )
}