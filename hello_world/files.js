const fs = require('fs');

// Function to create a new file
const newFile = (filePath) => {
    fs.writeFileSync(filePath, '', { flag: 'w' }); // Create an empty file
};

// Function to append data to a file
const appendInFile = (filePath, data) => {
    fs.appendFileSync(filePath, data); // Append data to the file
};

// Function to read data from a file
const readFileData = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8'); // Read the file
        console.log(data); // Output the data to console
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
};

// Export the functions
module.exports = {
    newFile,
    appendInFile,
    readFileData
};
