interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca{
  public livros: Livro[];

  constructor(livros: Livro[]){
    this.livros = livros;
  }

  public buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livros => livros.disponivel == true);
  }
  
}

function imprimir(livros: Livro[]): void {
  livros.forEach((livros) => {
      console.log(`Título do livro: ${livros.titulo}. Autor do Livro: ${livros.autor}. Disponivel: ${livros.disponivel}`);
  });
}

const livros: Livro[] = [
  { titulo: "Sherlock Holmes: Estudo em vermelho", autor: "Arthur Conan Doyle", disponivel: true },
  { titulo: "Onde Morre o Amor", autor: "Douglas Rodrigues", disponivel: false },
  { titulo: "Vida de Programador", autor: "Andre Noel", disponivel: true },
];

const biblioteca = new Biblioteca(livros);
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();

imprimir(livrosDisponiveis)