import mesesDoAno from "./datas/nomesPorExtenso.js";

//Selecionando o elemento
let elemento = document.querySelector("#esseMes");

let dataAtual = new Date;

let mesAtual = dataAtual.getMonth();


// innerHTML
elemento.innerHTML = mesesDoAno[mesAtual];

console.log("testando ...");
console.log(mesesDoAno[1]);
