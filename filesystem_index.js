const fs = require('fs');

// 1. Create and Write to a File
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File created and data written!');

    // 2. Read the File
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // 3. Append Data to the File
        fs.appendFile('example.txt', '\nAppending some data.', (err) => {
            if (err) throw err;
            console.log('Data appended!');

            // 4. Rename the File
            fs.rename('example.txt', 'renamed.txt', (err) => {
                if (err) throw err;
                console.log('File renamed!');

                // 5. Delete the File
                fs.unlink('renamed.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted!');
                });
            });
        });
    });
});
