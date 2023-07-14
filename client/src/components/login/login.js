import {useState} from 'react';
import React from "react";
import './login.css';
import axios from 'axios';
const Login = () => {

//     const [ user, setUser] = useState({
//         email: "", 
//         password: "", 
//     })

//     const handleChange = e => {
//         const {name, value } = e.target;
//         console.log(name, value);
//         setUser ({
//             ...user,
//             [name]: value
//         })
//     }

    // const login = () => {
    //     axios.post("http://localhost:5000/login", user)
    //     .then((res) => console.log(res))
    //     .catch((error) => console.error("Login error:", error.message));
    // }

    return (
        <div className="login">
            {/* {console.log("User", user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input> 
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={ handleChange }></input> 
            <div className="button">Login</div>
            <div>OR</div>
            <div className="button" onClick={login}>Don't have an Account? Sign Up</div> */}
            Welcome to login page
        </div>
    )
}

export default Login;