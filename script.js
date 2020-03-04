function sum1() {
  var num1 = document.getElementById('num1').value
  var num2 = document.getElementById('num2').value
  var outputElement = document.getElementById('output1')

  outputElement.innerHTML = parseInt(num1) + parseInt(num2)
}

function sum2() {
  var num3 = document.getElementById('num3').value
  var num4 = document.getElementById('num4').value
  var outputElement = document.getElementById('output2')

  outputElement.innerHTML = parseInt(num3) - parseInt(num4)
}

function sum3() {
  var num5 = document.getElementById('num5').value
  var num6 = document.getElementById('num6').value
  var outputElement = document.getElementById('output3')

  outputElement.innerHTML = parseInt(num5) * parseInt(num6)
}

function sum4() {
  var num7 = document.getElementById('num7').value
  var num8 = document.getElementById('num8').value
  var outputElement = document.getElementById('output4')

  outputElement.innerHTML = parseInt(num7) / parseInt(num8)
}