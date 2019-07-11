var nodemailer = require('nodemailer');
const express = require('express');
var router = express.Router();
const path = require('path');
const enforce = require('express-sslify');
var bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//force SSL
app.use(enforce.HTTPS({ trustProtoHeader: true }))

//parse api req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// An api endpoint that sends an email
app.post('/api/send', (req,res) => {
    var name = req.body.name
    var email = req.body.email
    var text = String(req.body.message)
    var content = 'name: '+ name + '\n email: ' + email + '\n message: ' + text;
  
    var mail = {
      from: name,
      to: 'mpodola2@gmail.com', 
      subject: '[Wild Game Cooking] - Contact Form New Message',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
    })
});


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);