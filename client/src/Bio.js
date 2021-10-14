import React, { useState, useEffect }  from 'react'
// import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
// import {useNavigate} from 'react-router-dom';


function Bio() {

    // const navigate = useNavigate();
    // navigate('/workhistories')

    let history = useHistory()

    let routeChange = () => {
        let path = "/workhistories"
        history.push(path)
    }

    // const [bios, setBios] = useState([])
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [image, setImage] = useState("")
    const [quote, setQuote] = useState([])


    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
            fetch("/bios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    image,
                    name,
                    address,
                    phone,
                    email,
                    linkedin
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

    // let allQuotes = quote[Math.floor(Math.random() * quote.length)];

    console.log(quote)

    // const randomChoice = arr => {
    //     const randIndex = Math.floor(Math.random() * arr.length);
    //     return arr[randIndex];
    // };

//     fetch("https://type.fit/api/quotes")
//         .then(function(response) {
//             return response.json();
//     })
//         .then(function(data) {
//             console.log(data);
//   });




    return(
        <div className="bioForm">
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Bio</h1>
                <label htmlFor="image">image</label>
                    <input 
                        type="text"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}/>
                    <label htmlFor="name">name</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <label>address</label>
                    <input 
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                    <label>phone</label>
                    <input 
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    <label>email</label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <label>linkedin</label>
                    <input 
                        type="text"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}/>
                    <button type="submit" >Save</button>
                <p className="route">
                    <button className="router" onClick={routeChange} >Next Work History</button>
                </p>
            </form>
            
        </div>
    )
}

export default Bio;