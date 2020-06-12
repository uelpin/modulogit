let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros);

//------------------------------------------

let info = {
    nome: 'binho',
    sobrenome:'thebest',
    idade: 22
};

let novaInfo = {
    ...info,
    cidade:'Campina Grande',
    estado:'paraiba',
    pais:'Brasil'
};
console.log(novaInfo);
// pode ser usado em funçõe também 