function parOuImpar(numero) {
  if (numero % 2 == 0){
    console.log("Numero " + numero +" é Par!")
  } else {
    console.log("Numero " + numero +" é Impar!")
  }
}

let numero = 10;

parOuImpar(numero);

let funcaoNumeroPrimo = function (numero) {
  let div = 0;
  for (i = 1; i <= numero; i++) {
    if (numero % i == 0) { 
     div++;
    }
  }
    
  if (div == 2)
    console.log("O número " + numero + " é primo!");
  else
    console.log("O número " + numero + " não é primo!");
}

funcaoNumeroPrimo(7);

function funcaoContadorFeliz(callback){
  for (let index = 10; index >= 1; index--) {
    console.log(index);    
  }
  callback();
}

function felizAnoNovo(){
  console.log("Feliz Ano Novo!!!")
}

funcaoContadorFeliz(felizAnoNovo);


function testandoPromise(callback) {
var funcaoContadorFelizPromise = new Promise(
  function(resolve, reject) {       
      for (let index = 10; index >= 1; index--) {
        console.log(index);    
      }
  });

  funcaoContadorFelizPromise.then(
    callback()
  );
}

function felizAnoNovoPromise(){
  console.log("Feliz Ano Novo!!!")
}

testandoPromise(felizAnoNovoPromise);


async function testandoAsyncAwait() {
  for (let index = 10; index >= 1; index--) {
    console.log(index);
  }
}

testandoAsyncAwait().then(v => {
  felizAnoNovoAsyncAwait();
  console.log("Função Async Await finalizada");
});

function felizAnoNovoAsyncAwait(){
  console.log("Feliz Ano Novo!!!")
}

let notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

function notasMaioresQueSete(notas) {
  notas.forEach(function (item) {
    if (item > 7)
    console.log(item);
  }); 
}

notasMaioresQueSete(notas);

let produtos = [
  {nome: "Notebook", preco: 4000},
  {nome: "Cadeira", preco: 950.50},
  {nome: "Ventilador", preco: 80},
  {nome: "Smartphone", preco: 2500},
  {nome: "Tablet", preco: 1499.99},
]

function calcularTotalProdutos(produtos) {
  let total = 0; 
  produtos.forEach(function (item) {
    total += item.preco
  }); 
  console.log("Total dos produtos equivale a R$" + total);
}

calcularTotalProdutos(produtos);

let alunos = [
  {nome: "João", serie: 9},
  {nome: "Maria", serie: 8},
  {nome: "Luana", serie: 9},
  {nome: "Bruno", serie: 8},
  {nome: "Janderson", serie: 9},
  {nome: "Alan", serie: 7}
]

function calcularSerieAlunos(alunos) {
  let total = 0; 
  alunos.forEach(function (item) {
    if (item.serie == 8) {
      item.disciplina = 'Historia'
    } else if (item.serie == 9){
      item.disciplina = 'Física'
    } else {
      item.disciplina = 'Sem disciplina'
    }
  }); 
  console.log("Lista de Alunos: ");
  console.log(alunos);
}

calcularSerieAlunos(alunos);


