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



function randomId(){
	var total=43030;
	return Math.floor(Math.random()*total);
}
function getPoetry(keyword){
	return getPoetryByKeyword(keyword).then(function(poetryEntity) {
		return poetryEntity?poetryEntity:getRandomPoetry();
	});
}

function getPoetryByKeyword(keyword){
	var rId=randomId(); //随机起始位置
	return Poetries.findOne({
		where:{content: {$like: '%'+keyword+'%'},id:{$gt:rId}}
	});
}

function getRandomPoetry(){
	var rId=randomId();
	return Poetries.findOne({
		where:{id: rId}
	});
}

module.exports={
	getPoetry:getPoetry,
	getRandomPoetry:getRandomPoetry
};
