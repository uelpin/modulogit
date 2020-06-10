function validar(){
	valor =(document.getElementById("numero").value);
	console.log(valor);
	if (valor.length <= 2){
		console.log("true");
		return true;
	}
	else{
		console.log("false");
		alert("Você digitou um numero muito grande!");
		return false;
	}
}