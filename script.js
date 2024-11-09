const displayValue = document.querySelector("#display");
let isUltimoCaracterOperador = false;
Display.innerText = 0;

function inserir(numero){
  if(displayValue.innerHTML == "0" && numero == 0) { return }
  if(displayValue.innerHTML == "0") { displayValue.innerHTML = ""}
  displayValue.innerHTML += numero;
  isUltimoCaracterOperador = false;
}

function addOperador(qual){
  if(isUltimoCaracterOperador) {
    const newText = displayValue.innerHTML.slice(0, displayValue.innerHTML.length-1)+qual;
    displayValue.innerHTML = newText;
    return;
  }
  isUltimoCaracterOperador = true;
  displayValue.innerHTML += qual;
}

function limpar(){
  displayValue.innerHTML = '0';
}

function resultado(){
  const val = displayValue.innerHTML;
  try {
    resultadoConta = eval(val)
  } catch (error) {
    displayValue.innerText = 'Erro: Impossível calcular'
    return;
  }
  if(resultadoConta == Infinity){
    displayValue.innerText = 'impossível dividir por 0'
    return
  }
  if(isNaN(resultadoConta)){
    displayValue.innerText = 'Erro: Impossível calcular'
    return
  }
  displayValue.innerText = resultadoConta
}

document.querySelectorAll("button.num").forEach((element) => {
  element.addEventListener('click', () => {
    inserir(element.innerHTML);
  })
})

document.querySelectorAll("button.op").forEach((element) => {
  element.addEventListener('click', () => {
    addOperador(element.innerHTML);
  })
})

document.getElementById("clear").addEventListener('click', limpar)
document.getElementById("equals").addEventListener('click', resultado)