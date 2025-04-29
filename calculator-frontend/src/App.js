import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MainCalculatorMenu from "./components/MainCalculatorMenu";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Import the LandingPage
import { useAuth } from "./components/AuthContext";

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Routes>
                {/* Landing Page for unauthenticated users */}
                <Route
                    path="/"
                    element={!isAuthenticated ? <LandingPage /> : <Navigate to="/main" />}
                />
                {/* Login Page */}
                <Route
                    path="/login"
                    element={!isAuthenticated ? <Login /> : <Navigate to="/main" />}
                />
                {/* Register Page */}
                <Route
                    path="/register"
                    element={!isAuthenticated ? <Register /> : <Navigate to="/main" />}
                />
                {/* Main Calculator Menu (Protected Route) */}
                <Route
                    path="/main"
                    element={isAuthenticated ? <MainCalculatorMenu /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
};

export default App;
