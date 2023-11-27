function mediaEscolar(nota1, nota2, nota3) {
    let notaFinal = (nota1 + nota2 + nota3) / 3;

    if (notaFinal < 5) {
        console.log('Reprovação');
    } else if (notaFinal <= 7) {
        console.log('Recuperação');
    } else {
        console.log('Passou de semestre');
    }
}

mediaEscolar(7, 8, 7);