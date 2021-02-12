/**
 * Separamos uma function para cada campo, nome, senha e confirmar a senha;
 * na function validar, fazemos denovo a validação para não passar nada;
 * Ao clicar no botão de subimeter, validamos todos os campos, caso tenha algum erro como:
 *  campo vazio, senha menor que 6 ou maior que 10 caracteres  ou elas sejam divergentes, aparece uma
 *  mensagem de erro.
 * 
 * O cpf não é um item obrigatório, então vai ficar fora da function que valida todos os campos
 * mesmo assim tem uma function que valida o cpf ao estar digitando, colocando uma mascara no mesmo...  
 */

function validar() {

    /**
     * Além de valizador os campos, se algum estiver errado vai aparecer uma mensagem de erro na tela
     * Trabalhamos somente com classes do próprio Bootstrap.
     * 
     * Se estiver válido, aparece mensagem em verde;
     * Se não vai aparecer uma mensagem de erro
     * 
     */

    if (!validarNome() || !validarSenha()) {
        document.getElementById("msg_validacao").classList.add("d-none");
        document.getElementById("msg_validacao").classList.remove("d-block");
        document.getElementById("msg_erro").classList.add('d-block');
        document.getElementById("msg_erro").classList.remove('d-none');
    } else {
        document.getElementById("msg_validacao").classList.add("d-block");
        document.getElementById("msg_validacao").classList.remove("d-none");
        document.getElementById("msg_erro").classList.add('d-none');
        document.getElementById("msg_erro").classList.remove('d-block');
    }
}

/**
 * Todas as functions retornam um valor booleano para verificar 
 * e modificar a mensagem caso tenha algum erro;
 */

function validarNome() {

    /**
     * 
     * Pegamos o DOM do elemento html pelo id e verificamos se ele é vazio, caso seja, aparece uma
     * mensagem de erro, se não, vida que segue... KKK;
     * 
     * Que nem no arquivo de cadastrar, aqui também colocamos uma máscara para o usuário! 
     */

    let _nome = document.getElementById("nome");

    if (_nome.value.length == "") {
        _nome.setCustomValidity("Por favor, campo 'Usuário' obrigatório");
        _nome.focus();
        return false;
    } else if (_nome.value.length == 1) {
        _nome.value = "@" + _nome.value;
        _nome.setCustomValidity("");
        return true;
    } else {
        _nome.setCustomValidity("");
        return true;
    }
}

function validarSenha() {

    /**
     * 
     * Pegamos o DOM do elemento html pelo id e verificamos se seu valor é menor que 5 caracteres, 
     * caso seja, aparece uma mensagem de erro, 
     * se não, vida que segue de novo... KKK;
     * 
     */

    let _senha = document.getElementById("senha");

    if (_senha.value.length <= 5 || _senha.value.length > 10) {
        _senha.setCustomValidity("Por favor, insira uma senha entre 6 e 10 caracteres");
        _senha.focus();
        return false;
    } else {
        _senha.setCustomValidity("");
        return true;
    }
}