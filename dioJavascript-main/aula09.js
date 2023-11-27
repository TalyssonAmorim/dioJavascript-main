class Pessoa {
  nome;
  peso;
  altura;
  imc;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    const imc = (this.peso / (this.altura * this.altura)).toFixed(2);
    if (imc < 18.5) {
      this.imc = "Magreza";
    } else if (imc < 25) {
      this.imc = "Normal";
    } else if (imc < 30) {
      this.imc = "Sobrepeso";
    } else if (imc < 35) {
      this.imc = "Obesidade grau I";
    } else if (imc < 40) {
      this.imc = "Obesidade grau II";
    } else {
      this.imc = "Obesidade grau III";
    }
    return console.log(
      `Olá ${this.nome}, seu IMC atualmente é: ${imc} e está categorizado como ${this.imc}`
    );
  }
}


const mozao = new Pessoa("Talysson", 112,1.81);
mozao.calcularImc();
