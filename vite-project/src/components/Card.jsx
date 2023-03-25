import React from 'react'
import "./Card.css"

function Card(user){
    console.log(user.newUser.Name);

    return (
        <div className="Card">
            <p>Name : {user.newUser.Name}</p>
            <p>Job : {user.newUser.Job}</p>
            <p>Hobby : {user.newUser.Hobby}</p>
        </div>
    )
}
export default Card