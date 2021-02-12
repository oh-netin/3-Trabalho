
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
     * Mais uma ação diversa:
     * Se estiver válido, aparece mensagem em verde;
     * Se não vai aparecer uma mensagem de erro
     * 
     */

    if (!validarNome() || !validarIdade() || !validarSenha() || !validarConfirmar()) {
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
     * Como é um nome de usuário, não colocamos nenhuma validação referente aos números, 
     * ele pode digitar números e isso é normal.
     * 
     * Também colocamos uma máscara, quando o usuário digitar 1 caracter, o "@" vai aparecer antes dele
     * Tudo bunitinho. 
     * 
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

function validarIdade() {
    /**
     * Na validação da senha, pegamos o DOM do elemento e verificamos se o campo esta vazio ou
     * a idade é menor que 12 anos de idade.;
     */

    let _idade = document.getElementById("idade");

    if (_idade.value == 0) {
        _idade.setCustomValidity("Por favor, insira uma idade!");
        _idade.focus();
        return false;
    } else if (Number(_idade.value) <= 12) {
        _idade.setCustomValidity("Infelismente com sua idade atual não é possível se cadastrar!");
        _idade.focus();
        return false;
    } else {
        _idade.setCustomValidity("");
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

function validarConfirmar() {

    /**
     * 
     * Pegamos o DOM do elemento html pelo id e verificamos se seu valor da confirmação é menor que 
     * 5 caracteres, como já temos a function validarSenha(), só chamamos ela e verificamos 
     * se a senha tá ok;
     * caso esteja alguma errada, aparece uma mensagem de erro na tela no canto superior centraliado, 
     * se não, vida que segue novamente... KKKKK;
     * 
     */

    let _senha = document.getElementById("senha");
    let _confirmar = document.getElementById("confirmar");

    validarSenha();

    if (_confirmar.value.length <= 5 || _confirmar.value.length > 10) {
        _confirmar.setCustomValidity("Por favor, insira uma senha entre 6 e 10 caracteres");
        return false;

    } else if (_confirmar.value != _senha.value) {
        _confirmar.setCustomValidity("As senhas devem ser iguais");
        _confirmar.focus();
        return false;
    } else {
        _confirmar.setCustomValidity("");
        return true;
    }
}
