const http = require("http");      // Built-in HTTP module
const myModule = require("./modules"); // Our own module

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    const currentDateTime = myModule.getDateTime();

    res.write("Today's Date and Time:\n");

    res.write(currentDateTime.toString());

    res.end();
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
