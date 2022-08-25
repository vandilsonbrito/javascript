/* 
Explicação:

Por padrão, a função sort() do javascript ordena de forma léxica o seu Array. Porém opcionalmente você pode passar uma função no parâmetro de entrada, para que ela retorne o resultado desejado.
Sobre a função sort():

    sort([sortfunction])

    Descrição: ordena um array de forma léxica por padrão, porém pode ser passado uma função para ordenação.
    Parâmetros:

    sortFunction (function) opcional:

    Uma função que retorne a ordem desejada para ser utilizada no sort().
*/


const calculandoAlturas = (altura1, taxa1, altura2, taxa2) => {
    let array = [altura1, altura2]

    function sortfunction(a, b){
        return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
    }
    array.sort(sortfunction)

    let i = 0, aux1 = 0, aux2 = 0
    if(altura1 !== altura2) {
        if(taxa1 !== taxa2) {

            if(array[1] == altura1) {
                while(altura1 >= altura2) {
                    altura1 = altura1 + taxa1
                    altura2 = altura2 + taxa2
                    i++
                }
            }
            else if(array[1] == altura2){
                while(altura2 >= altura1) {
                    altura1 = altura1 + taxa1
                    altura2 = altura2 + taxa2
                    i++
                }
            }
            console.log("A criança com menor altura levará " + i + " ano(s) para ultrapassar a outra.")
        }
        else {
            console.log("A criança menor não será mais alta que a outra!")
        }
    }
    else {
        console.log("As crianças têm a mesma altura!")
    }
}

calculandoAlturas(110, 1, 100, 2)


  
  