function saveStaticDataToFile() {
  var blob = new Blob(["Welcome to Websparrow.org."],
    { type: "text/plain;charset=utf-8" });
  saveAs(blob, "dados.txt");
}
let _retirarMsg = setTimeout(() => {
  document.getElementById("msg_boasvindas").classList.remove("d-block");
  document.getElementById("msg_boasvindas").classList.add("d-none");
  document.getElementById("recarga-jogo").classList.remove('d-none');
  document.getElementById("recarga-jogo").classList.add('d-block');
}, 5000);