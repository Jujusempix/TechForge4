interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[];

  constructor(produtos: ProdutoLoja[]) {
    this.produtos = produtos;
  }

  public buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(produto => produto.codigo === codigo);
  }
}

const produtos: ProdutoLoja[] = [
  { codigo: 101, nome: "Smartphone" },
  { codigo: 102, nome: "Notebook" },
  { codigo: 103, nome: "Tablet" },
  { codigo: 104, nome: "Smartwatch" },
];

const loja = new Loja(produtos);


const produtoEncontrado = loja.buscarProdutoPorCodigo(102);
console.log(produtoEncontrado);


const produtoInexistente = loja.buscarProdutoPorCodigo(200);
console.log(produtoInexistente);