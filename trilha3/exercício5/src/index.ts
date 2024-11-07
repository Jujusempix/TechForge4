abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
      this.nome = nome;
      this.salario = salario;
  }

  abstract calcularBonus(): number;

  getSalario(){
      return this.salario;
  }

  getNome(){
      return this.nome;
  }
}

class Gerente extends Funcionario {
  calcularBonus(){
      return this.getSalario() * 0.10;
  }
}

class Operario extends Funcionario {
  calcularBonus(){
      return this.getSalario() * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]){
  funcionarios.forEach(funcionario => {
      const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
      console.log(`Funcionário: ${funcionario.getNome()} com salário de ${funcionario.getSalario()}. Salário atual com Bônus: ${salarioFinal.toFixed(2)}`);
  });
}

const funcionarios: Funcionario[] = [
  new Gerente("Malenia", 5000),
  new Operario("Cleiton", 2000),
  new Gerente("Johnatan", 7000),
  new Operario("Dante", 2500)
];

calcularSalarioComBonus(funcionarios);