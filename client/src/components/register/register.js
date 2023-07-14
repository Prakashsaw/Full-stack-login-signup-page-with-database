import { useState } from 'react';
import React from "react";
import './register.css';
import axios from 'axios';

const Register = () => {

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(name, value);
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const register = (e) => {
    //     e.preventDefault();
    //     // const { name, email, password, confirmPassword } = user;
    //     axios.post("http://localhost:5000/register", user)
    //     .then((res) => {
    //         console.log(res)
    //     });
        
    // }

    return (
        <div>
            {/* {console.log("User", user)}
            <form className="register">
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Enter your valid Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
                <input type="password" name="confirmPassword" value={user.confirmPassword} placeholder="Enter Confirm Password" onChange={handleChange}></input>
                <div className="button" onClick={register}>Register</div>
                <div>OR</div>
                <div className="button">Already have an Account? Sigh In</div>
            </form> */}
            Welcome to Register...
        </div>
    )
}

export default Register;