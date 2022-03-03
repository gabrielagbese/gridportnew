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

//activation state of selected card
let isActivated = false;


//individual timelines for each card
var tl1 =  gsap.timeline();
var tl2 =  gsap.timeline();
var tl3 =  gsap.timeline();

//reversal of card activation animation 
function reverseTimelines(tl) {
    switch (tl) {
        case 1:
            tl1.reverse()
            break;
        case 2:
            tl2.reverse()
            break;
        case 3:
            tl3.reverse()
        break;
        default:
            break;
    }
}

//card animation instructions
const ani = (a) => {
    if(isActivated == true){
        reverseTimelines()
        ani(a).play()
    }else{
        const id = "#card-"+ a;
        switch (a) {
            case 1:
                var num = -35;
                var pos = num+'vh'
                tl1.to(id, { y: pos,}); 
                return tl1
            case 2: 
                var num = -25;
                var pos = num+'vh'
                tl2.to("#card-1", {y: 150,})
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
    }
};


function cardSelect(b){
    isActivated ? reverseTimelines(b) : ani(b).play();
    isActivated = !isActivated;
    
}
