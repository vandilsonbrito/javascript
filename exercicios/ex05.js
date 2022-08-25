function arredondamento(valor) {
    console.log("R$" + valor.toFixed(2).toString().replace(".", ",")) 
}
arredondamento(0.3000000000000000000000004)