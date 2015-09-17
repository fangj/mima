'use strict';
var Sequelize=require('sequelize');
var sequelize = new Sequelize('sqlite://tangall.sqlite',{logging: false});
var Poetries = sequelize.define('poetries', {
    id: {field: 'id',type: Sequelize.INTEGER, primaryKey: true,uniqueKey:true },
    poet_id:Sequelize.INTEGER,
    poet:Sequelize.STRING,
    title:Sequelize.STRING,
    content:Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  createdAt   : 'created_at',
  updatedAt   : 'updated_at',
});


var Poet=sequelize.define('poets', {
    id: {field: 'id',type: Sequelize.INTEGER, primaryKey: true,uniqueKey:true },
    name:Sequelize.STRING
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  createdAt   : 'created_at',
  updatedAt   : 'updated_at',
});

//Poetries.belongsTo(Poet, {foreignKey: 'poet_id', targetKey: 'id'});

// Poetries.findOne().then(function(poetry){
// 	console.log(poetry.get({plain:true}));
// 	poetry.getPoet().then(function(poet){
// 		console.log(poet.get({plain:true}));
// 	});
// });

// Poet.findOne().then(function(poet){
// 	console.log(poet.get({plain:true}));
// });

// Poetries.findOne({
// 	where:{content: {$like: '%兴业%'}}
// }).then(function(poetry){
// 	console.log(poetry.get({plain:true}));
// });

function getPoetry(keyword){
	return Poetries.findOne({
	where:{content: {$like: '%'+keyword+'%'}}
	});
}

// getPoet('兴业').then(function(poetry){
// 		console.log(poetry.get({plain:true}));
// 	});

module.exports={
	getPoetry:getPoetry
};
