require('http').createServer((req, res) => res.end('hello')).listen(process.env.PORT || 3000);
