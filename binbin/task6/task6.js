var text = document.getElementsByTagName('textarea');
var container = document.getElementById('container');
var Data=[];

window.onload = function(){
	var insert = document.getElementById('insert');
	var inquiry = document.getElementById('inquiry');
   
	insert.onclick = function(){
		var words = text[0].value;
		words = words.replace(/[^0-9a-zA-Z]/g," ");
		var arr = words.split(" ");
		for(i=0;i<arr.length;i++){
            var oDiv = document.createElement('div');
            oDiv.innerHTML = arr[i];
            container.append(oDiv);
            Data.push(arr[i]);
		}
	}

	inquiry.onclick = function(){
        var input = document.getElementById('keyWord').value;
        container.innerHTML = Data.map(function(d) {
            if (input != null && input.length > 0) {
                d = d.replace(new RegExp(input, "g"), "<span class='found'>" + input + "</span>");
            }
            return '<div>' + d + '</div>';
        }).join('');
	}

}
