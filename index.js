// code away!
const express = require('express');

const logger = require('./middleware/logger');
const app = express();
const PORT = 8000;
const postRouter = require('./posts/postRouter');
app.use(express.json());
app.use(logger);

app.use('/api/post', postRouter)


app.get('/', (req, res) => res.send(`<h3>Welcome to '/' Endpoint</h3>`))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))