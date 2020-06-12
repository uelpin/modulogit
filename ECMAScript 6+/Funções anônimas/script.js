//------------------------------------------Modelo Antigo

function adicionar(...numeros){
    let total = numeros.reduce(function(atual,x){
        return atual+x;
    });
    console.log(total);

}
adicionar(1,2,3,4,5,6);

//------------------------------------------Modelo Novo
function adicionar(...numeros){
    let total = numeros.reduce((atual,x)=>{
        return atual+x;
    });
    console.log(total);
}
adicionar(1,2,3,4,5,6);

//------------------------------------------Outra Forma
function adicionar(...numeros){
    let somar = (numeros) => {
     let total = 0;
     for(let i in numeros){
        total += numeros[i];
     }  
     return total;   
    }
    console.log(somar(numeros));
}
adicionar(1,2,3,4,5,6);