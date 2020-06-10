function addBola(){
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	
	var p1 = Math.floor(Math.random()*500);
	var p2 = Math.floor(Math.random()*400);
	bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;");
	bola.setAttribute("onClick", "estourar(this)");
	document.body.appendChild(bola);
}
function estourar(elemento){
	document.body.removeChild(elemento);
	cont++;
	document.getElementById("contador").innerHTML = "PONTUAÇÃO: "+cont;
}
function iniciar(){
	setInterval(addBola, 1000)
	cont = 0;
	document.getElementById("contador").innerHTML = "PONTUAÇÃO: "+cont;
}