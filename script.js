function sum() {
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var outputElement = document.getElementById('output')

  outputElement.innerHTML = parseInt(num1) + parseInt(num2)
}



