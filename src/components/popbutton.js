import React from "react";
import "./styles/style.css"

export default function Popbutton(props) {

    const highlightColor = props.color; 
    const styles = {
        border: '1px solid ' + highlightColor,
        marginBottom: '-2.75em',     
   };
    
    return(
        <div class="box-button">
            <div class="box white"  style={styles}></div>
            <div class="box black"></div>
        </div>
    )
}