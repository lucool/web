//获取所有的标签对象
var box = document.getElementById("box");
var pic = document.getElementById("pic");
var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var liArr = document.getElementsByTagName("li");

//初始状态下，将第一个li的背景设置为选中
liArr[0].style.backgroundColor = "red";

//定义一个全局变量，记录图片的编号
currentPage = 1;

//启动一个间歇性定时器：更换图片，更换li的选中状态
var timer = setInterval(startloop,1000);

function startloop(){
	currentPage++;
	
	changeImage()
}
function changeImage(){
		
	//临界值的判断
	if(currentPage == 9){
		currentPage = 1;	
	}else if(currentPage == 0){
		currentPage = 8;
	}
	
	//切换图片
	pic.src = "img/" + currentPage + ".jpg";
	
	//切换小圆点的选中状态
	//将原本选中的小圆点重置为不选中状态
	for(var i = 0;i < liArr.length;i++){
		liArr[i].style.backgroundColor = "lightgray";
	}
	
	liArr[currentPage - 1].style.backgroundColor = "red";
}

//添加鼠标事件
//鼠标移入div
box.addEventListener("mouseover",overfunc,false);
function overfunc(){
	//停止定时器的工作
	clearInterval(timer);
	
	//显示左右按钮
	leftBtn.style.display = "block";
	rightBtn.style.display = "block";
}

//鼠标移出div
box.addEventListener("mouseout",outfunc,false);
function outfunc(){
	//恢复定时器的工作【注意：恢复指的是重新创建】
	timer = setInterval(startloop,1000);
	
	//隐藏左右按钮
	leftBtn.style.display = "none";
	rightBtn.style.display = "none";
}

//鼠标移入左右按钮
leftBtn.addEventListener("mouseover",deepfunc,false);
rightBtn.addEventListener("mouseover",deepfunc,false);
function deepfunc(){
	//颜色加深，表示选中
	this.style.backgroundColor = "rgba(0,0,0,0.6)";
}

//鼠标移出左右按钮
leftBtn.addEventListener("mouseout",nodeepfunc,false);
rightBtn.addEventListener("mouseout",nodeepfunc,false);
function nodeepfunc(){
	//颜色恢复。表示移出
	this.style.backgroundColor = "rgba(0,0,0,0.2)";
}

//鼠标点击左右按钮
leftBtn.addEventListener("click",function(){
	currentPage--;
	changeImage();
},false);
rightBtn.addEventListener("click",function(){
	currentPage++;
	changeImage();
},false);

//鼠标移入小圆点
for(var i = 0; i < liArr.length;i++){
	//给每个小圆点添加一个标记，用于记录第几张图片
	liArr[i].index = i + 1;
	
	//给每个小圆点的li添加悬浮事件【mouseover】
	liArr[i].addEventListener("mouseover",function(){
		currentPage = this.index;
		changeImage();
	},false);
}
