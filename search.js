'use strict';
var Sequelize=require('sequelize');
var sequelize = new Sequelize('sqlite://tangall.sqlite',{logging: false});
var Poetries = sequelize.define('poetries', {
    id: {field: 'id',type: Sequelize.INTEGER, primaryKey: true,uniqueKey:true },
    poet:Sequelize.STRING,
    title:Sequelize.STRING,
    content:Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  createdAt   : 'created_at',
  updatedAt   : 'updated_at',
});

function getPoetry(keyword){
	return Poetries.findOne({
		where:{content: {$like: '%'+keyword+'%'}}
	});
}

function getRandomPoetry(keyword){
	var total=43030;
	var randomId=Math.floor(Math.random()*total);
	return Poetries.findOne({
		where:{id: randomId}
	});
}

module.exports={
	getPoetry:getPoetry,
	getRandomPoetry:getRandomPoetry
};
