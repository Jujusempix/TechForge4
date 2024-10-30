class livro {
  private titulo: string;
  private autor: string;
  private paginas: number;
  private lido: boolean;
  
  
  constructor(titulo: string, autor: string, paginas: number, lido: boolean){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  public livroLido(paginas = this.paginas){
    if (paginas >= 176) {
      this.lido = true
      if (this.lido = true) {
        console.log(`você terminou de ler ${this.titulo} do autor ${this.autor}. marcador está em ${this.lido}`); 
      }
    } else {
      console.log(`Ainda há páginas a serem lidas. marcador está em ${this.lido}`);
    }
  }
}
const livro1 = new livro("Sherlock Holmes: Um Estudo em Vermelho", "Sir Arthur Conan Doyle", 0, false);
livro1.livroLido(53);
livro1.livroLido(176);