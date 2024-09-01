/* Desafio Classificador de nível de Herói 
    - Siga as instruções no arquivo README.md para executar o código corretamente via terminal.
*/
// Pacote que possibilita utilizar a function prompt
const prompt = require('prompt-sync')();

// Variávies 
let heroName = prompt("Digite o nome do herói: ");
let xpLevel = parseInt(prompt("Digite a quantidade de XP do herói: "));
let herolevel;

// Comparador de nível por faixa de XP do héroi 
if (xpLevel < 1000) {
    herolevel = "Ferro";
} else if (xpLevel <= 2000) {
    herolevel = "Bronze";
} else if (xpLevel <= 5000) {
    herolevel = "Prata";
} else if (xpLevel <= 7000) {
    herolevel = "Ouro";
} else if (xpLevel <= 8000) {
    herolevel = "Platina";
} else if (xpLevel <= 9000) {
    herolevel = "Ascendente";
} else if (xpLevel <= 10000) {
    herolevel = "Imortal";
} else {
    herolevel = "Radiante";
}

// Mensagem de saída informando o nível do herói ...
console.log(`O Herói de nome ${heroName} está no nível de ${herolevel}`);