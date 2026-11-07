let nomeProduto = 'Camiseta'
let precoProduto = 29.90
let quantidadeProduto = 10
let estoque = true
let imagem = 'url da imagem'
let corProduto = 'Azul'

console.log(nomeProduto)
console.log(typeof nomeProduto)

console.log(precoProduto)
console.log(typeof precoProduto)

console.log(quantidadeProduto)
console.log(typeof quantidadeProduto)

console.log(estoque)
console.log(typeof estoque)

console.log(imagem)
console.log(typeof imagem)

console.log(corProduto)
console.log(typeof corProduto)

//  concatenação de texto : pode utilizar valores de variáveis mais texto definido pelo desenvolvedor para criar um novo texto ou uma exibição melhor da informação

console.log(' o produto ' + nomeProduto + ' custa ' + precoProduto + ' reais e tem ' +quantidadeProduto+ ' unidades em estoque ')

// pode-se usar o tamplate string / literal para a mesma concatenação de texto

console.log( `O produto ${nomeProduto} custa ${precoProduto} reais e tem ${quantidadeProduto - 5} unidades em estoque`)
console.log(quantidadeProduto)