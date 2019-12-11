// code away!
const express = require('express');

const logger = require('./middleware/logger');
const app = express();
const PORT = 8000;
app.use(logger);


app.get('/', (req, res) => res.send(`<h3>Welcome to '/' Endpoint</h3>`))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))