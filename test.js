var search=require('./search');
search.getPoet('兴业').then(function(poetry){
		console.log(poetry.get({plain:true}));
	});