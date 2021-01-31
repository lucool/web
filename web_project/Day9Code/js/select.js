$(function(){
	//给导航中的li添加单击事件
	$("#nav li").bind("click",function(){
		
		//一、导航的切换
		//1.清空所有li上的class
		//$("#nav li").removeClass("active");
		
		//2.给点击的li添加class
		//eq(num):获取第num个元素
		//index()：获取当前被操作的元素的下标
		//$("#nav li").eq($(this).index()).addClass("active");
		
		//链式调用
		$("#nav li").removeClass("active").eq($(this).index()).addClass("active");
		
		//二、正文的切换
		$("#panel .panel").removeClass("active").eq($(this).index()).addClass("active");
			
	});
});
