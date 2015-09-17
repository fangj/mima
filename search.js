'use strict';
var Sequelize=require('sequelize');
var sequelize = new Sequelize('sqlite://tangall.sqlite');
var Poetries = sequelize.define('poetries', {
    id: {field: 'id',type: Sequelize.INTEGER, primaryKey: true,uniqueKey:true },
    poet_id:Sequelize.INTEGER,
    content:Sequelize.STRING,
    title:Sequelize.STRING,
    content:Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  createdAt   : 'created_at',
  updatedAt   : 'updated_at',
});

function findOne(){
  return Poetries.findOne({ where: {id: 1} });
}

Poetries.findOne().then(function(poetry){
	console.log(poetry.get({plain:true}));
})