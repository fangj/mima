var search=require('./search');
search.getPoetry('兴业').then(function(poetry){
		console.log(poetry.get({plain:true}));
	});