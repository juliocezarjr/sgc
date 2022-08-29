import DiasDoMes from './DiasDoMes.js';

let mesAtual = new DiasDoMes();
let diasDoMes = mesAtual.geraDiasDoMes(2022,5);

let tabelaDeVendas = document.getElementById('tabela-de-vendas');

let linha = document.createElement("tr");
let celulaDaLinha = document.createElement("td")

let conteudoDaLinha1 = document.createTextNode("dia");
let conteudoDaLinha2 = document.createTextNode("vl da gc");
let conteudoDaLinha3 = document.createTextNode("vl da s10");
let conteudoDaLinha4 = document.createTextNode("vl da s500");
let conteudoDaLinha5 = document.createTextNode("vl da hid");

// para cada dia, executar o código abaixo - criar um loop

linha.appendChild(celulaDaLinha).appendChild(conteudoDaLinha1);
linha.appendChild(celulaDaLinha).appendChild(conteudoDaLinha2);
linha.appendChild(celulaDaLinha).appendChild(conteudoDaLinha3);
linha.appendChild(celulaDaLinha).appendChild(conteudoDaLinha4);
linha.appendChild(celulaDaLinha).appendChild(conteudoDaLinha5);

tabelaDeVendas.appendChild(linha);





