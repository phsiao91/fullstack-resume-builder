import React, {useState} from "react";
import {faBiking, faPlane, faBook, faFutbol, faGamepad, faMusic, faHiking, faDumbbell, faRunning, faSwimmer, faSnowboarding, faRibbon, faCamera, faPalette, faChess } from '@fortawesome/free-solid-svg-icons'
import { faXbox } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "./Icon";


function IconNew({iconToProcess}) {

    console.log(iconToProcess)

    const newIcon = [
        {realIcon: faFutbol, textIcon: "faFutbol" },
        {realIcon: faHiking, textIcon: "faHiking" },
        {realIcon: faGamepad, textIcon: "faGamepad" },
        {realIcon: faMusic, textIcon: "faMusic" },
        {realIcon: faBiking, textIcon: "faBiking" },
        {realIcon: faPlane, textIcon: "faPlane" },
        {realIcon: faBook, textIcon: "faBook" },
        {realIcon: faDumbbell, textIcon: "faDumbbell" },
        {realIcon: faRunning, textIcon: "faRunning" },
        {realIcon: faSwimmer, textIcon: "faSwimmer" },
        {realIcon: faSnowboarding, textIcon: "faSnowboarding" },
        {realIcon: faRibbon, textIcon: "faRibbon" },
        {realIcon: faCamera, textIcon: "faCamera" },
        {realIcon: faChess, textIcon: "faChess" },
        {realIcon: faPalette, textIcon: "faPalette" },
        {realIcon: faXbox, textIcon: "faXbox" },

    ]

    const mapHobbies = () => {
        let mappedIcons = newIcon.map(eachIcon =>{ 
            
            console.log(eachIcon)
            if (eachIcon.textIcon == iconToProcess.description){
                return(  
                    <div className="li_wrap">
                        <div className="icon">
                            <FontAwesomeIcon icon={eachIcon.realIcon}/>
                        </div>
                    </div>
    

                )
            }
            // let hob = eachIcon.realIcon.charAt(0).toUpperCase() + eachIcon.realIcon.slice(1)
            // console.log(hob)
            // return (<Icon iconToRender={eachIcon} />)

        })
        // console.log(mappedTasks[0])
        return mappedIcons
        
    }

    // const mapAllHobbies = () => {
    //     let mappedHobbies = newIcon.map(eachHobby => {
    //         console.log(newIcon)
    //         return( <Icon iconNew={eachHobby.textIcon}/>)
    //     })
    //     return mappedHobbies
    // }

    return(
        <div>
            {mapHobbies()}
        </div>
    )
}

export default IconNew;