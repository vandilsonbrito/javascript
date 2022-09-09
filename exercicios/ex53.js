let array = ["JavaScript", 2, true, 70,"ela"]

function filtrarNumeros(array) {
    return array.filter(elemento => typeof elemento === "number")
}
console.log(filtrarNumeros(array))



