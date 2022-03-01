import React from "react";
import "./styles/style.css"
import { gsap } from "gsap";



export default function CardContainer(params) {

    

    return(
        <div className="card-container">
            
            <div class="card" id="card-3" >
                <div className="head" onClick={() => {cardThreeSelect()}}>card3</div>
                <a  className="close" onClick={() => {cardThreeClose()}}>xbutton</a>
            </div>
            <div class="card" id="card-2">Card2</div>
            <div class="card" id="card-1">Card1</div>
        </div>
    )
}

//animation for the cards
var num = -25;
var pos = num+'vh'
const tl = gsap.timeline();

const ani = () => {
    tl.to("#card-3",{ 
        y: pos,
    }); 
    return tl
};

//card 3
function cardThreeSelect(){
    ani().play()
}

function cardThreeClose(){
    ani().reverse()
}