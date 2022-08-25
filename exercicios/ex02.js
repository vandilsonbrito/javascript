function triangulo(lado1, lado2, lado3 ) {
    if(lado1 == lado2 && lado2 == lado3) {
        console.log("Triânglo Equilátero")
    }
    else if((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
        console.log("Triânglo Isóceles")
    }
    else if((lado1 != lado2) && (lado1 != lado3) || (lado2 != lado3)) {
        console.log("Triânglo Escaleno")
    }
}

triangulo(6, 6, 6)