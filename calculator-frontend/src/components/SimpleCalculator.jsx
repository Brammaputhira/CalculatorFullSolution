import React, { useState } from 'react';

const SimpleCalculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    const handleClear = () => {
        setInput("");
    };

    return (
        <div>
            <input type="text" value={input} readOnly />
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
                    <button key={n} onClick={() => handleClick(n)}>{n}</button>
                ))}
                {['+', '-', '*', '/'].map((op) => (
                    <button key={op} onClick={() => handleClick(op)}>{op}</button>
                ))}
                <button onClick={handleCalculate}>=</button>
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default SimpleCalculator;
