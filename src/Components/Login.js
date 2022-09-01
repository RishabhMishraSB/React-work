import React from 'react';
import './Login.css'

function Login() {
    return (
        <div id='body'>
            <h1 id='head'>LOGIN</h1>
            <input type='text' id='email' placeholder='Enter your Email'></input>
            <br></br>
            <input type='password' id='pass' placeholder='Enter your Password'></input>
            <div>
                <button id='login-btn'>Login</button>
            </div>

        </div>
    );
}

export default Login;