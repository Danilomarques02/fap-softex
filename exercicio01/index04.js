const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Qual a sua primeira nota: '));
const nota2 = Number(prompt('Qual a sua segunda nota: '));

const soma = (nota1 + nota2) / 2;

if (soma >= 6) {
  console.log(`Você foi aprovado, com a média ${soma}`);
} else {
  console.log(`Você foi eprovado, com a média ${soma}`);
}