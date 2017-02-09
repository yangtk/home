//$(function(){}); = window.onload = function(){}; 
//获取id：$('id');
//当前：$(this);
function $(v){
	if(typeof v === 'function'){
		window.onload = v;
	}else if(typeof v === 'string'){
		return document.getElementById(v);
	}else if(typeof v === 'object'){
		return v;
	}
}
//获取TagName:$tag('标签')
function $tag(v){
	return document.getElementsByTagName(v);
}

//用他获取已经设置的单一的样式。
//注意：attr有引号（这个日后自然会熟记于心的）
function getStyle(obj,attr){				
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}