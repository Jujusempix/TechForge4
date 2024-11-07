"use strict";
class FiguraGeometrica {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
}
class Circulo extends FiguraGeometrica {
    constructor(nome, raio) {
        super(nome);
        this.raio = raio;
    }
    calculaArea() {
        return Math.PI * (this.raio * this.raio);
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(nome, lado) {
        super(nome);
        this.lado = lado;
    }
    calculaArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(nome, base, altura) {
        super(nome);
        this.base = base;
        this.altura = altura;
    }
    calculaArea() {
        return (this.altura * this.base) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura) => {
        console.log(`Área da Figura ${figura.getNome()}: ${figura.calculaArea().toFixed(2)}`);
    });
}
const figuras = [
    new Circulo("circulo", 5),
    new Quadrado("quadrado", 4),
    new Triangulo("triangulo", 3, 6)
];
imprimirAreas(figuras);
