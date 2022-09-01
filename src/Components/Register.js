import React from 'react';
import './Register.css' 
function Register() {

    return (
        <div id='main'>
            <h1 id='regis'>REGISTER</h1>
         
            <input id='email' type='text' placeholder='Enter your Email'></input>
            <br></br>
            <input id='pass' type='password' placeholder='Enter your Password'></input>
            <br></br>
            <input id='phone' type='number' placeholder='Enter your Mobile'></input>
            <div>
                <button id='regis-btn'>Register</button>
            </div>
        </div>
    );
}

export default Register;