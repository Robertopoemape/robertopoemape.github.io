function calcularIMC() {
  let peso = +document.getElementById("peso").value;

  let altura = +document.getElementById("altura").value;

  let imc = (peso / altura ** 2).toFixed(2);

  let resultado = document.getElementById("result");

  if (imc < 18.5) {
    resultado.textContent = `Tu IMC es ${imc} - Bajo Peso`;
  } else if (imc < 25) {
    resultado.textContent = `Tu IMC es ${imc} - Peso Normal`;
  } else if (imc < 30) {
    resultado.textContent = `Tu IMC es ${imc} -  Sobrepeso`;
  } else resultado.textContent = `Tu IMC es ${imc} -  Obesidad`;
}
