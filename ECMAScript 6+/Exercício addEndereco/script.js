function addEndereco(endereco){
    const {cidade, estado} = endereco;
    const novoEndereco = {cidade, estado, pais:'Brasil'}
    console.log(`${novoEndereco.cidade}, ${novoEndereco.estado}, ${novoEndereco.pais}`);
}
addEndereco({cidade:'Campina Grande', estado: 'Paraiba'});