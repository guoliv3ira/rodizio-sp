//loadscreen

window.addEventListener("load", (e) =>{
  const loading = document.querySelector('.loading')
  loading.classList.add('hidden')
  
})


// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
const inputPlaca = document.querySelector('#placa');
const inputDate = document.querySelector('#date');
const tipoPlaca = document.querySelector('#tipoPlaca')
const verificaData = document.querySelector('#verificaData')
const Placa = inputPlaca.value;
const DataText = inputDate.value
const Data = new Date(DataText);
const diaSemana = Data.getDay();

//quando clicar no botão verificar
form.addEventListener('submit', function (e) {
  e.preventDefault();
  

  //validar o modelo de placa
  const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
  const regexPlacaMercosul = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;

//condicional para testar os valores dos inputs
  if (regexPlaca.test(Placa)){
    if (!DataText){
      verificaData.innerHTML = 'Insira uma Data'
      verificaData.classList.add('invalida')
      setResultado('')
    }
    else{
      verificaRod(Placa,diaSemana)
      tipoPlaca.innerHTML = 'antigo'
      tipoPlaca.classList.remove('invalida')
      verificaData.innerHTML = ''
    }
    
  }
  else if (regexPlacaMercosul.test(Placa)){
    if (!DataText){
      verificaData.innerHTML = 'Insira uma Data'
      verificaData.classList.add('invalida')
      setResultado('')
    }
    else{
      verificaRod(Placa,diaSemana)
      tipoPlaca.innerHTML = 'padrão Mercosul'
      tipoPlaca.classList.remove('invalida')
      verificaData.innerHTML = ''
    }
  }
else{
    tipoPlaca.innerHTML = 'Inválida'
    tipoPlaca.classList.add('invalida')
    setResultado('')
  }
console.log(regexPlaca.test(Placa))
})


//função condicional do rodízio
function verificaRod(Placa,Dia){
  const Final = Placa.charAt(Placa.length-1)

  if ((Dia == 5) || (Dia == 6)){
    setResultado('Não há rodízio nos fins de semana', true)
  }
  else if ((Dia == 0) && ((Final == 1) || (Final == 2))){
    setResultado('Seu carro está no Rodízio', false)
  }
  else if ((Dia == 1) && ((Final == 3) || (Final == 4))){
    setResultado('Seu carro está no Rodízio', false)
  }
  else if ((Dia == 2) && ((Final == 5) || (Final == 6))){
    setResultado('Seu carro está no Rodízio', false)
  }
  else if ((Dia == 3) && ((Final == 7) || (Final == 8))){
    setResultado('Seu carro está no Rodízio', false)
  }
  else if ((Dia == 4) && ((Final == 9) || (Final == 0))){
    setResultado('Seu carro está no Rodízio', false)
  }
 else {
   setResultado('Seu carro não está no Rodízio', true)
 }
}

//função para escrever o resultado
function setResultado(msg, isValid){
  const resultado = document.querySelector("#resultado p")
  
  if (isValid){
    resultado.classList.add('paragrafo-resultado')
    resultado.classList.remove('bad')
    } else {
      resultado.classList.add('bad')
    }
    if (msg === ''){
      resultado.classList.remove('paragrafo-resultado', 'bad')
    }
  resultado.innerHTML = msg;
}