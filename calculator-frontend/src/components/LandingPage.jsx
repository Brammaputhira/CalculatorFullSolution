import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Welcome to Multi Calculator App</h1>
            <p>Please choose an option:</p>
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );
};

export default LandingPage;
