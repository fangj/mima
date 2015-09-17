'use strict';
var search=require('./search');
// search.getPoetry('兴业').then(function(poetry){
// 		console.log(poetry.get({plain:true}));
// 	});
var mima=require('./mima');
//mima.mima('兴业');
//mima.mima();
// console.log(mima.translateNumber('我们贰啦啦啦'));
// console.log(replaceAll('贰',2,'我们贰啦啦啦'));

mima.mima('贰').then(function(poetry){
	console.log(poetry);
});

// mima.mima().then(function(poetry){
// 	console.log(poetry);
// });

// for (var i = 0; i < 1000; i++) {
// 	var p=search.getRandomPoetry();
// 	p.then(searchEmptyPoetry);
// }

// function searchEmptyPoetry(poetry){
// 		if(!poetry){console.log('found');}
// }

// for (var i = 0; i < 100; i++) {
// 	var p=mima.mima('贰');
// 	p.then(searchEmptyPoetry);
// }


// mima.mima('剑头利如芒').then(function(poetry){
// 	console.log(poetry);
// });
