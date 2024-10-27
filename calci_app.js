// src/App.js
import React, { useState } from 'react';
import './App.css'; // Optional: Add some basic CSS styling

const App = () => {
    // State to store the current input and result
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    // Function to handle button clicks
    const handleClick = (value) => {
        setInput(input + value); // Append the clicked value to the input
    };

    // Function to clear the input and result
    const clear = () => {
        setInput('');
        setResult(0);
    };

    // Function to calculate the result using eval()
    const calculate = () => {
        try {
            setResult(eval(input)); // Calculate the result (use eval with caution)
        } catch (error) {
            setResult('Error'); // Handle invalid input
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <div className="display">
                <input type="text" value={input} readOnly />
                <h2>Result: {result}</h2>
            </div>

            <div className="buttons">
                {/* Render number and operator buttons */}
                {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '/', '='].map((button, index) => (
                    <button
                        key={index}
                        onClick={() => (button === '=' ? calculate() : handleClick(button))}
                    >
                        {button}
                    </button>
                ))}

                <button onClick={clear}>Clear</button>
            </div>
        </div>
    );
};

export default App;
