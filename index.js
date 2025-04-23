const express = require('express');

const app = express();
const port = 8080;

const dataRouter = require('./route');

app.use(express.json());

app.use('/data', dataRouter);

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.listen(port, () => {
    console.log('Server working on http://localhost:8080');
});