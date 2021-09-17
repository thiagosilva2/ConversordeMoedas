function converter() {
  var valorElemento = document.getElementById('valor')
  var Converter = document.getElementById('Converter')

  var valor = valorElemento.value
  var valorEmDolar = parseFloat(valor)
  var valorEmReais = valorEmDolar * 5.26
  console.log(valorEmReais)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  elementoValorConvertido.innerHTML = valorConvertido
  valorConvertido.innerHTML = ` O valor em Real, convertido para Dolar é: U$ ${valorEmReais.toFixed(
    2
  )}`
}
function converteu() {
  var clicou = document.getElementById('clicou')
  var valorElement = document.getElementById('valor')
  var valor = valorElement.value
  var valueReais = parseFloat(valor)
  var valueDolares = valueReais / 5.26
  console.log(valueDolares)
  var elementValueConversion = document.getElementById('valorConversao')
  elementValueConversion.innerHTML = valorConversao
  valorConversao.innerHTML =
    `O valor em Dolar, convertido para Real é R$` + valueDolares.toFixed(2)
  console.log(elementValueConversion)
  console.log(
    `isso é referente a variaval valor da conversao ${valorConversao}`
  )
}
