import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Homepage = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="homepage">
            <h1>Welcome to Homepage!</h1>
            
        </div>
    )
}

export default Homepage;