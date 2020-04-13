const http = require('http');

const reuestListener = (req, res) => {
    // req, res are streams
    console.dir(req, {depth: 0});
    res.write('Hello World\n');
    res.end();
};

const server = http.createServer();

server.on('request', reuestListener);


server.listen(4242, () => {
    console.log('Server is running...');
});
