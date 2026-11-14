/*A03-Q03
Leia um limite e exiba todos os números pares de 0 até ele.*/

// processo repetitivo : testar se o número é par ou não. SE for par mostar no console.
// as informações que precisamos: o número limite e o numero inicial

let limite = Number(prompt("Digite um número limite"))
let numero = 0

while( numero <= limite){
    if ( numero %2 ==0){
        console.log(numero)
    }
    numero ++
}

console.log("Fim do laço")
