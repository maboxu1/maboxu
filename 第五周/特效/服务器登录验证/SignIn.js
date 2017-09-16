function ajaxGet(url,callback){
	var ajax = new XMLHttpRequest();
	ajax.open("GET",url,true);
	ajax.send(null);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status){
			callback(ajax.responseText);
		}
	}
}