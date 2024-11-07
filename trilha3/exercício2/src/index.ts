abstract class FiguraGeometrica {
  private nome: string;
  
  
  constructor(nome: string){
    this.nome = nome
  }

  abstract calculaArea(): number;
  
  public getNome(): string {
    return this.nome;
  }  
}
class Circulo extends FiguraGeometrica{
  private raio: number

  constructor(nome: string, raio: number){
    super(nome)
    this.raio = raio
  }

  public calculaArea() {
     return Math.PI * (this.raio * this.raio);
  }
}
class Quadrado extends FiguraGeometrica{
  private lado: number;

  constructor(nome: string, lado: number){
    super(nome)
    this.lado = lado
  }

  public calculaArea() {
    return this.lado * this.lado;
  }
}
class Triangulo extends FiguraGeometrica{
  private base: number;
  private altura: number;

  constructor(nome: string, base: number, altura: number){
    super(nome)
    this.base = base
    this.altura = altura
  }

  public calculaArea() {
     return (this.altura * this.base) / 2;
  }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
  figuras.forEach((figura) => {
      console.log(`Área da Figura ${figura.getNome()}: ${figura.calculaArea().toFixed(2)}`);
  });
}


const figuras: FiguraGeometrica[] = [
  new Circulo("circulo",5),
  new Quadrado("quadrado",4),
  new Triangulo("triangulo",3, 6)
];

imprimirAreas(figuras);
