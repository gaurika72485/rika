const express = require('express');
const router = express.Router();

// Route to get user details
router.get('/:firstName/:lastName', (req, res) => {
    const { firstName, lastName } = req.params;
    res.send(`<h1>Hello, ${firstName} ${lastName}!</h1>`);
});

// Route to handle a POST request for user data
router.post('/', (req, res) => {
    const { firstName, lastName } = req.body;
    res.json({ message: `Welcome, ${firstName} ${lastName}!` });
});

module.exports = router;
