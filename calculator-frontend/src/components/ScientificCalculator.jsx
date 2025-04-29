import React, { useState, useEffect } from 'react';

// Safe evaluation function using Function constructor
const evaluateExpression = (expr) => {
    try {
        // Replace ^ with ** for exponentiation
        const safeExpr = expr
            .replace(/√/g, 'Math.sqrt')
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/\^/g, '**');

        // Evaluate safely
        const result = Function('"use strict";return (' + safeExpr + ')')();
        return result.toString();
    } catch {
        return "Error";
    }
};

const ScientificCalculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleCalculate = () => {
        const result = evaluateExpression(input);
        setInput(result);
    };

    const handleClear = () => {
        setInput("");
    };

    // Keyboard support
    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;

            if (/[0-9+\-*/().]/.test(key)) {
                setInput((prev) => prev + key);
            } else if (key === "Enter") {
                handleCalculate();
            } else if (key === "Escape") {
                handleClear();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div>
            <input type="text" value={input} readOnly />
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
                    <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>
                ))}
                {['+', '-', '*', '/'].map((op) => (
                    <button key={op} onClick={() => handleClick(op)}>{op}</button>
                ))}
                <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button onClick={() => handleClick('Math.sqrt(')}>√</button>
                <button onClick={() => handleClick('^')}>^</button>
                <button onClick={() => handleClick('sin(')}>sin</button>
                <button onClick={() => handleClick('cos(')}>cos</button>
                <button onClick={() => handleClick('tan(')}>tan</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default ScientificCalculator;
