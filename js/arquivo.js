/**
 * Ações diversas:
 * 
 * A variável global colocarAnuncio recebe uma function que execulta uma arrow function em um
 * determinado periodo de tempo;
 * Ela é bem simples, ela modifica no atributo class, as classes vindas do Bootstrap
 * 
 * Pegamos o elemento pelo id dele, e na lista de classes de cada elemento atribuimos ou 
 * retiramos classess, 
 * no caso d-block e d-nono, classes no Bootstrap referêntes a display: block e display: none;
 *  
 */

var colocarAnuncio = setTimeout(() => {
  document.getElementById("msg_boasvindas").classList.remove("d-block");
  document.getElementById("msg_boasvindas").classList.add("d-none");
  document.getElementById("recarga-jogo").classList.remove('d-none');
  document.getElementById("recarga-jogo").classList.add('d-block');
}, 5000);

/**
 * Com essa função, colocamos um ponteiro de uma mãosinha ao usuário passar o mouse sobre os links que modificamos
 */

function sobre() {
  let $link_pers = document.getElementById("link-pers");
  let $link_armas = document.getElementById("link-armas");
  
  $link_armas.style.cursor = "pointer";
  $link_pers.style.cursor = "pointer";
}

/**
 * Com essas duas funções, mostramos e ocultamos as abas entre personagens e armas
 * 
 * function mostrarPersonagens()
 * function mostrarArmas()
 * 
 * Basicamente só pegamos a referência deles, modificamos as classes delas, colocando e removendo as classes do bootstrap
 * 
 */

function mostrarPersonagens() {
  let $pers = document.getElementById("personagens");
  let $armas = document.getElementById("armas");
  
  let $link_pers = document.getElementById("link-pers");
  let $link_armas = document.getElementById("link-armas");
  
  
  $armas.classList.remove('d-block');
  $armas.classList.add('d-none');
  
  $pers.classList.remove('d-none');
  $pers.classList.add('d-block');
  
  $link_armas.classList.remove('active');
  $link_pers.classList.add("active");
  
}

function mostrarArmas() {
  let $pers = document.getElementById("personagens");
  let $armas = document.getElementById("armas");
  
  let $link_pers = document.getElementById("link-pers");
  let $link_armas = document.getElementById("link-armas");
  
  $armas.classList.remove('d-none');
  $armas.classList.add('d-block');
  
  $pers.classList.remove('d-block')
  $pers.classList.add('d-none');

  $link_armas.classList.add('active');
  $link_pers.classList.remove("active");

}