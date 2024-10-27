// src/App.js
import React, { useState } from 'react';

const App = () => {
    // Step 1: Initialize state with useState
    const [count, setCount] = useState(0);

    // Step 2: Functions to increment and decrement the counter
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>React Counter</h1>
            <h2>{count}</h2>

            <button onClick={increment} style={{ margin: '5px' }}>
                Increment
            </button>
            <button onClick={decrement} style={{ margin: '5px' }}>
                Decrement
            </button>
            <button onClick={reset} style={{ margin: '5px' }}>
                Reset
            </button>
        </div>
    );
};

export default App;
