const precoProduto = 10;
const precoNoDebito = precoProduto - 0.10;
const precoDinhoOuPix = precoProduto - 0.15;
const precoDuasVezesNoCartao = precoProduto;
const precoMaisDeDuasVezesNoCartao = precoProduto + 0.10;
const formaDePagamento = 5;

/* 
    Forma de pagamento:
    1 - Débito
    2 - dinherio
    3 - PIX
    4 - 2X no cartão
    5 - Mais de 2x no cartão
*/

if (formaDePagamento === 1) {
    console.log('No débito é ' + precoNoDebito.toFixed(2));
} else if (formaDePagamento === 2 || formaDePagamento === 3) {
    console.log('No dinheiro ou PIX é ' + precoDinhoOuPix.toFixed(2));
} else if (formaDePagamento === 4) {
    console.log('No cartão em 2x é ' + precoDuasVezesNoCartao.toFixed(2));
} else {
    console.log('No cartão em mais de 2x é ' + precoMaisDeDuasVezesNoCartao.toFixed(2));
}

