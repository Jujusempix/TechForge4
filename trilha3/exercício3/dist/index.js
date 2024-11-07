"use strict";
class Pagamento {
    processar() {
    }
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    processar() {
        if (this.numeroCartao.toString().length === 16) {
            console.log("pagamento por cartão completo");
        }
        else {
            console.log("houve uma falha no pagamento");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    constructor(numeroDeCartao) {
        super();
        this.numeroCorreto = 935842130;
        this.numeroDeCartao = numeroDeCartao;
    }
    processar() {
        if (this.numeroCorreto === this.numeroDeCartao) {
            console.log("Número de cartão correto.");
        }
        else {
            console.log("Número de cartão errado.");
        }
    }
}
const cartaoCerto = new PagamentoCartao(1234567890123456);
const cartaoFalha = new PagamentoCartao(1234512345);
const boletoCerto = new PagamentoBoleto(935842130);
const boletoFalha = new PagamentoBoleto(666420157);
cartaoCerto.processar();
cartaoFalha.processar();
boletoCerto.processar();
boletoFalha.processar();
