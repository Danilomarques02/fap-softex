const prompt = require('prompt-sync')();

const  real = Number(prompt("Informe o valor em real: "))
const dolar = Number(prompt("Informe a contação do dola de hoje: "))

resultado = real / dolar

console.log(`O valor em dólar é: US$ ${resultado} `)