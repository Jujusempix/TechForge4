class ContaBancaria {
  private titular: string;
  private saldo: number;

  constructor(titular:string, saldo:number){
    this.titular = titular;
    this.saldo = saldo;
  }

  public depositar(total: number, novoSaldo: number){
    total = this.saldo + novoSaldo;
    console.log(`mi nombre es ${this.titular} antes o seu saldo estava com ${this.saldo} reais. Seu saldo atual é ${total}`);
    
  }

  public sacar(total: number, novoSaldo: number){
    total = this.saldo - novoSaldo;
    console.log(`mi nombre es ${this.titular} antes o seu saldo estava com ${this.saldo} reais. Seu saldo atual é ${total}`);
    
  }

}
const conta1 = new ContaBancaria('antonio', 300);
conta1.depositar(0, 50);
conta1.sacar(0, 30);