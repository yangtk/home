//使用他还要注意元素本身有原有的top值。
function doMove(obj,attr,dir,target,endFn){	
	dir = parseInt(getStyle(obj,attr))>target?dir:-dir;  //智能判断方向
	clearInterval(obj.timer);                            //开定时器先清楚，避免重复点击出现定时器重复叠加增量
	obj.timer = setInterval(function(){					 //++++++定时器++++++（带加号的为主程序）
		var speed = parseInt(getStyle(obj,attr)) + dir;  //++++++步子++++++		
		if(speed>target && dir>0||speed<target && dir<0){//++++++使停下++++++	dir>0:往前跑就只是往这个判断走，判断speed>target是为了下面的相等时候，就是到终点时候不要回弹一下。
			speed=target;
			clearInterval(obj.timer); //内部关闭是真的关闭，放到上面，它也至少执行一次
			endFn&&endFn();
		};				 
		obj.style[attr] = speed +'px'; 	//	++++++把定时改变的值传递给元素，赋予。++++++		
	},30);
}
//妹的，给老师坑了，，，下面这个才是正确的
function doMove ( obj, attr, dir, target, endFn ) {	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;	
	clearInterval( obj.timer );	
	obj.timer = setInterval(function () {		
		var speed = parseInt(getStyle( obj, attr )) + dir;		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}		
		obj.style[attr] = speed + 'px';		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);
}