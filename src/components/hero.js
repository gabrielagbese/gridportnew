import React from "react";
import Popbutton from "./popbutton";
import "./styles/style.css"


export default function Hero(props) {
    return(
        <div className="hero">
            <div className="text-wrapper">
                <div className="name-container">
                    <p className="text-white name">Gabriel</p>
                    <p className="text-white surname"><u className="stroke">Agbese.</u></p>
                </div>
                <p className="text-white job-title"> Frontend Developer</p>
                <p className="text-white sub-heading">Open to exploring <strong><span class="letter-changer"></span><span class="accessibility"><s>Part-Time</s>Internship</span></strong><br/> opportunities</p>
                
                {/* <div className="cta-container">
                    <Popbutton color = "green" height = "3" width = "7" text = "Projects &#8599;"/>
                    <Popbutton color = "orange" height = "3" width = "7" text = "About &#8599;"/>
                </div> */}

            </div>
        </div>
    )
}
/*<a className="stroke">Creative</a>*/