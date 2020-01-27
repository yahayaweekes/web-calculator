function calculate() {
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value

  var answer = parseInt(num1) + parseInt(num2)

  document.getElementById('answer').innerHTML = answer
}
