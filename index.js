const express = require('express');
const app = express();

const PORT = 3000;

app.use();

app.get('/', function (req, res) {
    res.sendFile();
})

app.listen(PORT, ()=>{
    console.log(`Listenning at port ${ PORT }`);
});