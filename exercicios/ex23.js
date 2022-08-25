const mediaPonderada = (codigo, [nota1, nota2, nota3]) => {

    let array = [nota1, nota2, nota3]
    let arrayOrdeando = [nota1, nota2, nota3].sort()
    let media = (((arrayOrdeando[2]) * 4) + ((arrayOrdeando[1]) * 3) + ((arrayOrdeando[0]) * 3)) / 10
    
    if(media >= 5) {
        console.log("Código: " + codigo + ". Notas: " + array[0] + " " + array[1] + " " + array[2] + " Média: " + media.toString().replace(".", ",") + ". APROVADO!")
    }
    else if(media < 5) {
        console.log("Código: " + codigo + ". Notas: " + array[0] + " " + array[1] + " " + array[2] + " Média: " + media.toString().replace(".", ",") + ". REPROVADO!")
    }
}

mediaPonderada(01, [5, 2, 1])