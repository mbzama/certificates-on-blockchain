var express = require('express');
var router = express.Router();
var db = require('../connection.js');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
const contractAbi = [ { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6d4ce63c" }, { "constant": false, "inputs": [ { "name": "ob", "type": "string" } ], "name": "setdata", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x900cf582" } ]
var contract_addr = "0xa9b5f8d95058b8a7af792cf3868f22c26c8442be";
var contract_instance = web3.eth.contract(contractAbi).at(contract_addr);
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
      user:'dummytest471@gmail.com',
      pass:'dummytest3296'
  }
})
var count = 0885;
var p_id  = 08838;
var id = 0888;
var tid = 99677;




/* GET home page. */
router.post('/register', jsonParser,async(req, res, next) => {
try{

  p_id = p_id +1;
  id =id+1;
  tid = tid+1;


  await db.query('insert into SCM.product values("'+p_id+'","'+req.body.name+'","'+req.body.quantity+'","'+req.body.weight+'","'+req.body.temprature+'");', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
   // res.send(result);
  });

 var stops = req.body.checkpoint;
  var t = Object.keys(stops).length;

  

  await db.query('insert into SCM.Ckeckpoints values("'+id+'","'+p_id+'","'+stops+'");', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
    //res.send(result);
  });



  await db.query('insert into SCM.Traders values("'+tid+'","'+p_id+'","'+req.body.sender+'","'+req.body.reciever+'");', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
   // res.send(result);
  });
 

   await web3.personal.unlockAccount(web3.eth.accounts[0],'hari');

   var val = await contract_instance.setdata(req.body.checkpoint,{from:web3.eth.accounts[0],gas:200000},async(error,result) => {
    if(error){
        console.log(error);
    }
    else{
    
       var txhash = result;
       count = count+1;
      //  insert into SCM.Tracker values(32,"d3n38h4f2u",123,'9999-12-31 23:59:59',"vijawada");
      var dt = new Date();
      var utcDate = dt.toUTCString();
      var myDate = new Date(utcDate);
      var n = myDate.toLocaleString();
       await db.query('insert into SCM.Tracker values("'+count+'","'+txhash+'","'+p_id+'","'+n+'","Hyderabad");', function(err, result) {
        if (err) throw err;
        else
        console.log(result);

      

      var maillist = [
        req.body.sendermail,
        req.body.recievermail
      ];
      var mailoptions = {
        from:'dummytest471@gmail.com',
        to:maillist,
        subject:'Product Tracking_ID',
        text:'Hi please Track your product using following product ID Thank you.....!!!!!!! :)   AND your TRANSACTION ID IS'+txhash+'PRODUCT ID is'+p_id,
        

    }


     transporter.sendMail(mailoptions,async(err,info)=>{
        if(err){
            console.log(err);
              //  res.send({"status" : "0","message":"failed while creating certificate.....!"});
        }
        else{

               //   res.send({"status" : "1","message":"Certificate Created Successfully"});

        }
      })



        res.send({"msg":"Added successfully"});
      });

    }
  });
}
catch(err) {
  console.log(err);
}
   


});




router.post('/updateproductstatus',async(req,res ,next)=>{

  await web3.personal.unlockAccount(web3.eth.accounts[0],'hari');

   var val = await contract_instance.setdata(req.body.station,{from:web3.eth.accounts[0],gas:200000},async(error,result) => {
    if(error){
        console.log(error);
    }
    else{
    
       var txhash = result;


 count = count+1;
 var dt = new Date();
 var utcDate = dt.toUTCString();
  await db.query('insert into SCM.Tracker values("'+count+'","'+txhash+'","'+p_id+'","'+utcDate+'","'+req.body.station+'");', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
  });
  res.send({"msg":"updated successfully"});
    }
  });


});


router.post('/track',async(req,res)=>{

  await db.query('SELECT * FROM SCM.Tracker where pid='+req.body.pid, function(err, result) {
    if (err) throw err;
    else
    console.log(result);
    res.send(result);
    
  });


})


router.post('/find',async(req,res)=>{

  var d = await web3.eth.getTransaction(req.body.id);
           var i = web3.toAscii(d.input);
           var compares = i.substr(6);
           var c = compares.replace(/ /g,'');
          // res.send(d);

           var dat = d.blockNumber

  var dateTimeStamp = web3.eth.getBlock(dat).timestamp;
  var f = new Date(dateTimeStamp * 1000);
  var s = f.toUTCString();
  s = s.substring(0,s.indexOf("GMT")) + "UTC" ;


  var myDate = new Date(s);
  var n = myDate.toLocaleString();
 // var ind = new Date(s);
//   ind.setHours(ind.getHours() + 5); 
// ind.setMinutes(ind.getMinutes() + 30);
  var o = c + n;
  res.send(d);

})


module.exports = router;
