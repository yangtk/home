function shake(obj,attr,endFn){
	if(obj.shaked){ return }; //////////// first-���������� /////////// ����ٵ������ǰһ����ɣ�������˳�
	obj.shaked = true;        //////////// second-���������� /////////// ��
	var pos = parseInt(getStyle(obj,attr));  //������
	var arr = [];
	for(var i=20; i>=0; i-=2){
		arr.push(i,-i);
	}
	var num = 0;
	clearInterval(obj.shake);
	obj.shake = setInterval(function(){            //ԭ����ʱ����30������ٽ��к���ִ�У�����Ϊ��һ��ִ����Ԥ��仯
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if(num===arr.length){
			clearInterval(obj.shake);
			endFn && endFn();
			obj.shaked = false;//////////// third-���������� ///////////��
		}
	},30);
}