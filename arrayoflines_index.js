const fs = require('fs');

// Function to read file and return array of lines
function getLinesFromFile(filePath) {
    try {
        // Read file synchronously
        const data = fs.readFileSync(filePath, 'utf8');
        
        // Split the content by new line (\n) to get an array of lines
        const lines = data.split('\n').map(line => line.trim()).filter(line => line);
        
        return lines;
    } catch (err) {
        console.error('Error reading the file:', err);
        return [];
    }
}

// Call the function and log the result
const lines = getLinesFromFile('example.txt');
console.log(lines);
