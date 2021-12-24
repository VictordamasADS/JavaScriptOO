// O paradigma de Orientação a Objetos em JS

//Exemplo 1: 
/*
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome; 
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }
}

const pessoa1 = new Pessoa('João', 'Victor');
pessoa1.comer()*/

//Exemplo 2 (Banco): 

class Banco {
    constructor(agencia, conta, saldo, entrada) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
        this.entrada = entrada;
        this.cartao = false;
        this.senha = false;
    }

    inserirCartao() {
        if(this.cartao) {
            console.log('O cartão já está inserido.');
            return
        } 
        
        console.log('O cartão foi inserido com sucesso.')
        this.cartao = true;
    }

    logarNoCaixaEletronico() {
        const senha = 12345
        if(this.cartao == true) {
            if(this.entrada == senha) {
                console.log('Bem vindo ao sistema, escolha sua operação: \n');
                this.senha = true
                return
            } 
            console.log('senha incorreta')
            return                                 
        }  
        console.log('O cartão não está inserido.');
        return
    }

    depositar(valor) {
        if(this.cartao == true) {
            if(this.senha == true) {
                this.saldo += valor;
                console.log(`Voce realizou um depósito de R$${valor.toFixed(2)}`)
                this.detalhesConta();
                return
            } else {
                console.log('Voce não esta logado ao sistema do caixa eletrônico.');
                return
            }
        } else {
            console.log('O cartão não está inserido.');
            return
        }
    } 

    detalhesConta() {
        if(this.cartao == true) {
            if(this.senha == true) {
                console.log(`Agência: ${this.agencia} Conta: ${this.conta} Saldo: R$${this.saldo.toFixed(2)}\n`);
            } else {
                console.log('Voce não esta logado ao sistema do caixa eletrônico.');
                return
            }
        } else {
            console.log('O cartão não está inserido.');
            return
        }
    }
}



class ContaPoupanca extends Banco {
    sacar(valor) {
        if(this.cartao == true) {
            if(this.senha == true) {
                if(this.saldo < valor) {
                    console.log('Saldo insuficiente');
                    return
                } else {
                    this.saldo -= valor;
                    console.log(`Voce realizou um saque no valor de R$${valor.toFixed(2)}`);
                    this.detalhesConta();
                    return
                }
            } else {
                console.log('Voce não esta logado ao sistema do caixa eletrônico.');
                return
            }
        } else {
            console.log('O cartão não está inserido.');
            return
        }
    }
}

class ContaCorrente extends Banco {
    constructor(agencia, conta, saldo, entrada, limite) {
        super(agencia, conta, saldo, entrada);
        this.limite = limite
    }
    sacar(valor) {
        if(this.cartao == true) {
            if(this.senha == true) {
                if(this.saldo + this.limite < valor) {
                    console.log('Saldo insuficiente');
                    return
                } else {
                    this.saldo -= valor;
                    console.log(`Voce realizou um saque no valor de R$${valor.toFixed(2)}`);
                    this.detalhesConta();
                    return
                }
            } else {
                console.log('Voce não esta logado ao sistema do caixa eletrônico.');
                return
            }
        } else {
            console.log('O cartão não está inserido.');
            return
        }
    }
}

/*
const conta1 = new ContaPoupanca(9208, 91196, 0, 12345, 1392)
conta1.inserirCartao()
conta1.logarNoCaixaEletronico()
conta1.depositar(100)
conta1.sacar(100)
*/

const conta2 = new ContaCorrente(2503, 081219, 0, 12345, 100)
conta2.inserirCartao()
conta2.logarNoCaixaEletronico()
conta2.depositar(1000)
conta2.depositar(1000)
conta2.sacar(2000)