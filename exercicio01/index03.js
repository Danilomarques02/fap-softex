const prompt = require('prompt-sync')();
 
const numero1 = Number(prompt("Informe um número: "));
const numero2 = Number(prompt("Inform um segundo numero: "));

if(numero1 <= numero2)
{
 console.log(`O maior número é ${numero2}`)
}else{
    console.log(`O maior número é  ${numero1} `)
}