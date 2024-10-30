class temperatura {
  private valorCelsius: number;
  private total: number;
  
  constructor(valorCelsius: number, total: number){
    this.valorCelsius = valorCelsius;
    this.total = total;
  }

  public converteKelvin(){
    this.total = this.valorCelsius + 273;
    console.log(`convertendo ${this.valorCelsius} graus celsius para Kelvin fica ${this.total}`);
  }

  public converteFahrenheit(){
    this.total = (1.8 * this.valorCelsius) + 32;
    console.log(`convertendo ${this.valorCelsius} graus celsius para Fahrenheit fica ${this.total}`);
  }
}
const temperatura1 = new temperatura(25, 0);
temperatura1.converteKelvin();
temperatura1.converteFahrenheit();