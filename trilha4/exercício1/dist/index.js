"use strict";
class ItemLoja {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const item1 = new ItemLoja(1, "Caneca", 30.50);
const item2 = new ItemLoja(2, "Café", 20.50);
console.log(`ID: ${item1.id}, Nome: ${item1.nome}, Preço: R$ ${item1.preco.toFixed(2)}`);
console.log(`ID: ${item2.id}, Nome: ${item2.nome}, Preço: R$ ${item2.preco.toFixed(2)}`);
