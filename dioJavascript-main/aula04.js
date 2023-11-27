function imc(peso, altura) {
    let resultado = peso / Math.pow(altura, 2);
    if (resultado < 18.5) {
        console.log('Abaixo do peso');
    }
    else if (resultado < 25) {
        console.log('Peso normal');
    }
    else if (resultado < 30) {
        console.log('Acima do peso');
    }
    else if (resultado < 40) {
        console.log('Obeso');
    }
    else {
        console.log('Obesidade Grave');
    }
}

imc(810, 1.81);