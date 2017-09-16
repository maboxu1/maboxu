//多属性回调函数版运动框架;
function move(DOM,json,fn){
	// +1. 开关定时器;
	//有多少属性关闭多少定时器;
	if(DOM.timerList){
		for(var attr in json){
			//如果已经有定时器组了 再去关闭;
			clearInterval(DOM.timerList[attr]);
		}
	}
	DOM.timerList = {};	
	for(let attr in json){
		DOM.timerList[attr] = setInterval(function(){
			//console.log(attr);//如果用var attr 永远都是最后一个属性;
			// let 可以解决这个问题;
			//console.log("这是"+attr+"的定时器!")
			//1.判定当前位置;
			if(attr == "opacity"){
				var iNow = getStyle(DOM,attr) * 100;
			}else{
				var iNow = parseInt(getStyle(DOM,attr));
			}
			//2.速度;
			//attr json[attr]
			//var speed = (target - iNow) / 6;
			var speed = (json[attr] - iNow) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//3.终止条件;
			if(iNow == json[attr]){ //当前位置 == 目标点;
				clearInterval(DOM.timerList[attr]);//关闭当前属性的定时器;
				//删除已经关闭定时器的属性;
				delete DOM.timerList[attr];
				//判定对象中的项数;
				//计数器; 查看对象中还有几项;
				var index = 0;
				for(var i in DOM.timerList){
					index ++;
				}
				if(index == 0){//没有还在开启的定时器了;
					if(fn){
						fn();
					}
				}
			}else{
				if(attr == "opacity"){
					iNow = iNow + speed;
					DOM.style.opacity = iNow / 100;
				}else{
					DOM.style[attr] = iNow + speed + "px";
				}
			}
		}, 30);
	}
}

function getStyle(DOM,attr){
	if(getComputedStyle){
		return getComputedStyle(DOM,false)[attr]
	}else{
		return DOM.currentStyle[attr];
	}
}


