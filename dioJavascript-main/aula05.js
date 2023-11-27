function pagamento(valor, tipoDePagamento, numeroDeParcelas) {
    function pagamentoAvista() {

        if (tipoDePagamento == 'pix') {
            valor = valor - (valor * 0.15);
            console.log('O Valor total e R$:' + valor);
        } else if (tipoDePagamento == 'debito') {
            valor = valor - (valor * 0.10);
            console.log('O Valor total e R$:' + valor);
        }
    }
    function pagamentoApraso(numeroDeParcelas) {

        if (numeroDeParcelas <= 2) {
            console.log('O Valor total e R$:' + valor);
        } else {
            valor = valor + (valor * 0.10);
            console.log('O Valor total e R$:' + valor);
        }
    }
    if (tipoDePagamento == 'debito' || tipoDePagamento == 'pix') { pagamentoAvista() } else {
        pagamentoApraso(numeroDeParcelas);
    }
}
pagamento(50, 'parcelado', 2);