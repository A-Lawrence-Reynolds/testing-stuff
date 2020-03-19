import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// const http = require("http"); // built in node.js module to handle http traffic

// const hostname = "127.0.0.1"; // the local computer where the server is running
// const port = 3000; // a port we'll use to watch for traffic

// const server = http.createServer((req, res) => {
//   // creates our server
//   res.statusCode = 200; // http status code returned to the client
//   res.setHeader("Content-Type", "text/plain"); // inform the client that we'll be returning text
//   res.end("Hello World from Node\n"); // end the request and send a response with the specified message
// });

// server.listen(port, hostname, () => {
//   // start watching for connections on the port specified
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
