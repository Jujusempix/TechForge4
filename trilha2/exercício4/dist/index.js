"use strict";
class temperatura {
    constructor(valorCelsius, total) {
        this.valorCelsius = valorCelsius;
        this.total = total;
    }
    converteKelvin() {
        this.total = this.valorCelsius + 273;
        console.log(`convertendo ${this.valorCelsius} graus celsius para Kelvin ${this.total}`);
    }
    converteFahrenheit() {
        this.total = (1.8 * this.valorCelsius) + 32;
        console.log(`convertendo ${this.valorCelsius} graus celsius para Fahrenheit ${this.total}`);
    }
}
const temperatura1 = new temperatura(25, 0);
temperatura1.converteKelvin();
temperatura1.converteFahrenheit();
