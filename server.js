const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up static file serving from the root of the project
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
