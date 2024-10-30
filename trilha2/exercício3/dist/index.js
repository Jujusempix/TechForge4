"use strict";
class produto {
    constructor(nome, preco, quantidade, total) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.total = total;
    }
    valorEstoque() {
        this.total = this.quantidade * this.preco;
        console.log(`esse é o total no estoque ${this.total}`);
    }
}
const produto1 = new produto("nescau seral", 60, 2, 0);
const produto2 = new produto("leite", 10, 5, 0);
produto1.valorEstoque();
produto2.valorEstoque();
