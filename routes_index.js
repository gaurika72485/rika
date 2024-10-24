const express = require('express');
const userRouter = require('./routes/user'); // Import the user router

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Use the user router for routes starting with /user
app.use('/user', userRouter);

// Root route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Express Router App!</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
