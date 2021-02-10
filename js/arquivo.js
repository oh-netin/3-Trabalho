let _retirarMsg = setTimeout(() => {
    document.getElementById("msg_boasvindas").classList.remove("d-block");
    document.getElementById("msg_boasvindas").classList.add("d-none");
    document.getElementById("recarga-jogo").classList.remove('d-none');
    document.getElementById("recarga-jogo").classList.add('d-block');
  }, 5000);