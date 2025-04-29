import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(""); // Add username state

    const login = (username) => {
        console.log("Setting username in AuthContext:", username); // Debugging log
        setIsAuthenticated(true);
        setUsername(username); // Store the username
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername(""); // Clear the username
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

