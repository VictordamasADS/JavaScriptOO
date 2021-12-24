// Polimorfismo: É a redeclaração de métodos previamente herdados por uma classe, cada um com uma caracteristica diferente.

class AvesdeRapina {

    cacar() {
        console.log('essa tipo de ave caça pela manhã e a tarde')
    }

    voar() {
        console.log('voô padrão das aves de rapina')
    }

    visao() {
        console.log('como todas aves ele tem uma visão muito aguçada.')
    }
}

class FalcaoPeregrino extends AvesdeRapina {
    voar() {
        console.log('o falcão peregrino tem um voô diferente dentre todos, ninguem é tão rápido quanto ele no mundo.')
    }
}

class AguiaDeAsaRedonda extends AvesdeRapina {
    visao() {
        console.log('A Aguia de asa redonda tem a melhor visão entre os seres-vivos, realmente um super-poder.')
    }
}

class Coruja extends AvesdeRapina {
    cacar() {
        console.log('A coruja caça somente a noite.')
    }

    visao() {
        console.log('A coruja tem a melhor visão noturna do mundo.')
    }
}

const ave = new Coruja()
ave.visao()
ave.cacar()
ave.voar()
console.log('')

const ave2 = new FalcaoPeregrino()
ave2.voar()
ave2.cacar()
ave2.visao()
console.log('')

const ave3 = new AguiaDeAsaRedonda()
ave3.visao()
ave3.voar()
ave3.cacar()
console.log('')