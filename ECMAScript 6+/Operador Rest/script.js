function adicionar(...numeros){

    console.log(numeros);

}
adicionar(5,6,7,8,9,10,11,12,13);

//--------------------------------------------------
function adicionarNomes(nomes, ...novosNomes){
novoCojunto = [...nomes,...novosNomes];
console.log(novoCojunto);    
}

let nomes = ["binho","thebest"];
let outros = adicionarNomes(nomes, "maria","paulo","joão");