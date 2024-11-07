"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    getNome() {
        return this.nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`Funcionário: ${funcionario.getNome()} com salário de ${funcionario.getSalario()}. Salário atual com Bônus: ${salarioFinal.toFixed(2)}`);
    });
}
const funcionarios = [
    new Gerente("Malenia", 5000),
    new Operario("Cleiton", 2000),
    new Gerente("Johnatan", 7000),
    new Operario("Dante", 2500)
];
calcularSalarioComBonus(funcionarios);
