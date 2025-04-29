// Calculator.js

import React, { useState } from "react";

// API call function inside the same file or you can import if needed
const API_URL = "http://localhost:5000/api/calculator/calculate";

const calculateApi = async (firstOperand, secondOperand, operation) => {
    const response = await fetch(API_URL, { // Remove curly braces around API_URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstOperand, secondOperand, operation })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};


const Calculator = () => {
    const [firstOperand, setFirstOperand] = useState("");
    const [secondOperand, setSecondOperand] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await calculateApi(Number(firstOperand), Number(secondOperand), operation);
            setResult(res.result); // Access the 'result' property
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div style={{ margin: "30px" }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={firstOperand}
                    onChange={(e) => setFirstOperand(e.target.value)}
                    placeholder="First Operand"
                    required
                />
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input
                    type="number"
                    value={secondOperand}
                    onChange={(e) => setSecondOperand(e.target.value)}
                    placeholder="Second Operand"
                    required
                />
                <button type="submit">Calculate</button> {/* 👈 type="submit" inside <form> */}
            </form>

            {result !== null && <h3>Result: {result}</h3>}
            {error && <h4 style={{ color: 'red' }}>{error}</h4>}
        </div>
    );
};

export default Calculator;
