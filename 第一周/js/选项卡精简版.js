var oBtn = document.querySelector(".btn")
console.log(oBtn)
var aBtn = oBtn.children;
console.log(aBtn) 
var ali = document.querySelector(".show").children;
console.log(ali)
for(var i = 0;i < aBtn.length;i++){
	aBtn[i].index = i;
	console.log(aBtn[i])
	aBtn[i].onmouseover = function(){
		for(var i = 0; i < aBtn.length; i++){
			aBtn[i].className = "";
			ali[i].className = ""
		}
		this.className = "active" 
		ali[this.index].className = "active"
	}
}