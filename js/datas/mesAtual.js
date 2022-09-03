import meses from "/datas/nomesPorExtenso.js";

//Selecionando o elemento
let elemento = document.querySelector("#esseMes");

let dataAtual = new Date;

let mesAtual = dataAtual.getMonth();


// innerHTML
elemento.innerHTML = meses[mesAtual];

console.log("teste 123")







