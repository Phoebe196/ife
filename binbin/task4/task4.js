var num = document.getElementById('number');

window.onload = function(){
	var leftIn = document.getElementById('leftIn');
	var rightIn = document.getElementById('rightIn');
	var leftOut = document.getElementById('leftOut');
	var rightOut = document.getElementById('rightOut');
	var left = "left",right = "right";

	leftIn.onclick = function(){
		insertNum(left);
	}

	rightIn.onclick = function(){
		insertNum(right);
	}

	leftOut.onclick = function(){
		removeNum(left);
	}

	rightOut.onclick = function(){

		removeNum(right);
	}

}

function insertNum (position){
	var RegExp = /^[0-9]+$/;
	if(num.value ===""){
		alert("输入框不可为空");
	}
	else if(!RegExp.test(num.value)&&num.value!==""){
		alert("请输入一个整数");
	}else{
		var container = document.getElementById('container');
		var divs = container.children[0];
		var oDiv = document.createElement('div');
		oDiv.innerHTML = num.value;
		if (position ==="right") {
			container.append(oDiv);
		}
		if (position === "left") {
			container.insertBefore(oDiv,divs);
		}
	}
}

function removeNum(position){
	var container = document.getElementById('container');
	var div_first = container.children[0];
	var div_last = container.lastChild;
	if (container.children.length===0) {
		alert('队列已经是空的！');
	}
	else{
		if (position ==="left") {
			alert(div_first.innerHTML);
			container.removeChild(div_first);     
		}
		else{
			alert(div_last.innerHTML);
			container.removeChild(div_last);  
		}
	}
}



