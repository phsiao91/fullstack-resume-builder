import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
// import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapSigns, faEnvelope, faMobileAlt, faFutbol, faGamepad, faMusic, faHiking, faGem } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faHtml5, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'



function Hobby() {

    const [description, setDescription] = useState("")
    const [description1, setDescription1] = useState("")
    const [description2, setDescription2] = useState("")
    const [description3, setDescription3] = useState("")
    const [quote, setQuote] = useState([])

    let icons = [faMapSigns, faEnvelope, faMobileAlt, faFutbol, faGamepad, faMusic, faHiking, faGem, faGithub, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faHtml5, faReact, faJsSquare ]

    const mapIcons = () => {
        let mappedIcons = icons.map(eachIcon =>{
            // console.log(eachTask.details)
            return (<FontAwesomeIcon className="icon" icon={eachIcon} />)
        })
        // console.log(mappedTasks[0])
        return mappedIcons
        
    }


    const history = useHistory()

    const routeChange = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
            fetch("/hobbies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    description,
                    description1,
                    description2,
                    description3
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setDescription(""), setDescription1(""), setDescription2(""), setDescription3(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }

    const handleClick = (click) => {
        // setDescription = click
        console.log(click)
    }

    return(
        <div className="hobby">
            <form onSubmit={handleSubmit}>
                <div onClick={handleClick}>{mapIcons()}</div>
                <h1>Hobbies</h1>
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
                    <button type="submit">Save</button>
            <p className="route">
                <button className="router" onClick={routeChange} >Next Socials</button>
            </p>
            </form>
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