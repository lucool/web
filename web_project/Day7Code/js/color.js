function randomColor(){
	//rgb(r,g,b),取值范围为0~255
	//Math.random
	
	//var r = Math.floor(Math.random() * 256);
	
	var r = parseInt(Math.random() * 256);
	var g = parseInt(Math.random() * 256);
	var b = parseInt(Math.random() * 256);
	
	
	
	return  "rgb(" + r +  ","  + g + ","  + b +  ")";
	
}
