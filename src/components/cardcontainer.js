import React from "react";
import "./styles/style.css"
import { gsap } from "gsap";



export default function CardContainer(params) {

    

    return(
        <div className="card-container">
            
            <div class="card" id="card-3" onClick={() => {cardSelect(3)}}>
            </div>
            <div class="card" id="card-2" onClick={() => {cardSelect(2)}}>
            </div>
            <div class="card" id="card-1" onClick={() => {cardSelect(1)}}>
            </div>
        </div>
    )
}

//animation for the cards

var tl1 =  gsap.timeline();
var tl2 =  gsap.timeline();
var tl3 =  gsap.timeline();

const ani = (a) => {
    const id = "#card-"+ a;
    switch (a) {
        case 1:
            var num = -35;
            var pos = num+'vh'
            tl1.to("#card-1", { y: pos,}); 
            tl2.to("#card-2", {y: -50,})
            return tl1
        case 2: 
            var num = -25;
            var pos = num+'vh'
            tl2.to(id, { 
                y: pos,
            }); 
            return tl2
        case 3:
            var num = -15;
            var pos = num+'vh'
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
function reverseTimelines() {
    tl1.reverse()
    tl2.reverse()
    tl3.reverse()
}

function cardSelect(b){
    isActivated ? reverseTimelines() : ani(b).play();
    isActivated = !isActivated;
    
}
