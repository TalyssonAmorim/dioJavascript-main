function vI(idade) {
    return idade >= 18;
}

console.log(vI(17) ? 'maior de idade' : 'Menor de idade');

function aplicarDesconto(preco, desc) {
    return preco - (preco * (desc / 100));
}
function aplicarJuros(preco, nParcelas) {
    if (nParcelas <= 2) {
        return preco;
    } else if (nParcelas >= 3) {
        return preco + (preco * (10 / 100));
    }

}
var pagamento = 1;
switch (pagamento) {
    case 1:
        console.log(aplicarDesconto(100, 10));
        break;
    case 2:
        console.log(aplicarDesconto(100, 15));
        break;
    case 3:
        console.log(aplicarJuros(100, 2));
        break;
    case 4:
        console.log(aplicarJuros(100, 3));
        break;
    default:
        console.log('opção invalida!');
        break;
}

