const prompt = require('prompt-sync')();

const ingressao = prompt("informe o tipo de ingresso(Vip-1;standard-2): ")
const combo = prompt("Você também tem interesse em um combo de pipopa e refrigerant(Sim-1;Não-2): ")


if(ingressao === '1' && combo === '2'){
    console.log("Ingresso VIP sem pipoca: “Valor: 80 reais”")
}else if(ingressao === '1' && combo === '1'){
    console.log("Ingresso VIP com pipoca: : “Valor: 110 reais”")

}else if(ingressao === '2' && combo === '2'){
    console.log("Ingresso standard sem pipoca: “Valor: 40 reais”")
}else if(ingressao === '2' && combo === '1'){
    console.log("Ingresso standard com pipoca: “Valor: 70 reais”")
}else{
    console.log("pedido não identificado")
}