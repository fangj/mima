'use strict';

var search=require('./search');
var pinyin = require('pinyin');
var _=require('lodash');

function mima(keyword){
	//有关键字,搜索.没有关键字,随机.
	var poetryPromise=keyword?search.getPoetry(keyword):search.getRandomPoetry();
	return poetryPromise.then(function(poetryEntity){
		var poetry=poetryEntity.get({plain:true});
		var line=getLine(poetry.content,keyword);
		if(!line){
			console.log("empty line",poetry.content);
			return null;
		}
		//console.log(line);
		var mima=toMima(line);
		//console.log(mima);
		poetry.line=line;
		poetry.mima=mima;
		poetry.keyword=keyword?keyword:'';
		return poetry;
	});
}

function getLine(content,keyword){
	var list=content.split('。');
	list.pop();//去除最后一个空分割
	if(list.length<=0){ //处理没有句号的情况
		list=[content];
	}
	if(keyword){ //有关键字,找有关键字的那句
		var r=new RegExp(keyword);
		var line =_.find(list, function(line){return r.test(line);});
		if(line){return line;}
	}
	//没有关键字或者没有找到含关键字的句子,随机找一个
	var index=_.random(0,list.length-1);
	return list[index];
}

function replaceAll(find, replace, str) {
	if(!str){
		console.log('empty str');
		return '';
	}
  	return str.replace(new RegExp(find, 'g'), replace);
}

function translateNumber(line){
	var sNum={
		'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9
	};
	var tNum={
		'壹':1,'贰':2,'叁':3,'肆':4,'伍':5,'陆':6,'柒':7,'捌':8,'玖':9
	};
	var key;
	for( key  in  sNum){
    	line=replaceAll(key,sNum[key],line);
	}
	for( key  in  tNum){
    	line=replaceAll(key,tNum[key],line);
	}
	return line;
}

function toMima(line){
	// 替换汉字为数字
	line= translateNumber(line);
	// 替换汉字为拼音首字
	var py=pinyin(line,{style:pinyin.STYLE_FIRST_LETTER});
	// 大写
	return py.join('').toUpperCase();
}

module.exports={
	mima:mima,
	translateNumber:translateNumber
};