let nomeProduto = 'Camiseta'
let precoProduto = 29.90
let quantidadeProduto = 10
let estoque = true
let imagem = 'url da imagem'
let corProduto = 'Azul'

// o prompt mostra um dialogo de entrada de dados e retorna uma string

let retorno = alert ('A camiseta está com 10% de desconto')

quantidade = prompt('digite a quantidade de produtos que deseja comprar')
console.log( quantidade)

let intQuantidade = parseInt(quantidade) 
git 
console.log( `O produto ${nomeProduto} custa ${precoProduto * 0.9 } reais e tem ${quantidadeProduto - intQuantidade} unidades em estoque`)

let total = intQuantidade * (precoProduto * 0.9)

let retornoTotal = alert(`total: $${total}`)
console.log( retornoTotal)

// console.log(prompt('digite a quantidade de produtos que deseja comprar'))
