var express = require('express');

var bodyParser = require('body-parser')

var app = express();

//set the template engine
app.set('view engine','ejs');

//fetch data from the reuqest
app.use(bodyParser.json());

app.get('/qr',(req,res)=>{
    res.send("runn")
})

//Routes
app.use('/qr',require('./routes/api'));

var Port = process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log(`Port running Succesfully on ${Port}`)
})