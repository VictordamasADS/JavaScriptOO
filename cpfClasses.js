//CPF = 705.484.450-52, 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }

    geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let valor of cpfParcial) {
            //console.log(valor, reverso)
            total += reverso * Number(valor)
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo != 'string') return false;
        if(this.cpfLimpo.length != 11) return false;
        if(this.sequencia()) return false;
        this.geraNovoCpf();
        

        return this.novoCpf === this.cpfLimpo;
    }
}

/*
let validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.valida())

if(validacpf.valida()) {
    console.log('CPF Válido.')
} else {
    console.log('CPF Inválido.')
}*/