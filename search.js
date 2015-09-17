'use strict';
var Sequelize=require('sequelize');
var sequelize = new Sequelize('sqlite://tangall.sqlite');
var Poetries = sequelize.define('poetries', {
    id: {field: 'id',type: Sequelize.INTEGER, primaryKey: true,uniqueKey:true },
    poet_id:Sequelize.INTEGER,
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

Poetries.belongsTo(Poet, {foreignKey: 'poet_id'});

Poetries.findOne().then(function(poetry){
	console.log(poetry.get({plain:true}));
});

Poet.findOne().then(function(poet){
	console.log(poet.get({plain:true}));
});


