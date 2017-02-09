function shake(obj,attr,endFn){
	if(obj.shaked){ return }; //////////// first-开关三部曲 /////////// 如果再点击，需前一轮完成，否则就退出
	obj.shaked = true;        //////////// second-开关三部曲 /////////// 开
	var pos = parseInt(getStyle(obj,attr));  //有隐患
	var arr = [];
	for(var i=20; i>=0; i-=2){
		arr.push(i,-i);
	}
	var num = 0;
	clearInterval(obj.shake);
	obj.shake = setInterval(function(){            //原理：定时器在30毫秒后再进行函数执行，并且为下一次执行做预埋变化
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if(num===arr.length){
			clearInterval(obj.shake);
			endFn && endFn();
			obj.shaked = false;//////////// third-开关三部曲 ///////////关
		}
	},30);
}