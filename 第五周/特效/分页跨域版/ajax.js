function ajaxGet(url,fn,data){
	if(data){ //可选参数;
		url = url + "?" + data; 
	}
	
	var ajax = new XMLHttpRequest();
	ajax.open("GET",url,true);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			fn(ajax.responseText)
		}			
	}
}
	
function ajaxPost(url,callback,data){
	var ajax = new XMLHttpRequest();
	ajax.open("POST",url,true);
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(data);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			//执行回调函数;
			callback(ajax.responseText);
		}
	}
}

function jsonp(src,callback){
	window.cb = function(res){
	    callback(res);
	}
	var script = document.createElement("script");
	script.src = src;
	document.body.appendChild(script)
}

	

//重点记忆的; => 加分项;
function InitAjax() //初始化ajax; => ajax 的兼容;
{
	var ajax=false;
	try
	{
		ajax = new ActiveXObject("Msxml2.XMLHTTP"); 
	}
	catch (e)
	{	
		// 不支持 MSXML2版本的ActiveX 
		
		try
		{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (E)
		{
			// 不支持 Microsoft.XMLHTTP 
			ajax = false;
		}
	}

	if (!ajax && typeof XMLHttpRequest!='undefined')
	{
		ajax = new XMLHttpRequest();
	}
	return ajax;
}
