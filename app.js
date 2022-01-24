const express = require('express');
const path = require('path');

const app = express();

app.listen(3030, ()=> console.log('exitoso'));


//app.get('/', (req, res)=> res.send("Bienvenidos al sitio"));

app.get('/', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlpath)
})


app.use(express.static('public'));
