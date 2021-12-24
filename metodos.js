// Métodos de instância e estáticos
function teste() {
    console.log('Apenas um teste:')
}

class Controle {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //Métodos de instância = metodos normais
    aumentarVolume() {
        this.volume += 1;
    }

    diminuirVolume() {
        this.volume -= 1;
    }

    //método estático: Só é possivel executar esse metodo com a Classe 'Controle'.
    static trocarCanal(canal) {
        console.log('Voce trocou para o canal', canal);
    }
}

const controle1 = new Controle('SmarTV Samsung 70P');
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

Controle.trocarCanal('CNN') //apenas com a Classe