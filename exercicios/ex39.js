const trocaElementos = (array1, array2) => {
    array1 = array1.concat(array2)
   
    array1 = array1.reverse()
    for( let i = 0; i < /*(array1.length) / 2*/ 3; i++) {
        array2[i] = array1.pop()
    }
    console.log(array1)
    console.log(array2)
    
}

trocaElementos([1, 2, 3], [4, 5, 6])