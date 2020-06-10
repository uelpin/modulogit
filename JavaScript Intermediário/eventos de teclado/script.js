function apertou(event){
	console.log("Apertou a tecla: "+event.keyCode);
}
function soltou(event){
	console.log("Soltou a tecla: "+event.keyCode);
}
function press(event){
	console.log("Pressinou a tecla: "+event.keyCode);
}
function shif(event){
	if(event.shiftKey == true){
		console.log("Pressiounou o shift!");
	}
}