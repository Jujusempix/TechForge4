"use strict";
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(total, novoSaldo) {
        total = this.saldo + novoSaldo;
        console.log(`mi nombre es ${this.titular} antes o seu saldo estava com ${this.saldo} reais. Seu saldo atual é ${total}`);
    }
    sacar(total, novoSaldo) {
        total = this.saldo - novoSaldo;
        console.log(`mi nombre es ${this.titular} antes o seu saldo estava com ${this.saldo} reais. Seu saldo atual é ${total}`);
    }
}
const conta1 = new ContaBancaria('antonio', 300);
conta1.depositar(0, 50);
conta1.sacar(0, 30);
