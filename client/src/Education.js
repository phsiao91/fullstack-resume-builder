import React, {useState, useEffect} from "react";
// import DatePicker from 'react-date-picker';
// import { useHistory } from "react-router-dom";


function Education() {

    // const history = useHistory()

    // const routeChange = () => {
    //     let path = "/resumes"
    //     history.push(path)
    // }

    const [school, setSchool] = useState("")
    const [degree, setDegree] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")
    const [quote, setQuote] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        // const wh = {title,
        //     company,
        //     start_date,
        //     endDate}
        //     console.log(wh)
            fetch("/educations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    school,
                    degree,
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

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(fetchedQuote => {console.log(fetchedQuote)
            let randomQuote = fetchedQuote[Math.floor(Math.random() * fetchedQuote.length)]

        setQuote(randomQuote)

    })
    }
    useEffect(getQuote, [])

    console.log(quote)



    return(

        <div>
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Education</h1>
                    <label htmlFor="title">school</label>
                    <input 
                        type="text"
                        name="school"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}/>
                    <label>degree</label>
                    <input 
                        type="text"
                        name="degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}/>
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
                    {/* <p className="route">
                        <button className="router" onClick={routeChange} >Your resume is ready</button>
                    </p>    */}
                </form>
        </div>
    )
}

export default Education