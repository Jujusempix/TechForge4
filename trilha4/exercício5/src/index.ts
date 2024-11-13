interface LivroBiblioteca{
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao{
  public livros: LivroBiblioteca[];

  constructor(livros: LivroBiblioteca[]){
    this.livros = livros;
  }

  public filtrarPorGenero(genero:string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
  }

  public buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
  }

  public buscarLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter(livro => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

const livros: LivroBiblioteca[] = [
  { titulo: "Sherlock Holmes: Estudo em vermelho", autor: "Arthur Conan Doyle", genero: "Mistério", disponivel: true },
  { titulo: "Onde Morre o Amor", autor: "Douglas Rodrigues", genero: "Auto ajuda", disponivel: false },
  { titulo: "Vida de Programador", autor: "Andre Noel", genero: "Comédia", disponivel: true },
  { titulo: "A Culpa é Das Estrelas", autor: "John Green", genero: "Romance", disponivel: true},
  { titulo: "É Assim que Acaba", autor: "Colleen Hoover", genero: "Romance", disponivel: false}
];

const biblioteca = new BibliotecaGestao(livros);
const livrosOrdenados = biblioteca.buscarLivrosDisponiveisOrdenados();


console.log("Livros do genero romance:", biblioteca.filtrarPorGenero("romance"));
console.log("Livros do genero comédia:", biblioteca.filtrarPorGenero("comédia"));
console.log("Livros do genero mistério:", biblioteca.filtrarPorGenero("mistério"));
console.log("Livros do genero auto ajuda:", biblioteca.filtrarPorGenero("auto ajuda"));

console.log("Livros por Autor:", biblioteca.buscarPorAutor("Arthur Conan Doyle"), biblioteca.buscarPorAutor("andre noel"));

console.log("Livros organizados por ordem alfabetica e disponibilidade:", livrosOrdenados);