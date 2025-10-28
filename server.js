const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const testFolder = './resources/';
const fs = require('fs');

setInterval(function() {
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      app.get('/resources/' + file, (req, res) => {
          res.sendFile(path.join(__dirname, 'resources/' + file));
      });
    });
  });
}, 1000);

// Start the server
app.listen(port, () => {
  console.log(`"Website" hosted at http://nambiar:${port}`);
}); 