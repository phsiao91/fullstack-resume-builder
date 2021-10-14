import React, {useState} from "react";

function Account({user}) {

    console.log(user.id)
    const [username, setUsername] = useState("")


    const updateName = (e) => {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
    },
        credentials: 'include',
        body: JSON.stringify({
            username
    }),
})
    .then(res => {
        if (res.ok) {
            return res.json()
            }else {
            return res.json().then(errors => Promise.reject(errors))
        }
    })

}

const handleDeleteUserAccount =(e)=> { 
    e.preventDefault()
    // console.log(sythEvent)
    // console.log("In handleUserLogin")
   


    fetch(`/users/${user.id}`, {

      method: "DELETE"

    })
    .then(r => r.json())
    .then(whoDeletedTheirAccount =>{  console.log("BYEFELICA  >>  ", whoDeletedTheirAccount)  
    })      
  }

    return(
        <div>
            <form onSubmit={updateName}>
                <h2>Update username</h2>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                <button type="submit">Update</button>
            </form>
            <form>
                <button onClick={handleDeleteUserAccount}>Delete Account</button>
            </form>
        </div>
    )
}

export default Account;