//$(function(){}); = window.onload = function(){}; 
//��ȡid��$('id');
//��ǰ��$(this);
function $(v){
	if(typeof v === 'function'){
		window.onload = v;
	}else if(typeof v === 'string'){
		return document.getElementById(v);
	}else if(typeof v === 'object'){
		return v;
	}
}
//��ȡTagName:$tag('��ǩ')
function $tag(v){
	return document.getElementsByTagName(v);
}

//������ȡ�Ѿ����õĵ�һ����ʽ��
//ע�⣺attr�����ţ�����պ���Ȼ��������ĵģ�
function getStyle(obj,attr){				
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}