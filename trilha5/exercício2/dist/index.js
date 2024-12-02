"use strict";
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}.`;
    }
}
const txt1 = new Texto("Down to Earth", "Um cara desocupado achou que era uma boa ideia ir no meio da floresta investigar um barulho estranho");
const txt2 = new Texto("Marionetta", "Uma guria achou uma ideia genial se juntar num circo onde todo mundo é morto-vivo");
console.log(txt1.Exibir());
console.log(txt2.Exibir());
