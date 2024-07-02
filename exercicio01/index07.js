const prompt = require('prompt-sync')();

const hora = prompt("você trabalhou as 40 horas semanais?(sim-1;não-2): ");
const casonao = Number(prompt("caso você respondeu não na pergunta anterior, informe a quantidade de horas trabalhadas(Se respondeu sim deixe em braco): "))
const salario = Number(prompt("informe o seu salário: "))
const extra = prompt("Você tem horas extras?(sim-1;não-2): ")
const quantidade = Number(prompt("Caso você respondeu sim na ultima pergunta, informe a quantidade de horas extras(Se respondeu não deixe em braco): "))


let resultado;
let  horasTra;
let  valorHora;
if(hora === '1' && extra === '1'){
  horasTra = salario / 160
  valorHora = horasTra * 1.5 * quantidade
  resultado = valorHora + salario 
  console.log(`O seu salário com o extra vai ficar: R$${resultado}`)
}
else if(hora === '2' && extra === '2'){
    horasTra = salario / 160
    resultado = horasTra * casonao
    console.log(`Seu salário vai ser: R$${resultado}`)
}else if(hora === '1' && extra === '2'){
    console.log(`O seu salario é: R$${salario}`)
}else{
    console.log("Você escolheu alguma opção incorreta!")
}
