const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data (urlencoded data)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { firstName, lastName } = req.body;
    res.send(`<h1>Hello, ${firstName} ${lastName}!</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
