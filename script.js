let list = document.querySelectorAll('.item'); // seleciona todos os elementos com a classe "item"
let next = document.getElementById('next'); // seleciona o elemento com o id "next"
let prev = document.getElementById('prev'); // seleciona o elemento com o id "prev"

let cont = list.length; // armazena o número de elementos na lista
let active = 0; // inicializa o índice do elemento ativo como 0

next.onclick = () => {
    console.log("sei la") // exibe "sei la" no console quando o botão "next" é clicado
};

