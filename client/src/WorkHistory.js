import React, {useState, useEffect} from "react";
// import DatePicker from 'react-date-picker';
import { useHistory } from "react-router-dom";


function WorkHistory() {

    const history = useHistory()

    const routeChange = () => {
        let path = "/educations"
        history.push(path)
    }

    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState("")
    const [details, setDetails] = useState("")
    const [quote, setQuote] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        // const wh = {title,
        //     company,
        //     start_date,
        //     endDate}
        //     console.log(wh)
            fetch("/workhistories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    title,
                    company,
                    start_date,
                    end_date
                }),
            }).then(res => {
                if (res.ok) {
                    return res.json()
                    }else {
                    return res.json().then(errors => Promise.reject(errors))
                    }
                })
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                details
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


    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <h1>Work History</h1>
                    <label htmlFor="title">title</label>
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    <label>company</label>
                    <input 
                        type="text"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}/>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                        />
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}/>
                    <button type="submit">Save</button>
            </form>
            <div>
                <form onSubmit= {taskSubmit}>
                    <label>tasks</label>
                        <input 
                        type="text"
                        name="tasks"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}/>
                    <button type="submit">Save</button>
                    <p className="route">
                        <button className="router" onClick={routeChange} >Next Education</button>
                    </p>
                </form>
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

export default WorkHistory