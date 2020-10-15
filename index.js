const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
const posts = {};
app.get('/posts', (req, res) => {

});

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }
    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];
        posts.comments.push({ id, content });
    }
});

app.listen(4002, () => console.log("Server running on port 4002"));
