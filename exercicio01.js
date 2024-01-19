//Exercício 1

const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];
const novoArray = [];


for (let i = 0; i < arrayNumeros.length ; i++){

    if (i === 0){
        novoArray.push(arrayNumeros[i])
    }
    else {
        let resultado = Number(arrayNumeros[i]) + Number(arrayNumeros[i-1]);
        
        if (resultado %2 === 0) {
            novoArray.push(resultado)
        }
        else{
            novoArray.push(Number(arrayNumeros[i-1]) + 0.5)
        }
    }
}

console.log(novoArray)