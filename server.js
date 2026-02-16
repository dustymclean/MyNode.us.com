const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve all files in the 'public' folder as static resources
app.use(express.static(path.join(__dirname, 'public')));

// Optional: specific route for the homepage if not using index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});