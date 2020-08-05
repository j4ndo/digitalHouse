function boasVindas(){
  alert('Seja bem-vindo, você pressionou o botão cinza');
}

function cumprimentar(){
  alert('Olá');
}

function alterarFundo(cor){
  
  document.getElementById("body").style.backgroundColor = String(cor);
}

function vendoImagem(){
  document.getElementById("descricaoImagemClicada").innerHTML = "Veja o console Log";
  console.log("estou vendo a imagem");
}
function desfocandoImagem(){
  document.getElementById("descricaoImagemClicada").innerHTML = "";
}
function clicandoImagem(){
  alert('Estou clicando na imagem');
}

document.addEventListener("click", function(e){    
  document.getElementById("body").style.backgroundColor = 'red';
})