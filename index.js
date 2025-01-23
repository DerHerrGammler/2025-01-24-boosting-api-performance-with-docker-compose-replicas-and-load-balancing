const http = require("http");

// Generate a random number between 1 and 10000
const randomNumber = Math.floor(Math.random() * 10000) + 1;
let hitCounter = 0;
const timeout = Math.floor(Math.random() * 5);

const server = http.createServer((req, res) => {
    hitCounter += 1;
    // console.log(`Request number: ${hitCounter}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    setTimeout(() => {
        res.end(`number: ${randomNumber}; request: ${hitCounter}`);
    }, timeout * 500);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    console.log(`Random Number: ${randomNumber}`);
    console.log(`Timeout: ${timeout}`);
});
