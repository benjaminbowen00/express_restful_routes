const express = require('express');
const router = new express.Router();
var path = require('path');

router.use('/films', require('./films'));


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


module.exports = router;
