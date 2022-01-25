const express = require('express');
const path = require('path');

const app = express();

const pathPublic = path.resolve(__dirname, './public')

app.use( express.static(pathPublic));

app.listen(3030, ()=> console.log('Mercado Liebre esta corriendo!'));

app.get('/', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlpath)
})



