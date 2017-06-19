var express = require('express');
var router = express.Router();

/* GET home page. */
//obejct creating
var person={name:'bandana singh',college:'Softwarica college',course:"bcis.IT",
semester:"2nd year",contactno:"9843008890",fblink:'www.facebook.com',img:'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p160x160/15672620_1271034036303418_261702168461880374_n.jpg?oh=e0fd3c2ea9889c0f53f73e190e585a74&oe=59E3CBC3'};


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',person});//'profile file written to open the index.ejs'
});



router.get('/profile', function(req, res) { //this is created to link the profile file 
  res.render('profile',{person});//'profile file written to open the index.ejs'
});

router.get('/add', function(req, res) { //this is created to link the profile file 
  res.render('add',{person});//'profile file written to open the index.ejs'
});



module.exports = router;
