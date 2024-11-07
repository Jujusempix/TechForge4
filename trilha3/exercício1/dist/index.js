"use strict";
class Veiculo {
    constructor(tipo, dirigibiladade) {
        this.tipo = tipo;
        this.dirigibiladade = dirigibiladade;
    }
    mover() {
        console.log(`${this.tipo} está ${this.dirigibiladade}`);
    }
}
class Bicileta extends Veiculo {
    constructor(tipo, dirigibiladade) {
        super(tipo, dirigibiladade);
    }
}
class Carro extends Veiculo {
    constructor(tipo, dirigibiladade) {
        super(tipo, dirigibiladade);
    }
}
const veiculo = new Veiculo("O Veiculo", "se movendo");
const bike = new Bicileta("A bicicleta", "pedalando");
const carro = new Carro("O carro", "dirigindo");
veiculo.mover();
bike.mover();
carro.mover();
