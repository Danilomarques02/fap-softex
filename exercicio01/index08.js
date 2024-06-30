const prompt = require('prompt-sync')();

const numero1 = Number(prompt("Informe um numero: "))
const numero2 = Number(prompt("Infome um segundo numero "))
const operacao = prompt("informe a operação que deseja(+,-,/,*): ")

var resultado;

if(operacao === '+'){
    resultado = numero1 + numero2
  console.log(`O resultado da sua soma é ${resultado}`)
} 
else if(operacao === '-'){
    resultado = numero1 - numero2
    console.log(`O resultado da sua subtração é ${resultado}`)
}
else if(operacao === '/'){
    resultado = numero1 / numero2
    console.log(`O resultado da sua divisão é ${resultado}`)
    }
    else{
        resultado = numero1 * numero2
        console.log(`O resultado da sua multiplicação é ${resultado}`)

    }
