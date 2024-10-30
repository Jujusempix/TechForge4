"use strict";
class Agenda {
    constructor(compromissos) {
        this.compromissos = compromissos;
    }
    apresentaAgenda() {
        console.log(`Minha agenda é assim ${this.compromissos}`);
    }
    adicionaCompromisso() {
        this.compromissos.push("Aula php com Burnes");
        console.log(`Agora tem mais um novo evento e esta assim :${this.compromissos}`);
    }
}
const agenda1 = new Agenda(["the developers weekend", "Integrado game festival"]);
agenda1.apresentaAgenda();
agenda1.adicionaCompromisso();
