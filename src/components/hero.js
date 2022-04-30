import React from "react";
import { gsap } from "gsap";
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

const b1 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";
const b2 = "linear-gradient(17deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%), linear-gradient(200deg, rgba(0, 255, 0, .9), rgba(0,255,0,.2) 70.71%),  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0.1) 70.71%)";
gsap.fromTo("#a", {width:300, height:200, background: b1}, {ease: "none", duration: 6, background: b2, repeat: -1, yoyo: true});

/*<a className="stroke">Creative</a>*/

/**/