import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function Social() {

    const [quote, setQuote] = useState([])
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")

    const history = useHistory()

    const routeChange = () => {
        let path = "/resumes"
        history.push(path)
    }

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(fetchedQuote => {console.log(fetchedQuote)
            let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

        setQuote(randomQuote)

    })
    }
    useEffect(getQuote, [])

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/socials", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    facebook,
                    instagram,
                    twitter,
                    linkedin
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    .then(setFacebook(""), setInstagram(""), setTwitter(""), setLinkedin(""))
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Socials</h1>
                    <label htmlFor="name">Facebook</label>
                    <input 
                        type="text"
                        name="facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}/>
                    <label>Instagram</label>
                    <input 
                        type="text"
                        name="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}/>
                    <label>Twiter</label>
                    <input 
                        type="text"
                        name="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}/>
                    <label>Linkedin</label>
                    <input 
                        type="text"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}/>
                    <button type="submit">Save</button>
            <p className="route">
                <button className="router" onClick={routeChange} >Your Resume is ready!!</button>
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

export default Social