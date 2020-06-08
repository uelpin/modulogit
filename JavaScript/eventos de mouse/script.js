function somar(){
	var campo1 = parseInt(document.getElementById("campo1").value);
	var campo2 = parseInt(document.getElementById("campo2").value);
	var resultado = campo1+campo2;
	alert("O Resultado da soma é: "+resultado);
}
function apertouMouse(){
	console.log("APERTOU O MOUSE!");
}
function soltouMouse(){
	console.log("SOLTOU O MOUSE!")
}
function mouseCima(){
	console.log("MOUSE PASSOU POR CIMA!")
}
function mouseSaiu(){
	console.log("MOUSE SAIU DE CIMA!!")
}
function mouseMoveu(){
	console.log("MOUSE FOI MOVIDO!")
}
function Clickou(){
	console.log("Clickou!")
}
function menu(){
	console.log("BOTAO DIREITO")
	return false
}
function cliqueDuplo(){
	console.log("CLICKOU 2 VEZES!")
}