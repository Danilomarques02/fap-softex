const prompt = require('prompt-sync')();

const numero = Number(prompt("Informe um número: "))

if(numero %2 === 0){
    console.log("O numero informado é par")
}else{
    console.log("O numero infordo é impar")
}