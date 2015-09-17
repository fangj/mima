// var search=require('./search');
// search.getPoetry('兴业').then(function(poetry){
// 		console.log(poetry.get({plain:true}));
// 	});
var mima=require('./mima');
//mima.mima('兴业');
//mima.mima();
mima.mima('贰');
console.log(mima.translateNumber('我们贰啦啦啦'));

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}
// console.log(replaceAll('贰',2,'我们贰啦啦啦'));