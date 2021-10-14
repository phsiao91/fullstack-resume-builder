import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function Intro() {

    // const history = useHistory()

    // const routeChange = () => {
    //     let path = "/bios"
    //     history.push(path)
    // }

    const [summary, setSummary] = useState("")
    const [quote, setQuote] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/introductions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    summary
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
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Summary</h1>
                
                    <label htmlFor="summary">Professional summary</label>
                            <input
                            className="summary"
                            type="text"
                            name="summary"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}/>
                        {/* <Link to="/workhistories"> */}
                        <button type="submit">Save</button>
                        {/* </Link> */}
                        
                    {/* <p className="route">
                        <button className="router" onClick={routeChange} >Next Bio</button>
                    </p> */}
            </form>
        </div>
    )
}

export default Intro