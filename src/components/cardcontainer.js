import React from "react";
import "./styles/style.css"
import { gsap } from "gsap";



export default function CardContainer(params) {

    

    return(
        <div className="card-container">
            
            <div class="card" id="card-3" >
                <div className="head" onClick={() => {cardSelect(3)}}>card3</div>
                <a  className="close" onClick={() => {cardSelect(3)}}>x button</a>
            </div>
            <div class="card" id="card-2">
                <div className="head" onClick={() => {cardSelect(2)}}>card2</div>
                <a  className="close" onClick={() => {cardSelect(2)}}>x button</a>
            </div>
            <div class="card" id="card-1">
                <div className="head" onClick={() => {cardSelect(1)}}>card1</div>
                <a  className="close" onClick={() => {cardSelect(1)}}>x button</a>
            </div>
        </div>
    )
}

//animation for the cards
var num = -25;
var pos = num+'vh'
var tl1 = new gsap.timeline();
var tl2 = new gsap.timeline();
var tl3 = new gsap.timeline();

const ani = (a) => {
    const id = "#card-"+ a;
    switch (a) {
        case 1:
            tl1.to(id, { 
                y: pos,
            }); 
            return tl1
        case 2: 
            tl2.to(id, { 
                y: pos,
            }); 
            return tl2
        case 3:
            case 2: 
            tl3.to(id, { 
                y: pos,
            }); 
            return tl3
        default:
            break;
    }
};


let isActivated = false;

function cardSelect(b){
    isActivated ? ani(b).reverse() : ani(b).play();
    isActivated = !isActivated;
    
}
