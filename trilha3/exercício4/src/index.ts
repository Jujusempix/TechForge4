class Animal {
    private energia: number;

    constructor(){
        this.energia = 100;
    }

    comer(incremento: number){
        this.energia += incremento;
    }

    statusEnergia(){
        return `Energia: ${this.energia}`;
    }
}

class Leao extends Animal {
    caçar(){
        this.comer(-30);
        this.comer(50);
    }

    statusEnergia(){
        return `Leão - ${super.statusEnergia()}`;
    }
}

class Passaro extends Animal {
    seAlimentar(){
        this.comer(20);
    }

    statusEnergia(){
        return `Pássaro - ${super.statusEnergia()}`;
    }
}

const leao = new Leao();
console.log("Antes de caçar:")
console.log(leao.statusEnergia());
console.log("Depois de caçar:")
leao.caçar();
console.log(leao.statusEnergia());

const passaro = new Passaro();
console.log("Antes de se alimentar:");
console.log(passaro.statusEnergia());
console.log("Depois de se alimentar:")
passaro.seAlimentar();
console.log(passaro.statusEnergia());