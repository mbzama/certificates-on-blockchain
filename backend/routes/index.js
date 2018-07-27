var express = require('express');
var router = express.Router();
var db = require('../connection.js');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const {wrap} = require('co');
const {join} = require('path');
const moment = require('moment');
const pdf = require('html-pdf');
const thunkify = require('thunkify');
const read = thunkify(require('fs').readFile);
const handlebars = require('handlebars');
var path = "../certificateddocs/";
const pdf_options = {format: 'A4', quality: 150, orientation: "landscape",  zoomFactor: "0.5"};
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');
var nodemailer = require('nodemailer');

//web3 configuration

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
const contractAbi = [ { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6d4ce63c" }, { "constant": false, "inputs": [ { "name": "ob", "type": "string" } ], "name": "setdata", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x900cf582" } ]
var contract_addr = "0x197beCA5d29A965452D5B66D3353aEFe5991FC5d";
var contract_instance = web3.eth.contract(contractAbi).at(contract_addr);
//Input Decoder
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(contractAbi); 

//crypto
var sha256 = require('sha256');
var Cryptr = require('cryptr'),
cryptr = new Cryptr('myTotalySecretKey');

//mail
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
      user:'dummytest471@gmail.com',
      pass:'dummytest3296'
  }
})

//lodash

var lodash = require('lodash');

//multer configuration
var name_file;
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname +'./../verificationdocs/')
    },
    filename: function (req, file, cb) {
        
      time = Date.now();
      cb(null, file.fieldname + '-' + time)
      name_file = file.fieldname + '-' + time;
    }
  })

const upload = multer({ storage: storage });



router.post('/createcertificate', async(req, res) => {
 
  //Generating PDF
    const generatePDF =  wrap(function * () {

    const data = {
      student: {
        name: req.body.name,
        course: req.body.branch,
        year: req.body.year,
        Degree: req.body.Degree
      }
    };
  
    const source = yield read(join(`${__dirname}/certificate.html`), 'utf-8');
    const template = handlebars.compile(source);
    const html = template(data);  
    const p = pdf.create(html, pdf_options);
    p.toFile = thunkify(p.toFile);
    var pa = '../certificateddocs/'+req.body.Debtor_Mailing_Address+'document.pdf';
    //console.log(pa);
    yield p.toFile(`${join(__dirname, '../certificatedocs/'+ req.body.email +'document.pdf')}`);
   // res.send("Document submited successfully");


  });
   
  await generatePDF();


  var filepath = '../certificateddocs/'+req.body.email+'document.pdf';
  //Saving Record
  var ID = req.body.collegeID+req.body.email;
  var txID = "0zd322ff";

  await db.query('insert into certificates.Docs values("'+ID+'","'+req.body.email+'","'+req.body.name+'","'+req.body.branch+'","'+req.body.year+'","'+req.body.Degree+'","'+req.body.collegeID+'","'+txID+'","'+filepath+'","1","","");', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
    res.send(result);
  });


});



//college Flag update
router.post('/collegeverify', async(req, res, next) => {

  await db.query('update certificates.Docs set cf="'+req.body.cf+'" where ID="'+req.body.ID+'";', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
  });


  await db.query('SELECT cf,sf from certificates.Docs where ID="'+req.body.ID+'";', function(err, result) {
    if (err) throw err;
    else
    //console.log(result[0].sf);
    if(result[0].sf == 1 && result[0].cf == 1){

  

   fs.readFile(__dirname + './../certificatedocs/'+req.body.email +'document.pdf', async(err, buf) => {
      
    if(err){
        console.log(err)
    }        
    else{
        console.log(buf);

          await web3.personal.unlockAccount(web3.eth.accounts[0],'hari');
          var d = sha256(buf);
          var val = await contract_instance.setdata(d,{from:web3.eth.accounts[0],gas:200000},async(error,result) => {
            if(error){
                console.log(error);
            }
            else{
            
              var txhash = result;
               await db.query('update certificates.Docs set Txid="'+txhash+'" where ID="'+req.body.ID+'";', function(err, result) {
                if (err) throw err;
                else
                  
              

                 var mailoptions = {
                  from:'dummytest471@gmail.com',
                  to:"imhari213@gmail.com",
                  subject:'Blochain certificate',
                  text:'Hi please check your ccertificate Thank you.....!!!!!!! :)   AND your TRANSACTION ID IS  '+txhash,
                  attachments: [
                      {   
                         
                          'path': __dirname +"./../certificatedocs/"+req.body.email+"document.pdf" // stream this file
                      },
                  ]
          
              }
          
          
              transporter.sendMail(mailoptions,function(err,info){
                  if(err){
                      console.log(err);
                          res.send({"status" : "0","message":"failed while creating certificate.....!"});
                  }
                  else{
          
                            res.send({"status" : "1","message":"Certificate Created Successfully"});
          
                  }
                })


                
                  
              });
            
      
            
            }

          });


    }

  });

    
    }
    else{
      res.send("Student need to approve certificate");
    }
    
  });


});



