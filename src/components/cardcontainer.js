import React from "react";
import "./styles/style.css"
import { gsap } from "gsap";



export default function CardContainer(params) {

    

    return(
        <div className="card-container">
            
            <div class="card" id="card-3" onClick={() => {cardSelect(3)}}>
                card 3
            </div>
            <div class="card" id="card-2" onClick={() => {cardSelect(2)}}>
                card 2
            </div>
            <div class="card" id="card-1" onClick={() => {cardSelect(1)}}>
                card 1
            </div>
        </div>
    )
}

//animation for the cards

//activation state of selected card
let isActivated = false;


//individual timelines for each card's activation and deactivation
var tl1 =  gsap.timeline();
var tl2 =  gsap.timeline();
var tl3 =  gsap.timeline();


//card animation instructions
const ani = (a) => {
    if(isActivated == true){
        reverseTimelines()
    }else{
        const id = "#card-"+ a;
        switch (a) {
            case 1:
                tl1.to(id, { y: -60+'vh',}); 
                return tl1
            case 2: 
                tl2.to(id, { 
                    y: -50+'vh',
                });
                tl2.to("#card-1", {y: 10+'vh',})
                return tl2
            case 3:
                tl3.to("#card-2", { 
                    y:10+'vh',
                });
                tl3.to("#card-1", {y: 10+'vh',})
                tl3.to(id, { 
                    y: -20+'vh',
                });
                return tl3
            default:
                break;
        }
    }
};

//reversal of card activation animation 
function reverseTimelines(tl) {
    switch (tl) {
        case 1:
            tl1.reverse()
            console.log(tl+" reversed")
            break;
        case 2:
            tl2.reverse()
            console.log(tl+" reversed")
            break;
        case 3:
            tl3.reverse()
            console.log(tl+" reversed")
            break;
        default:
            tl1.reverse()
            tl2.reverse()
            tl3.reverse()
            console.log("all reversed")
            break;
    }
}



function cardSelect(b){
    isActivated ? reverseTimelines() : ani(b).play();
    isActivated = !isActivated;
    
}
