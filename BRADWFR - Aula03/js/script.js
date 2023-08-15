// Estruturas de repetição

/* // while

let n = 0;
let x = 0;

while (n < 3){
    n++;
    x += n;
    console.log("n:", n);
    console.log("x:", x);
} */

/* // do while
let i = 0;
do {
    i++;
    console.log("i:", i);
} while (i < 5); */

/* // for

for (let x = 0; x <= 10; x++){
    console.log("x:", x);
} */

/* // for in -> percorre os índices

let a = [1, 2, 3, 4];
for (let i in a){
    console.log("índice:", i, "valor:", a[i]);
} */

/* // for of -> percorre os valores

let a = [1, 2, 3, 4];
for (let j of a){
    console.log("valor:", j);
} */

/* // forEach

let texto = "";
const nomes = ["Évelin", "Ana", "Anthony", "Guilherme", "Paula"];
nomes.forEach(minhaFuncao);

document.getElementById("txt").innerHTML = texto;
function minhaFuncao(item, indice) {
    texto += indice + ": " + item + "<br>";
} */


// FUNÇÕES

/* 
function nomeFuncao() {
    // codigo
    return valor;
}
nomeFuncao();
*/

/* let opcao = "lab401";
const funcao2 = function escolher() {
    return opcao = "lab402";
}

const funcao1 = 7 + 7;
function escolher() {
    return opcao = "lab402";
}

// console.log(opcao);
// console.log(funcao2);
// console.log(funcao2());
// console.log(funcao1);

let a = [funcao2(), funcao1, function soma(x, y) {return x + y;}]

console.log(a[0]);
console.log(a[1]);
console.log(a[2](10, 5));
*/

/*
let endereco = {};
endereco.rua = "Avenida ds Flores";
endereco.numero = 2010;
endereco.cidade = "Bragança Paulista";
endereco.estado = estado(1);

function estado(x) {
    if (x == 1){
        return "SP";
    } else {
        return "RJ";
    }
}

console.log(endereco); */

/*function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
};
soma(10, 4)(2);*/

// Arrow Functions

/*
function meuNome(nome, sobrenome){
    console.log(nome + sobrenome);
}*/

/* 
const meuNome = (nome) => {
    console.log(nome);
} 
meuNome("Ana Paula");
*/

/*
const mult = (numero) => return 2 * numero;
console.log(mult(10)); */

/* num = Number(prompt("Digite um número: "));
const mult = numero => 2 * numero;
console.log(mult(num)); */

// (function(){})();

/* let texto = document.getElementById("txt");
let c = 0;
let button = document.querySelector("button");
button.addEventListener("click", () => {
    c = c + 1;
    texto.textContent = c + " cliques.";
    console.log("botão selecionado!");
});
*/