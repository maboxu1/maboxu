function ajaxGet(url,fn,data){
	if(data){
		url = url + "?" + data;
	}
	var ajax = new XMLHttpRequest();
	ajax.open("GET",url,true);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			fn(ajax.responseText);
		}
	}
}