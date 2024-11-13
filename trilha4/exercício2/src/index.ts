interface Documento {
  titulo: string;
  conteudo:string;
}

class Texto implements Documento {
  public titulo: string;
  public conteudo: string;

  constructor(titulo:string, conteudo:string){
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  public Exibir(){
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}.`
  }
}

const txt1 = new Texto("Down to Earth", "Um cara desocupado achou que era uma boa ideia ir no meio da floresta investigar um barulho estranho. Pior que deu certo");
const txt2 = new Texto("Marionetta", "Uma guria achou uma ideia genial se juntar num circo onde todo mundo é morto-vivo");

console.log(txt1.Exibir());
console.log(txt2.Exibir());
