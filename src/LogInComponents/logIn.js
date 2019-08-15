import React from 'react'

const logIn = (props) => {
    return (
        <div>
            <input id = 'username' placeholder='username' type='text'/>
            <br/>
            <input id = 'password' placeholder='password' type='password'/>
            <br/>
            <button id = 'login'>Log in</button>
        </div>
    )

}

export default logIn