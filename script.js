function calculate() {
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var opSelector = document.getElementById('operator')
  var operator = opSelector.options[opSelector.selectedIndex].value

  switch (operator) {
    case 'add':
      var answer = parseInt(num1) + parseInt(num2)
      break;
    case 'subtract':
      var answer = parseInt(num1) - parseInt(num2)
      break;
    case 'multiply':
      var answer = parseInt(num1) * parseInt(num2)
      break;
    case 'divide':
      var answer = parseInt(num1) / parseInt(num2)
      break;
    default:
      var answer = 'Invalid Operator'
  }

  document.getElementById('answer').innerHTML = answer
}
