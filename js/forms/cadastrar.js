

function validar() {
    validarNome();
    validarSenha();
    validarConfirmar();
}

function validarNome() {
    let _nome = document.getElementById("nome");

    if (_nome.value.length == "") {
        _nome.setCustomValidity("Por favor, campo nome obrigatório");
        _nome.focus();
    } else {
        _nome.setCustomValidity("");
    }
}

function validarSenha() {
    let _senha = document.getElementById("senha");

    if (_senha.value.length <= 5 || _senha.value.length > 10) {
        _senha.setCustomValidity("Por favor, insira uma senha entre 6 e 10 caracteres");
    } else {
        _senha.setCustomValidity("");
    }
}

function validarConfirmar() {
    let _senha = document.getElementById("senha");
    let _confirmar = document.getElementById("confirmar");

    if (_confirmar.value.length <= 5) {
        _confirmar.setCustomValidity("Por favor, insira uma senha entre 6 e 10 caracteres");
        
    } else if (_confirmar.value != _senha.value) {
        _confirmar.setCustomValidity("As senhas devem ser iguais");
        _confirmar.focus();
    } else {
        _confirmar.setCustomValidity("");
    }
}


