//Herança com classes

class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
        this.aplicativo = false
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return
        }
        console.log(`${this.nome} foi ligado com sucesso`);
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return
        }
        console.log(`${this.nome} foi desligado com sucesso`);
        this.ligado = false;
    }
}

class Iphone extends Dispositivo {
    whatsapp() {
        if(!this.ligado) {
            console.log(`${this.nome} está desligado.`);
            return
        } 

        if(this.aplicativo) {
            console.log(`${this.nome} já está utilizando o aplicativo`);
            return
        }

        console.log(`${this.nome} bem vindo ao aplicativo.`);
        this.aplicativo = true      
    }
}

class Notebook extends Dispositivo {
    constructor(nome, conexao) {
        super(nome);
        this.conexao = conexao
    }

    programar() {
        if(!this.ligado) {
            console.log(`${this.nome} está desligado.`);
            return
        } 

        if(this.aplicativo) {
            console.log(`${this.nome} já está rodando os codigos`);
            return
        }

        if(this.conexao) {
            console.log(`${this.nome} bem vindo ao VS code.`);
            this.aplicativo = true;
        } else {
            console.log('Voce não está conectado a internet');
        }      
    }
}

//const iphone = new Iphone('Iphone 12');
//iphone.whatsapp()
//iphone.whatsapp()

const notebook = new Notebook('Dell G3', true)
notebook.ligar()
notebook.programar()