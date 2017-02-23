/**
 * Created by Owner on 2/15/2017.
 */
const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const INDEX = path.join(__dirname,"public/index.html");
const root = path.join(__dirname,"public");
app.use(express.static(root));
app.get("*",(req,res)=>{
    res.sendFile(INDEX);
});
server.listen(PORT);
