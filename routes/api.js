var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var QrCode = require('qrcode');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/generate',(req,res)=>{
    res.render('home',{url: null});
})

router.post('/generate',urlencodedParser,(req,res)=>{
    console.log("running");
    console.log(req.body.myname);
    var temp = req.body.myname;
    console.log(temp)

    QrCode.toDataURL(temp,{errorCorrectionLevel:'H'},function (err, url) {
        res.render('home',{url:url});
      });
})


module.exports = router;