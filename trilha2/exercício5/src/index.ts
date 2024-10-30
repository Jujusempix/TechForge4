class Agenda {
  private compromissos: string[];
  
  constructor(compromissos: string[]){
    this.compromissos = compromissos;
  }

  public apresentaAgenda(){
    console.log(`Minha agenda é assim ${this.compromissos}`);
    
  }
  
  public adicionaCompromisso(){
    this.compromissos.push("Aula php com Burnes");
    console.log(`Agora tem mais um novo evento e esta assim :${this.compromissos}`);
  }
}
const agenda1 = new Agenda(["the developers weekend", "Integrado game festival"]);
agenda1.apresentaAgenda();
agenda1.adicionaCompromisso();