//打印机默认大小
var width = 595;
var height = 842;
$(function(){
	getMarginLeftVal();
})
//设置纸张大小
function mianSize(paperName){
	console.log(document.body.clientWidth);
	if($(".main").attr('class').indexOf("rp72") > 0){
		if(paperName == 'A4'){
				$(".main").width(width);
				$(".main").height(height);
		}else{
			$(".main").width(width);
			$(".main").height(height/3);
		}
	
	}else{
		if(paperName == 'A4'){
				$(".main").width(width*96/72);
				$(".main").height(height*96/72);
		}else{
			$(".main").width(width*96/72);
			$(".main").height(height*96/72/3);
		}
	}
	$(".main").removeClass('A4 34A').addClass(paperName);
}
//设置分辨率
function rpSize(rpValue){
	if(rpValue == "rp72"){
		if($(".main").attr('class').indexOf("A4") > 0){
				$(".main").width(width);
				$(".main").height(height);
		}else{
			$(".main").width(width);
			$(".main").height(height/3);
		}
		getMarginLeftVal();
	}else{
		if($(".main").attr('class').indexOf("A4") > 0){
				$(".main").width(width*96/72);
				$(".main").height(height*96/72);
				console.log(11);
		}else{
			$(".main").width(width*96/72);
			$(".main").height(height*96/72/3);
			
		}
		getMarginLeftVal();
	}	
	$(".main").removeClass('rp96 rp72').addClass(rpValue);
}
//获取画板向左距离
function getMarginLeftVal(){
	var main = $('.main').width();
	var right = $('.sidebar-right').width();
	var left = $('.sidebar-left').width();
	var totalWidth = window.screen.width;
	var resultVal = (totalWidth - (main + right + left))/2 + left - totalWidth/70;
	//$(".main").css('left',resultVal+"px");
}
//设置画板背景（套打使用）
function setBg(node) {  
	var imgURL = "";  
	try{  
		var file = null;  
		if(node.files && node.files[0] ){  
			file = node.files[0];  
		}else if(node.files && node.files.item(0)) {  
			file = node.files.item(0);  
		}  
		//Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径  
		try{  
			imgURL =  file.getAsDataURL();  
		}catch(e){  
			imgURL = window.URL.createObjectURL(file);  
		}  
	}catch(e){  
		if (node.files && node.files[0]) {  
			var reader = new FileReader();  
			reader.onload = function (e) {  
				imgURL = e.target.result;  
			};  
			reader.readAsDataURL(node.files[0]);  
		}
	}  
	$('.main').css('background',"url("+ imgURL +")");
	$('.main').css('background-repeat',"no-repeat");
	$('.main').css('background-size',"100%");
	return imgURL;  
}  
function reduction(){
	$('.main').css('background',"url(./img/grid.png)");
}
/*	
 * templateJson 模板JSONArr
 * dataJson 数据JSONObj
 * 模板json复制方法
 */
function templatevalueJson(templateJson,dataJson){
	var resultData = [];
	var rectData = [];
	var lineData = [];
	var textData = [];
	var imgData = [];
	
	var loopData = [];
	$.each(templateJson,function(i,tmap){
		if(tmap['loopDirection'] != ''){//不为空即为需要循环
			var tempDatas = dataJson[tmap['loopData'].substring(2, tmap['loopData'].length - 1)];//循环标识获取数据集合
			$.each(tempDatas,function(loopkey,loopValue){
				if(loopkey == 0){
					loopData.push(transData(tmap,loopValue));
				}else{
					//替换当前模板json串为加了循环坐标以后的json串
					tmap = setLocation(tmap,tmap['loopDirection'],tmap['loopSpacing']);
					loopData.push(transData(tmap,loopValue));
				}
				
			});
		}else{
			resultData.push(transData(tmap,dataJson));
		}
	});
	var test = [];
	test.push(resultData.concat(loopData));
	return test;
}
//表达式转换为数据
function transData(elJson,dataJson){
	var r = /\$\{(.+?)}/g; 
	elJson = JSON.stringify(elJson);
	var matches =elJson.match(r);  
	$(matches).each(function () {
		var group = this.substring(2, this.length - 1);
		var val = eval("(function (){return function(dataJson){return dataJson." + group + ";}})()");
		val = val(dataJson);
		elJson = elJson.replace("${" + group + "}", val ? val : "");
	}); 
	if(elJson['visible'] == 'false') return {};
	else return elJson;
	
}
//循环计算坐标方法
// direction 循环方向
//spacing 间距
function setLocation(json,direction,spacing){
	if(direction == 'portrait'){//纵向
		json['y'] = parseFloat(json['y'],10) + parseFloat(spacing,10);
	}else if(direction == 'transverse'){//横向
		json['x'] = parseFloat(json['x'],10) + parseFloat(spacing,10);
	}
	return json;
}












