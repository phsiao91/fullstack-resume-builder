import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function Language() {

    const history = useHistory()

    const routeChange = () => {
        let path = "/socials"
        history.push(path)
    }

    const [expertise, setExpertise] = useState("")
    const [rating, setRating] = useState("")
    const [quote, setQuote] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/languages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    expertise,
                    rating
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
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

    // console.log(quote)


    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <h1>Software Languages</h1>
                    <label htmlFor="name">Language</label>
                    <input 
                        type="text"
                        name="expertise"
                        value={expertise}
                        onChange={(e) => setExpertise(e.target.value)}/>
                    <label>Percentage of Competence</label>
                    <input 
                        type="text"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}/>
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

export default Language