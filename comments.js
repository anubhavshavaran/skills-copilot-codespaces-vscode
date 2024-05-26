// Create a web server with express

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.json({
        comments: [
            { id: 1, body: 'some comment' },
            { id: 2, body: 'another comment' },
        ],
    });
});

app.get('/users', (req, res) => {
    res.json({
        users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
        ],
    });
});

app.get('/posts', (req, res) => {
    res.json({
        posts: [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' },
        ],
    });
});

app.get('/users/1', (req, res) => {
    res.json({
        user: { id: 1, name: 'John Doe' },
    });
});

app.get('/users/2', (req, res) => {
    res.json({
        user: { id: 2, name: 'Jane Doe' },
    });
});

app.get('/users/3', (req, res) => {
    res.json({
        user: { id: 3, name: 'Doe John' },
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});