function insert(num){
  var resultado = document.getElementById('result').innerHTML;
  if(resultado.length < 16){
    document.getElementById('result').innerHTML = resultado + num;
  }else{
    alert("O máximo é igual a 15 dígitos");
  }
  
}

function clean(){
  document.getElementById('result').innerHTML = "";
}

function back(){
  var resultado = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = resultado.substring(0,resultado.length-1)
}

function calculate(){
  var resultado = document.getElementById('result').innerHTML;
  if(resultado){
    document.getElementById('result').innerHTML = eval(resultado);
  }else{
    document.getElementById('result').innerHTML = "Nada...";
  }
}