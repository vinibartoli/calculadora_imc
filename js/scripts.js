  let InputPeso = document.getElementById('input-peso')
  let InputAltura = document.getElementById('input-altura')
  let btnCalcular = document.getElementById('btn-calcular')
  let btnLimpar = document.getElementById('btn-limpar')
  let pResult = document.getElementById('result')
  let pTextResult = document.getElementById('result-text')

  
function calcularImc() {
  let valorPeso = parseFloat(InputPeso.value)
  let valorAltura = parseFloat(InputAltura.value)
  let resultadoCalculo = valorPeso / (valorAltura ** 2)
  return resultadoCalculo
}

function adicionarResultado() {
  let resultadoFinal = calcularImc()
  let resultadoEscrito = document.createTextNode(`IMC: ${resultadoFinal.toFixed(2)}`)
  pResult.appendChild(resultadoEscrito)

  if(resultadoFinal < 18.5) {
    pTextResult.textContent = "Magreza - Abaixo do peso"
  } else if(resultadoFinal <= 24.9) {
    pTextResult.textContent = "Normal - Peso Ideal"
  } else if(resultadoFinal <= 29.9) {
    pTextResult.textContent = "Excesso de peso"
  } else if(resultadoFinal <= 34.9) {
    pTextResult.textContent = "Obesidade classe I"
  } else if(resultadoFinal <= 39.9) {
    pTextResult.textContent = "Obesidade classe II - Severa"
  } else {
    pTextResult.textContent = "Obesidade classe III - Mórbida"
  }

  btnCalcular.removeEventListener("click", adicionarResultado)
}

function limparCampos() {
  InputAltura.value = ""
  InputPeso.value = ""
  pResult.textContent = ""
  pTextResult.textContent = ""
  btnCalcular.addEventListener("click", adicionarResultado)
}

btnCalcular.addEventListener("click", adicionarResultado)
btnLimpar.addEventListener("click", limparCampos)