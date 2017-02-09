var downfloor = document.getElementById('downfloor');
downfloor.innerHTML = '<div class="msgbox"><a id="msgclose" href="javascript:;" class="msgclose">x</a><div class="msgbody"><p class="msgdesc">用手机扫描左侧二维码，或选择合适你的手机系统下载。</p><div class="msgcode"><img src="/public/website/css/images/code.png" alt=""></div><div class="msgbtns"><a href="http://www.jianghai56.com/welcome/download" target="_blank" class="iph forTcss">iPhone</a><a href="http://www.jianghai56.com/welcome/download" target="_blank" class="and forTcss">Android</a></div></div></div>';

//弹窗
window.onload = function(){
	var btn2 = document.getElementById('download2');
	var btnClose = document.getElementById('msgclose');
	btn2.onclick = show;
	function show(){
		downfloor.style.display = 'block';
	}
	btnClose.onclick = function(){
		downfloor.style.display = 'none';
	}
	
	btn1.onclick = show;
}

var u = navigator.userAgent;
if( u.indexOf('Android') > -1 ){
	downfloor.style.position = 'absolute'
}
