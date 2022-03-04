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

    if(window.innerWidth >= 720){
        //desktop screens
        switch (a) {
            case 1:
                tl1.to("#card-1", { y: -60+'vh',}).timeScale(1.0); 
                return tl1
            case 2: 
                tl2.to("#card-2", { 
                    y: -50+'vh',
                });
                tl2.to("#card-1", {y: 10+'vh',}).timeScale(1.0)
                return tl2
            case 3:
                tl3.to("#card-2", { 
                    y:10+'vh',
                });
                tl3.to("#card-1", {y: 10+'vh',}).timeScale(1.0)
                tl3.to("#card-3", { 
                    y: -20+'vh',
                });
                return tl3
            default:
                break;
        }

    }else{
        //mobile screens
        switch (a) {
            case 1:
                tl1.to("#card-1", { y: -70+'vh',}).timeScale(1.0); 
                return tl1
            case 2: 
                tl2.to("#card-2", { 
                    y: -60+'vh',
                });
                tl2.to("#card-1", {y: 10+'vh',}).timeScale(1.0)
                return tl2
            case 3:
                tl3.to("#card-2", { y:10+'vh',});
                tl3.to("#card-1", {y: 10+'vh',}).timeScale(1.0)
                tl3.to("#card-3", { y: -40+'vh',});
                return tl3
            default:
                break;
        }

    }
};

//reversal of card activation animation 
function reverseTimelines(b) {

    tl1.timeScale(2).reverse()
    tl2.timeScale(2).reverse()
    tl3.timeScale(2).reverse()
    console.log("all reversed") 
}


function cardSelect(b){
    isActivated ? reverseTimelines() : ani(b).play();
    isActivated = !isActivated;
    
}

