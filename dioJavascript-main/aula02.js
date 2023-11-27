function valorViagem(precoEtanol, precoGasolina, tipoCombustivel, consumo, distancia) {
    if ((tipoCombustivel == 'gasolina') || (tipoCombustivel == 'Gasolina')) {
        console.log('O Valor da viagem sera: R$' + (precoGasolina * (distancia / consumo)).toFixed(2));
    } else if ((tipoCombustivel == 'Etanol') || (tipoCombustivel == 'etanol')) {
        console.log('O Valor da viagem sera: R$' + (precoEtanol * (distancia / consumo)).toFixed(2));
    } else {
        console.log('Combustivel Invalido!')
    }
}

valorViagem(5.79, 6.66, 'gasolina', 10, 100);