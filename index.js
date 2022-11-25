const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.get('/', async function(req, res){
    return res.send('sent text!');
});



app.listen(port, (err)=>{
    if(err==true){console.log(err)}else{
        console.log(`Hosted on port: http://localhost:${port}`);
    };
});