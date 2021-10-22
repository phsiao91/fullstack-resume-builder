import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
// import { faFutbol } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBiking, faPlane, faBook, faFutbol, faGamepad, faMusic, faHiking, faDumbbell, faRunning, faSwimmer, faSnowboarding, faRibbon, faCamera, faPalette, faChess } from '@fortawesome/free-solid-svg-icons'
// import { faXbox, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faHtml5, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import Icon from "./Icon";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";


function Hobby() {

    const [quote, setQuote] = useState([])

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

    const mapIcons = () => {
        let mappedIcons = newIcon.map(eachIcon =>{ 
            // console.log(eachTask.details)
            return (
                    <div className="hobby_dark">
                        <ul>
                            <div className="li_wrap">
                                <div className="icon">
                                    <Icon iconToRender={eachIcon} />
                                </div>
                            </div>
                        </ul>
                    </div>)
            // return (<FontAwesomeIcon className="icon" icon={eachIcon} />)
        })
        // console.log(mappedTasks[0])
        return mappedIcons
        
    }



    const history = useHistory()

    let next = () => {
        let path = "/resumes"
        history.push(path)
    }

    let back = () => {
        let path = "/socials"
        history.push(path)
    }

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(fetchedQuote => {
            let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

        setQuote(randomQuote)

    })
    }
    useEffect(getQuote, [])

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //         fetch("/hobbies", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             credentials: "include",
    //             body: JSON.stringify({
    //                  description: iconToRender.iconName }
                    
    //             ),
    //         }).then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //                 .then(setDescription(""), setDescription1(""), setDescription2(""), setDescription3(""))
    //                 }else {
    //                 return res.json().then(errors => Promise.reject(errors))
    //                 }
    //             })
    // }

    // const handleClick = (synthEvent) => {
    //     // setDescription = click
    //     console.log(synthEvent.target)
    // }

    return(
        <div className="hobby">
            <h1>Hobbies</h1>
            {/* <form > */}
                {/* <div onClick={handleClick}> */}
                    {mapIcons()}
                    {/* </div> */}
                {/* <h1>Hobbies</h1>
                    <label htmlFor="name"></label>
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                    <label></label>
                    <input 
                        type="text"
                        name="description1"
                        value={description1}
                        onChange={(e) => setDescription1(e.target.value)}/>
                        <input 
                        type="text"
                        name="description2"
                        value={description2}
                        onChange={(e) => setDescription2(e.target.value)}/>
                        <input 
                        type="text"
                        name="description3"
                        value={description3}
                        onChange={(e) => setDescription3(e.target.value)}/>
                    <button type="submit">Save</button>*/} 
            <div className="flow">
                <div class="multi-button">
                    <button onClick={back}>Back</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <h2>{quote.text}</h2>
                    <h4>{quote.author}</h4>
                </div>
            </div>
        </div>
    )
}

export default Hobby