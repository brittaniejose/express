const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
})

app.get('/favicon.ico', (req, res) => {
    res.send('');
});

app.get('*', (req, res) => {
    res.send('This is not the express homepage');
});

app.listen(port, () => {
    console.log(`Hello, express app is running at http://localhost:${port}`);
});

