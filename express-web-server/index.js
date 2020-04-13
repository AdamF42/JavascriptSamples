const express = require('express');

const server = express();

server.get("/", (req,res)=>{
    res.send("Hello World From Express")
});

server.get("/about", (req,res)=>{
    res.send("Express dummy test")
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
