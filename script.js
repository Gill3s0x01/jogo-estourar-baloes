//Criar o balão
//Estourar o balão
//Carregar o jogo

function criarBalao(){

  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  var x = Math.floor(Math.random() +600);
  var Y = Math.floor(Math.random() +400);

  balao.setAttribute("style", "left:"+x+"px; top:"+y+"px;");
  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao);
  

}

function estourar(objeto){
    document.body.removeChild(objeto);
}

function carregarJogo(){
  setInterval(criarBalao, 1000);
}