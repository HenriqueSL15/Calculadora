//Função para inserir valores no 'result'
function insert(num){
  var resultado = document.getElementById('result').innerHTML;
  //Escrevendo o valor de acordo com a quantia de caracteres restantes
  if(resultado.length < 15){
    document.getElementById('result').innerHTML = resultado + num;
  }

  //Contador de caracteres
  document.getElementById('counter').innerHTML = document.getElementById('result').innerHTML.length;

  //Alteração de tamanho da fonte para melhor visualização
  if(resultado.length > 8){
    document.getElementById('result').style = "font-size:24px"
  }
  
  /*
  else{
    alert("O máximo é igual a 14 dígitos");
  }
  */
}



//Função que limpa todos os valores
function clean(){
  //Reseta o valor do 'result' e o tamanho para 25px 
  document.getElementById('result').innerHTML = "";
  document.getElementById('result').style = "font-size:25px";
  document.getElementById('counter').innerHTML = document.getElementById('result').innerHTML.length;
}



//Função que limpa o último algarismo do 'result'
function back(){
  var resultado = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = resultado.substring(0,resultado.length-1)

  //Verifica a quantia de caracteres e ajusta o tamanho da fonte
  if(document.getElementById('result').innerHTML.length < 16){
    document.getElementById('result').style = "font-size:25px"
  }
  document.getElementById('counter').innerHTML = document.getElementById('result').innerHTML.length;
}



//Função que faz as operações de soma/divisão/subtração e multiplicação
function calculate(){
  var valor = document.getElementById('result').innerHTML;
  var resultado = eval(valor);
  var arredondando = 14 - Math.floor (Math.log10 (resultado)) - 2;
  var novoResultado = resultado.toFixed(arredondando);

  document.getElementById('result').innerHTML = novoResultado;
  //Verifica se existe algum valor no 'result'
  if(resultado){
    //Ajusta o tamanho se necessário
    if(document.getElementById('result').innerHTML.length > 8){
      document.getElementById('result').style = "font-size:24px"
    }
  }else{
    document.getElementById('result').innerHTML = "Nada...";
  }
  document.getElementById('counter').innerHTML = document.getElementById('result').innerHTML.length;
}


