
var selected = null;
var svg = null;
var ctrlObj = null;

// 图形及对应默认属性
var shapeInfo = {
	'tag-rect': 'x,y,width,height',
	'tag-img': 'x,y,width,height',
	'tag-lineX': 'x1,y1,x2,y2',
	'tag-lineY': 'x1,y1,x2,y2',
	'tag-line': 'x1,y1,x2,y2',
	'tag-text': 'x,y'
};
$(function(){
	var svgWidth = $("#svgAera").width();
	var svgHeight = $("#svgAera").height();
	svg = new SVG('svgAera').size('100%', '100%');
	$("#svgAera").on('click',function(e){
		if (e.target.tagName.toLowerCase() == 'svg') {
			selected = null;		
			svg.each(function() {
				try{
					this.draggable(false);
					this.selectize(false);
					this.resize('stop');
				}catch(e){}								
			})		
		}
	});
	//画板监听事件

	document.addEventListener('keydown', function(e){
		if(e.ctrlKey == true){
			if(e.keyCode == 67){
				if(selected == null) return;
				ctrlObj = selected;
			}//ctrl+C
			if(e.keyCode == 86){
				if(ctrlObj == null) return;
				ctrlObj.clone().click(function(){
					selectEl(this);	
					changeEl(this);
				});
			}
		}
		if(selected){
			var startX = selected.x();
			var startY = selected.y();
			var tempPosition = 0;
			//微调监听
			if(e.keyCode == 37){
				tempPosition = startX - 1;
				if(tempPosition > 0 || tempPosition == 0){
					selected.move(tempPosition, startY);
					selectEl(selected);
				}
			}else if(e.keyCode == 38){						
				tempPosition = startY - 1;
				if(tempPosition > 0 || tempPosition == 0){
					selected.move(startX, tempPosition);
					selectEl(selected);
				}
			}else if(e.keyCode == 39){
				tempPosition = startX + 1;
				if(tempPosition < svgWidth || tempPosition == svgWidth){
					selected.move(tempPosition, startY);
					selectEl(selected);					
				}
			}else if(e.keyCode == 40){
				tempPosition = startY + 1;
				if(tempPosition < svgHeight || tempPosition == svgHeight){
					selected.move(startX, tempPosition);	
					selectEl(selected);
				}
			}else if(e.keyCode == 46){
				deleteSvgObj();
			}
		}
		
	});
	$("#fill").on('change',function(){
		if(selected){
			selected.attr({'fill':$("#fill").val()});
		}
	});
	$("#strokeWidth,#stroke").on('change',function(){
		if(selected){
			selected.attr({'stroke-width':$("#strokeWidth").val(),'stroke':$("#stroke").val()});
		}
	});
	$(".loop-spacing,.loop-direction,.loop-data,.loop-num").on('change',function(){
		if(selected){
			selected.attr({'loop-direction':$(".loop-direction").val(),'loop-spacing':$(".loop-spacing").val(),'loop-data':$(".loop-data").val(),'loop-num':$(".loop-num").val()});
		}
	});
	$(".textSize,.textWeight,.textFamily,.replace-content,.display-content,.textWidth,.textAlign,.textHeight,.textVerticalAlign").on('change',function(){
		if(selected && selected.type == 'text'){
			selected.text($(".display-content").val());
			selected.attr({'width':$(".textWidth").val(),'align':$(".textAlign").val(),'height':$(".textHeight").val(),'vertical-align':$(".textVerticalAlign").val(),'display-content':$(".display-content").val(),'replace-content':$(".replace-content").val()});
			selected.font({'size':$(".textSize").val(),'weight':$(".textWeight").val(),'family':$(".textFamily").val()});
		}
	});
	$(".imgData,.imgType").on('change',function(){
		if(selected){
			selected.attr({'img-data':$(".imgData").val(),'img-type':$(".imgType").val()});
		}
	});
	$("#visible").on('change',function(){
		if(selected){
			selected.attr({'visible':$("#visible").val()});
		}
	});
});

