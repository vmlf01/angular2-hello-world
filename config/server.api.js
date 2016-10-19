"use strict";

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        handleSaveComment(req, res);
    }
    else {
        handleGetComments(req, res);
    }
});

let comments = [];
let commentId = new Date().getTime();

function handleGetComments(req, res) {
    res.writeHeader(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
        data: comments
    }));
}

function handleSaveComment(req, res) {
    let data = '';

    req.on('data', (chunk) => {
        data += chunk.toString();
    });

    req.on('end', () => {
        let payload = JSON.parse(data);
        let newComment = {
            id: (commentId++).toString(),
            name: payload.name,
            email: payload.email,
            message: payload.message
        };

        comments.push(newComment);

        res.writeHeader(201, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
            data: newComment
        }));
    });
}

server.listen(4000, () => {
    console.log('API server is listening on port 4000');
});