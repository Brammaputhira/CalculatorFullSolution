import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import useAuth
import SimpleCalculator from "./SimpleCalculator";
import ScientificCalculator from "./ScientificCalculator";
import Calculator from "./Calculator";

const MainCalculatorMenu = () => {
    const [selectedCalculator, setSelectedCalculator] = useState("simple");
    const navigate = useNavigate();
    const { isAuthenticated, username, logout } = useAuth(); // Access username
    console.log("Username in MainCalculatorMenu:", username); 

    const renderCalculator = () => {
        if (selectedCalculator === "simple") return <SimpleCalculator />;
        if (selectedCalculator === "scientific") return <ScientificCalculator />;
        if (selectedCalculator === "api") return <Calculator />;
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Multi Calculator App</h1>
            {isAuthenticated && <p>Welcome, {username}!</p>} {/* Display username */}
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => setSelectedCalculator("simple")}>Simple Calculator</button>
                <button onClick={() => setSelectedCalculator("scientific")}>Scientific Calculator</button>
                <button onClick={() => setSelectedCalculator("api")}>API Calculator</button>
            </div>
            {isAuthenticated && ( // Show Logout button for authenticated users
                <div style={{ marginBottom: "20px" }}>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
            {renderCalculator()}
        </div>
    );
};

export default MainCalculatorMenu;
