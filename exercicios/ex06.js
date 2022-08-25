function jurosSimples(c, t, i) {
        console.log("Montante Juros Simples: " + (c + (c * t * i)))
}
function jurosCompostos(c, t, i) {
    console.log("Montante Juros Compostos: " + (c * Math.pow((1 + i), t)).toFixed(2))
}

jurosSimples(1000, 1, 0.12)
jurosCompostos(2000, 4, 0.03)