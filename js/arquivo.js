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


