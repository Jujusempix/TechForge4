class Veiculo {
  private tipo: string;
  private dirigibiladade: string;

  constructor(tipo:string, dirigibiladade:string){
    this.tipo = tipo;
    this.dirigibiladade = dirigibiladade
  }

  public mover(){
    console.log(`${this.tipo} está ${this.dirigibiladade}`);
  }

}
class Bicileta extends Veiculo {

  constructor(tipo:string, dirigibiladade:string) {
    super(tipo, dirigibiladade);
  }
}
class Carro extends Veiculo {

  constructor(tipo:string, dirigibiladade:string) {
    super(tipo, dirigibiladade);
  }
}
const veiculo = new Veiculo("O Veiculo", "se movendo");
const bike = new Bicileta("A bicicleta", "pedalando");
const carro = new Carro("O carro", "dirigindo");
veiculo.mover();
bike.mover();
carro.mover();