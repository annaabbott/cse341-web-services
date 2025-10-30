// Playing with node without express
// let http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// }).listen(8080);

//init express
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

//middleware function to handle requests
app.use("/", (req, res, next) => res.send("Hello World"));

//listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