//Student Flag update
router.post('/studentverify', async(req, res, next) => {

  await db.query('update certificates.Docs set sf="'+req.body.sf+'"where ID="'+req.body.ID+'";', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
    //res.send(result);
  });

  await db.query('SELECT cf,sf from certificates.Docs where ID="'+req.body.ID+'";', function(err, result){
    if (err) throw err;
    else
    //console.log(result[0].sf);
    if(result[0].sf == 1 && result[0].cf == 1){

   

      fs.readFile(__dirname + './../certificatedocs/'+req.body.email +'document.pdf', async(err, buf) => {
      
          if(err){
              console.log(err)
          }        
          else{
              console.log(buf);
              await web3.personal.unlockAccount(web3.eth.accounts[0],'hari');
              var d = sha256(buf);
              var val = await contract_instance.setdata(d,{from:web3.eth.accounts[0],gas:200000},async(error,result) => {
                if(error){
                    console.log(error);
                }
                else{
                
                   var txhash = result;
                  
                   //

                   await db.query('update certificates.Docs set Txid="'+txhash+'" where ID="'+req.body.ID+'";', function(err, result) {
                    if (err) throw err;
                    else
                      

    
                     var mailoptions = {
                      from:'dummytest471@gmail.com',
                      to:"imhari213@gmail.com",
                      subject:'Blochain certificate',
                      text:'Hi please check your ccertificate Thank you.....!!!!!!! :)   AND your TRANSACTION ID IS  '+txhash,
                      attachments: [
                          {   
                             
                              'path': __dirname +"./../certificatedocs/"+req.body.email+"document.pdf" // stream this file
                          },
                      ]
              
                  }
              
              
                  transporter.sendMail(mailoptions,function(err,info){
                      if(err){
                          console.log(err);
                              res.send({"status" : "0","message":"failed while creating certificate.....!"});
                      }
                      else{
              
                                res.send({"status" : "1","message":"Certificate Created Successfully"});
              
                      }
                    })
    
    
                    
                      
                  });





                }

              });

     
          }

        });

     
    }
    else{
      res.send("college need to approve certificate");
    }
    
  });





});


router.post('/validate',upload.single('file-to-upload'), async(req, res, next) => {
  
  var trid = req.body.transaction_id;

  fs.readFile(__dirname + './../verificationdocs/'+name_file, async(err, buf) => {
    if(err){
        console.log(err)
    }        
    else{

      var b = sha256(buf);

      //getting block data

      var d = await web3.eth.getTransaction(trid);
      var i = web3.toAscii(d.input);
     
      const rsult = decoder.decodeData(d.input);

      const check_value = rsult.inputs[0];

      console.log(b);
      console.log(d.input);
      console.log(rsult.inputs[0]);
      if(lodash.isEqual(b,check_value)){

        res.send({"status" : "1","data":"A valid Document"});
       }else{
              res.send({"status" : "0","data":"Invalid Document or Transaction ID.....!"});
       }


    }

  });


});




router.get('/students',async(req, res, next) => {

  

  await db.query('SELECT * FROM certificates.Docs;', function(err, result) {
    if (err) throw err;
    else{
      res.send(result);
    }
  });

});



router.post('/universityverify', async(req, res, next) => {

  await db.query('update certificates.Docs set uf="'+req.body.uf+'"where ID="'+req.body.ID+'";', function(err, result) {
    if (err) throw err;
    else
    console.log(result);
    res.send(result);
  });


});



module.exports = router;
