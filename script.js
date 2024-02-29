function calculateIMC() {
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var imc = peso / (altura * altura);
  var classification = '';

  if (imc < 18.5) {
    classification = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    classification = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    classification = 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    classification = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    classification = 'Obesidade Grau II';
  } else {
    classification = 'Obesidade Grau III';
  }

  var tableBody = document.querySelector('#imcTable tbody');
  tableBody.innerHTML = `
    <tr>
      <td>${imc.toFixed(2)}</td>
      <td>${classification}</td>
    </tr>
  `;
}