import React, {useState, useEffect} from "react";
// import { useHistory } from "react-router-dom";
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hobby from "./Hobby";


function Icon () {


    const hobbyClick = (click) => {
        <FontAwesomeIcon class="icon" icon={faFutbol}/>
        console.log(click)
    }


    return(
        <div>
            <Hobby renderHobby={hobbyClick}/>
        </div>
    )
}


export default Icon