//删除svg节点
function deleteSvgObj(){
	svg.each(function() {				
		try{
			this.draggable(false);
			this.selectize(false);
			this.resize('stop');
		}catch(e){}								
		})
	if(selected){
		selected.remove();
	}
	
}
//点击某个元素的时候清除其它元素的select resize属性
function claerElement(obj){
		svg.each(function() {
			if(obj != this){				
				try{
					this.draggable(false);
					this.selectize(false);
					this.resize('stop');
				}catch(e){					
				}								
			}
		})
}
//矩形
function rect(){	
	svg.rect(150,150).attr({'fill':'rgba(0,0,0,0)','stroke-width': 1,'stroke': '#ff0000','x':0,'y':0,'loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':''}).addClass('tag-rect').click(function(){
		selectEl(this);	
		changeEl(this);
	})
}
//自画矩形
function slfrect(){	
	svg.rect().draw().attr({'fill':'rgba(0,0,0,0)','stroke-width': 1,'stroke': '#ff0000','x':0,'y':0,'loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':''}).addClass('tag-rect').click(function(){
		selectEl(this);	
		changeEl(this);
	})
}
//横线
function linex(){	
	svg.line(0, 50, 100, 50).attr({'stroke-width': 1,'stroke': '#ff0000','loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':''}).addClass('tag-lineX').style('cursor','move').click(function(){
		selectEl(this);
		changeEl(this);
	});
}
//自画线
function slfline(){	
	svg.line().draw().attr({'stroke-width': 1,'stroke': '#ff0000','loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':''}).addClass('tag-line').style('cursor','move').click(function(){
		selectEl(this);
		changeEl(this);
	});
}
//竖线
function liney(){	
	svg.line(100, 0, 100, 100).attr({'stroke-width': 1,'stroke': '#ff0000','loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':''}).addClass('tag-lineY').style('cursor','move').click(function(){
		selectEl(this);
		changeEl(this);
	});
	/*svg.select('line.tag-lineY').click(function(){
		selectEl(this);
		changeEl(this);
	});*/
}
//折线
function polygon(){	
	svg.polygon('350,50 283,250 450,122 250,122 416,250').addClass('tag-polygon').click(function(){
		selectEl(this);
		changeEl(this);
	});
}
//文字
function textSvg(){
	var textVal = "输入内容";
	svg.text(textVal).font({
		  size: 18,
		  family: '宋体',
		  anchor: 'start',
		  fill: '#000',
		  weight: 'normal'
	}).attr({'fill':'#000','stroke-width': 1,'stroke': '#000','loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':'','width':'100','align':'left','height':'20','vertical-align':'bottom','display-content':'','replace-content':''}).addClass('tag-text').click(function(){
			selectEl(this);
			changeEl(this);
	});
}
//图片
function img(){	
	svg.rect(100,100).attr({'fill':'rgba(184,184,184,0)','stroke-width': 1,'stroke': '#3936ac','x':0,'y':0,'img-type':'code','img-data':'','loop-direction':'','loop-spacing':'','loop-data':'','loop-num':'','visible':''}).addClass('tag-img').click(function(){
		selectEl(this);	
		changeEl(this);
	})
}
//设置svg共同属性
function publicSet(){
	$("#fill").val(selected.attr('fill'));
	$("#stroke").val(selected.attr('stroke'));
	$("#strokeWidth").val(selected.attr('stroke-width'));
	$("#visible").val(selected.attr('visible'));
	//循环属性
	$(".loop-direction").val(selected.attr('loop-direction'));
	$(".loop-spacing").val(selected.attr('loop-spacing'));
	$(".loop-data").val(selected.attr('loop-data'));
}
//选中元素
function selectEl(shape) {
	selected = shape;
	claerElement(shape);
	shape.draggable({
	  minX: 0
	, minY: 0
	, snapToGrid: 1 
	});
	shape.selectize();
	shape.resize({snapToGrid:1});
	publicSet();
	//创建基本属性
	$(".attrs-form").html("");
	var attrs = shapeInfo[shape.attr("class")].split(',');
	for(var i = 0; i < attrs.length; i++){
		createBoard(attrs[i],shape.attr(attrs[i]));
	}
	//基本属性值改变时间
	$(".elClass").on('change',function(){
		var key = $(this).attr("name")+'';
		var val = $(this).val()+ "";
		if(selected){
			if(key == "x") selected.attr({'x':val});
			if(key == "y") selected.attr({'y':val});
			if(key == "width") selected.attr({'width':val});
			if(key == "height") selected.attr({'height':val});
			if(key == "x1") selected.attr({'x1':val});
			if(key == "x2") selected.attr({'x2':val});
			if(key == "y1") selected.attr({'y1':val});
			if(key == "y2") selected.attr({'y2':val});
		}	
	});
	
	if(shape.attr("class") == 'tag-text'){
		$(".textArea").show();
		$(".display-content").val(selected.text());
        $(".replace-content").val(selected.attr('replace-content'));
		$(".textSize").val(selected.font('size'));
		$(".textWeight").val(selected.font('weight'));
		$(".textFamily").val(selected.font('family'));
		$(".textWidth").val(selected.attr('width'));
		$(".textAlign").val(selected.attr('align'));
        $(".textHeight").val(selected.attr('height'));
        $(".textVerticalAlign").val(selected.attr('vertical-align'));
	}else{
		$(".textArea").hide();
	}
	if(shape.attr("class") == 'tag-img'){
		$(".imgArea").show();
		$(".imgType").val(selected.attr('img-type'));
		$(".imgData").val(selected.attr('img-data'));
	}else{
		$(".imgArea").hide();
	}
	
}
//元素改变
function changeEl(shape){
	shape.off('dragend');
	shape.off('resizedone');
	shape.on('dragend',function(e){
		selectEl(shape);
	});	
	shape.on('resizedone',function(e){
		selectEl(shape);
	});
}
// 创建属性面板方法
function createBoard(name, value) {
	var nameChinese = {'x1':'起始横坐标：','x2':'结束横坐标：','y1':'起始纵坐标：','y2':'结束纵坐标：','x':'起始横坐标：','y':'起始纵坐标：','width':'宽度：','height':'高度：'}
	var label = "<label style='width:100px;margin:0 20px 0 0'>"+ nameChinese[name] +"</label>";
	var number = "<input class='elClass' name="+ name +" style='width:100px' type='number' value="+ value +" />";
	$(".attrs-form").append(label+number+"<br />");
}
//json串返显生成模板
function returnShow(retrunText){
	//需要还原大小的属性
	var returnTpMap = {
		'rect': ['x','y','width','height','loopSpacing'],
		'img': ['x','y','width','height','loopSpacing'],
		'line': ['x1','y1','x2','y2','loopSpacing'],
		'text': ['x','originalY','fontSize','loopSpacing','width','height']
	};
	//需要改变key值的属性
	var nameKeyMap = {
		'rect': {'strokeWidth':'stroke-width','color':'stroke','loopDirection':'loop-direction','loopSpacing':'loop-spacing','loopData':'loop-data','loopNum':'loop-num'},
		'img': {'strokeWidth':'stroke-width','imgData':'img-data','imgType':'img-type','color':'stroke','loopDirection':'loop-direction','loopSpacing':'loop-spacing','loopData':'loop-data','loopNum':'loop-num'},
		'line': {'strokeWidth':'stroke-width','color':'stroke','loopDirection':'loop-direction','loopSpacing':'loop-spacing','loopData':'loop-data','loopNum':'loop-num'},
		'text': {'strokeWidth':'stroke-width','fontSize':'font-size','fontFamily':'font-family','fontWeight':'font-weight','originalY':'y','color':'stroke','loopDirection':'loop-direction','loopSpacing':'loop-spacing','loopData':'loop-data','loopNum':'loop-num'}
	};
	//var proportion = 96/72;
    var proportion = 1;
	//var retrunText = $(".returnText").val();

	if(!retrunText || retrunText == "") return;
	retrunText = JSON.parse(retrunText);
	$.each(retrunText,function(indexL,valueL){
		var tempMap = {};
		//还原属性大小
		if(valueL['rp'] == 'rp96'){
			$.each(returnTpMap[valueL['type']],function(i,val){
				valueL[val] = valueL[val] * proportion;
			});
		}
		//改变key值
		$.map(nameKeyMap[valueL['type']],function(i,val){
			valueL[nameKeyMap[valueL['type']][val]] = valueL[val];
			delete valueL[val];
		});
		$.map(valueL,function(indexL,valueM){
			tempMap[valueM] = valueL[valueM];
		});
		if(tempMap['type'] == 'rect'){
			tempMap['type'] = undefined;
			svg.rect().attr(tempMap).addClass('tag-rect').click(function(){
				selectEl(this);
				changeEl(this);
			});
		}else if(tempMap['type'] == 'line'){
			tempMap['type'] = undefined;
			svg.line().attr(tempMap).addClass('tag-line').style('cursor','move').click(function(){
				selectEl(this);
				changeEl(this);
			});
		}else if(tempMap['type'] == 'text'){
			tempMap['type'] = undefined;
			svg.text(tempMap['display-content']).attr(tempMap).addClass('tag-text').click(function(){
				selectEl(this);
				changeEl(this);
			});
		}else if(tempMap['type'] == 'img'){
			tempMap['type'] = undefined;
			svg.rect(tempMap['text']).attr(tempMap).addClass('tag-img').click(function(){
				selectEl(this);
				changeEl(this);
			});
		}
	});
}
//获得元素配置json串
function getElConfig(){
	//画板偏移量和border宽度
	var marginTop = parseInt($('.main').css('marginTop'));
	var mianBorder =parseInt($('.main').css('border-top-width'));
	var proportion = 0;
	var rp = "";
	if($(".main").attr('class').indexOf("rp72") > 0) proportion = 1,rp = "rp72";
	else proportion = 72/96,rp = "rp96";
    proportion = 1;
	var result = [];
	var templateRects = $(".tag-rect");
	var templateLines = $(".tag-lineX,.tag-lineY,.tag-line");
	var templateTexts = $(".tag-text");
	var templateImgs = $(".tag-img");
	templateRects.each(function(){
		var rectMap = {};
		rectMap.type = 'rect';
		rectMap.rp = rp;
		rectMap.x = $(this).attr("x")*proportion;
		rectMap.y = $(this).attr("y")*proportion;
		rectMap.width = $(this).attr("width")*proportion;
		rectMap.height = $(this).attr("height")*proportion;
		rectMap.fill = $(this).attr("fill");
		rectMap.color = $(this).attr("stroke");
		rectMap.strokeWidth = $(this).attr("stroke-width");
		rectMap.loopDirection = $(this).attr("loop-direction");
		rectMap.loopSpacing = $(this).attr("loop-spacing")*proportion;
		rectMap.loopData = $(this).attr("loop-data");
		rectMap.loopNum = $(this).attr("loop-num");
		rectMap.visible = $(this).attr("visible");
		result.push(rectMap);
	});
    templateImgs.each(function(){
        var imgMap = {};
        imgMap.type = 'img';
        imgMap.rp = rp;
        imgMap.x = $(this).attr("x")*proportion;
        imgMap.y = $(this).attr("y")*proportion;
        imgMap.width = $(this).attr("width")*proportion;
        imgMap.height = $(this).attr("height")*proportion;
        imgMap.fill = $(this).attr("fill");
        imgMap.imgData = $(this).attr("img-data");
        imgMap.imgType = $(this).attr("img-type");
        imgMap.strokeWidth = $(this).attr("stroke-width");
        imgMap.color = $(this).attr("stroke");
        imgMap.loopDirection = $(this).attr("loop-direction");
        imgMap.loopSpacing = $(this).attr("loop-spacing")*proportion;
        imgMap.loopData = $(this).attr("loop-data");
        imgMap.loopNum = $(this).attr("loop-num");
        imgMap.visible = $(this).attr("visible");
        result.push(imgMap);
    });
	templateLines.each(function(){
		var lineMap = {};
		lineMap.type = 'line';
		lineMap.rp = rp;
		lineMap.x1 = $(this).attr("x1")*proportion;
		lineMap.y1 = $(this).attr("y1")*proportion;
		lineMap.x2 = $(this).attr("x2")*proportion;
		lineMap.y2 = $(this).attr("y2")*proportion;
		lineMap.color = $(this).attr("stroke");
		lineMap.strokeWidth = $(this).attr("stroke-width");
		lineMap.loopDirection = $(this).attr("loop-direction");
		lineMap.loopSpacing = $(this).attr("loop-spacing")*proportion;
		lineMap.loopData = $(this).attr("loop-data");
		lineMap.loopNum = $(this).attr("loop-num");
		lineMap.visible = $(this).attr("visible");
		result.push(lineMap);
	});
	templateTexts.each(function(){
		var textMap = {};
		textMap.fontSize = $(this).attr("font-size")*proportion;
		textMap.type = 'text';
		textMap.rp = rp;
		textMap.x = $(this).attr("x")*proportion;
		textMap.y = parseFloat((($(this).offset().top-(marginTop+mianBorder))*proportion));//parseFloat(textMap['fontSize']);
		textMap.originalY= $(this).attr("y")*proportion;
		textMap["display-content"] = $(this).attr("display-content");
        textMap["replace-content"] = $(this).attr("replace-content");
        textMap.text = $(this).attr("replace-content");
		textMap.fontFamily = $(this).attr("font-family");
		textMap.fill = $(this).attr("fill");
		textMap.color = $(this).attr("stroke");
		textMap.fontWeight = $(this).attr("weight");
		textMap.strokeWidth = $(this).attr("stroke-width");
		textMap.loopDirection = $(this).attr("loop-direction");
		textMap.loopSpacing = $(this).attr("loop-spacing")*proportion;
		textMap.loopData = $(this).attr("loop-data");
		textMap.loopNum = $(this).attr("loop-num");
		textMap.visible = $(this).attr("visible");
		textMap.align = $(this).attr("align");
		textMap.width = $(this).attr("width");
        textMap['vertical-align'] = $(this).attr("vertical-align");
        textMap.height = $(this).attr("height");
        console.log(textMap);
        console.log(JSON.stringify(textMap));
		result.push(textMap);
	});

	//$(".returnText").val(JSON.stringify(result));
	return JSON.stringify(result);
}
//测试
function test(){
	
}
