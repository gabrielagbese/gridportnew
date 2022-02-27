import React from "react";
import "./styles/style.css"

export default function Popbutton(props) {

    const highlightColor = props.color; 
    const margin = -props.height-.25;

    const highlightStyles = {
        border: '1px solid ' + highlightColor,
        marginBottom: margin+'em', 
        width: props.width+'em',
        height: props.height+'em',    
   };

   const whiteStyles = {
    border: '1px solid white',
    width: props.width+'em',
    height: props.height+'em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',  
   };

    
    return(
        <div class="box-button">
            <div class="box colored "  style={highlightStyles}></div>
            <div class="box white text-white" style={whiteStyles}>{props.text}</div>
        </div>
    )
}