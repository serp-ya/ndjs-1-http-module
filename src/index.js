#!/usr/bin/env node -r dotenv/config
const http = require('http');

http.createServer((res, req) => {
    console.log('Hello world!');
    req.end(process.env.LOCAL_PORT);
}).listen(process.env.LOCAL_PORT);