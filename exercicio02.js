//Exercício 2

const arrayNumero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const pares = arrayNumero.filter( (n) => {
        return n % 2 === 0;
    })
    console.log(pares)


const newArray = []
    
    arrayNumero.forEach( arrayNumero => {
        if (arrayNumero % 2 === 0){
            newArray.push(arrayNumero)
        }
    })
console.log(newArray)