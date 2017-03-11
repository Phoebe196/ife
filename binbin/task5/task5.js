var num = document.getElementById('number');

window.onload = function(){
	var leftIn = document.getElementById('leftIn');
	var rightIn = document.getElementById('rightIn');
	var leftOut = document.getElementById('leftOut');
	var rightOut = document.getElementById('rightOut');
	var left = "left",right = "right";
	var container = document.getElementById('container');
	var btn = document.getElementById('sort');

    // 分别绑定四个按钮点击事件
    leftIn.onclick = function(){
    	if(container.children.length<60){
    		insertNum(left);
    	}else{
    		leftIn.disabled = true;
    	}

    }

    rightIn.onclick = function(){
    	if (container.children.length<60) {
    		insertNum(right);
    	}else{
    		rightIn.disabled = true;
    	}
    }

    leftOut.onclick = function(){
    	removeNum(left);
    }

    rightOut.onclick = function(){

    	removeNum(right);
    }

    btn.onclick = function(){
    	sort();
    }
}

function insertNum (position){
	// 检测输入内容是否非空和数字格式
	var RegExp = /^[0-9]+$/;
	if(num.value ===""){
		alert("输入框不可为空");
	}
	else if(!RegExp.test(num.value)&&num.value!==""){
		alert("请输入一个整数");
	}
	else if(num.value<10||num.value>100){
		alert("请输入一个10-100之间的整数");
	}
	else{
		// 创建div元素并根据左右侧按钮的不同插入列队
		var container = document.getElementById('container');
		var divs = container.children[0];
		var oDiv = document.createElement('div');
		oDiv.style.height = num.value+'px';
		if (position ==="right") {
			container.append(oDiv);
		}
		if (position === "left") {
			container.insertBefore(oDiv,divs);
		}
	}
}

function removeNum(position){
	// 左边移除从container的第一个div子元素，右边移除测试最后一个子元素
	var container = document.getElementById('container');
	var div_first = container.children[0];
	var div_last = container.lastChild;
	if (container.children.length===0) {
		alert('队列已经是空的！');
	}
	else{
		if (position ==="left") {
			var f_height = div_first.style.height.replace('px','');
			alert(f_height);
			container.removeChild(div_first);     
		}
		else{
			var l_height = div_last.style.height.replace('px','');
			alert(l_height);
			container.removeChild(div_last);  
		}
	}
}

function sort(){
	var container = document.getElementById('container');
	var length = container.children.length;
	var i = 0,j=1,timer = null,temp=0;
    

	timer = setInterval(run,25);
	function run(){
      if(i<length){
      	if(j<length){
      		var data1 = parseInt(container.children[i].style.height.replace('px',''));
      		var data2 = parseInt(container.children[j].style.height.replace('px',''));
      		if(data1>data2){
                 temp=data1;
                 data1=data2;
                 data2=temp;
                 container.children[i].style.height = data1+'px';
                 container.children[j].style.height = data2+'px';
      		}
      		 
      		j++;
      	}else{
      		i++;
      		j=i+1;
      		
      	}
      }else{
      	clearInterval(timer);
      }
	}
}


