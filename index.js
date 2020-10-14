const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/posts', (req, res) => {

});

app.post('/events', async (req, res) => {

});

app.listen(4002, () => console.log("Server running on port 4002"));
