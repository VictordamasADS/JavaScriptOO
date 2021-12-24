class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)  //lidar com enviar
        })
    }

    handleSubmit(e) {
        e.preventDefault();  // prevenir padrão
        const camposPreenchidos = this.checarCampos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposPreenchidos && senhasValidas) {
            alert('Formulário enviado.');
            //this.formulario.submit();
        }

    }

    senhasSaoValidas() {
        let valid = true;
    
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        
        //conferindo se as senhas são iguais
        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
        }
        
        //conferindo o tamanho da senha
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
    
        return valid;
    }

    checarCampos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();  //removendo as mensagens de erro
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            //label = rótulo,etiqueta
            let label = campo.previousElementSibling.innerText //irmão do elemento anterior
            if(!campo.value) {
                this.criaErro(campo, `Campo obrigatório "${label}" não está preenchido`); //retornando o erro
                valid = false;
            }

            //checando o cpf
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            //checando o usuario
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            } 
        }
        return valid;
    }

    //validando o usuario
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
        }
        return valid;
    }

    //validando o cpf
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    //criando a div
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();