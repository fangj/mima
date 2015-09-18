'use strict';

var express = require('express');
var router = express.Router();
var mima=require('./mima');

function genPoetry(req, res, next){
	var keyword=req.params.keyword;
  	mima.mima(keyword).then(function(poetry){
		//console.log(poetry);
		res.send(poetry);
	});
}

router.get('/', genPoetry);
router.get('/:keyword', genPoetry);

module.exports = router;