import React from "react";
import "./styles/style.css"
import { gsap } from "gsap";


export default function CardContainer(params) {


    return(
        <div className="card-container">
            
            <div className="card" id="card-3" >
                <div onClick={() => {cardSelect(3)}}>card 3</div>
                <p class="close" onClick={() => reverseTimelines(3)}>XX</p>
            </div>
            <div className="card" id="card-2">
            <div onClick={() => {cardSelect(2)}}>card 2</div>
                <p class="close" onClick={() => reverseTimelines(2)}>XX</p>
            </div>
            <div className="card" id="card-1">
            <div onClick={() => {cardSelect(1)}}>card 1</div>
                <p class="close" onClick={() => reverseTimelines(1)}>XX</p>
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
    console.log( a + "Activated")

    if(window.innerWidth >= 720){
        //desktop screens
        switch (a) {
            case 1:
                tl1.to("#card-1", { y: -70+'vh',}); 
                return tl1
            case 2: 
                tl2.to("#card-2", { 
                    y: -60+'vh',
                });
                tl2.to("#card-1", {y: 10+'vh',})
                return tl2
            case 3:
                tl3.to("#card-2", { 
                    y:10+'vh',
                });
                tl3.to("#card-1", {y: 10+'vh',})
                tl3.to("#card-3", { 
                    y: -30+'vh',
                });
                return tl3
            default:
                break;
        }

    }else{
        //mobile screens
        switch (a) {
            case 1:
                tl1.to("#card-1", { y: -70+'vh',}); 
                return tl1
            case 2: 
                tl2.to("#card-2", { 
                    y: -60+'vh',
                });
                tl2.to("#card-1", {y: 10+'vh',})
                return tl2
            case 3:
                tl3.to("#card-3", { y: -40+'vh',});
                tl3.to("#card-2", { y:10+'vh',});
                tl3.to("#card-1", {y: 10+'vh',})
                return tl3
            default:
                break;
        }

    }
    
};

//reversal of card activation animation 
function reverseTimelines(a) {
    switch (a) {
        case 1:
            tl1.timeScale(2).reverse()
            break;
        case 2:
            tl2.timeScale(2).reverse()
            break;
        case 3:
            tl3.timeScale(2).reverse()
            break;
        default:
            tl3.timeScale(2).reverse()
            tl2.timeScale(2).reverse()
            tl1.timeScale(2).reverse()
            break;
    }
    console.log(a) 
}

let oldVal;

function cardSelect(b){
    if (oldVal != null && (b != oldVal && isActivated == true)){
        //at the time of pause, it was discovered that thhe reverse below is logging reverse, but not actually reversing, 
        //"fired is also being logged, so it does reach"
        //reverseTimelines("fired1");
        console.log("fired2")
        ani(b).play()
        return
        
    }else{
        ani(b).play();
        isActivated = !isActivated;
    }
    oldVal = b;
    
}

//todo tomorrow
//add content
//change font

