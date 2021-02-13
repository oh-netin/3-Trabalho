/**
 * Ações diversas e JS
 * 
 * Utilizamos uma função para vereficar todas as opções de respostas
 * Cada uma função chamada verifica uma questão do quis
 * E verifica se a resposta selecionada é a correta
 * 
 * Se o usuário não selecionar e apertar no botão, vai marcar como errada
 */

function verificar() {
    verificarQ1();
    verificarQ2();
    verificarQ3();
    verificarQ4();
    verificarQ5();
}

/**
 * Para todas as funções, é a mesma lógica
 * 
 * Pega o DOM do html, verifica se está selecionada a resposta certa
 * Se sim, qunado clicar no btn a caixa dela ficará verde
 * Se não, a caixa ficará vermelha
 */

function verificarQ1() {
    let resposta = document.getElementById('corinthians');
    let bg = document.getElementById("peg1");

    if (resposta.checked) {
        bg.classList.add('bg-success');
    } else {
        bg.classList.add('bg-danger');
    }
}

function verificarQ2() {
    let resposta = document.getElementById('3');
    let bg = document.getElementById("peg2");

    if (resposta.checked) {
        bg.classList.add('bg-success');
    } else {
        bg.classList.add('bg-danger');
    }
}

function verificarQ3() {
    let resposta = document.getElementById('1temp');
    let bg = document.getElementById("peg3");

    if (resposta.checked) {
        bg.classList.add('bg-success');
    } else {
        bg.classList.add('bg-danger');
    }
}

function verificarQ4() {
    let resposta = document.getElementById('3200');
    let bg = document.getElementById("peg4");

    if (resposta.checked) {
        bg.classList.add('bg-success');
    } else {
        bg.classList.add('bg-danger');
    }
}

function verificarQ5() {
    let resposta = document.getElementById('19');
    let bg = document.getElementById("peg5");

    if (resposta.checked) {
        bg.classList.add('bg-success');
    } else {
        bg.classList.add('bg-danger');
    }
}

/**
 * Function simples para dar uma reiniciada na página, para poder reiniciar o form
 */

function reiniciar() {
    document.location.reload();
}
