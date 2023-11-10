
function sim(){
    alert("Eu te amo pra sempre")
}
document.addEventListener('DOMContentLoaded', function() {
    var nao = document.getElementById('nao');

    nao.addEventListener('mouseover', function() {
      var novaPosicaoX = Math.random() * window.innerWidth;
      var novaPosicaoY = Math.random() * window.innerHeight;

      nao.style.left = novaPosicaoX + '20px';
      nao.style.top = novaPosicaoY + '10px';
    });
  });