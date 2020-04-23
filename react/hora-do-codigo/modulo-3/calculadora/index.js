const calculadora = require('./calc');
const prompt = require('prompt-sync')();

function options() {
    console.log(`
    1 - somar
    2 - multiplicar
    3 - subtrair
    4 - dividir
    0 - sair
    `);
}

function optionSelected(option) {
    if (option != 0 && option != undefined && Number(option) <= 4) {
        const num1 = Number(prompt("Digite numero 1: "));
        const num2 = Number(prompt("Digite numero 2: "));
        if (option == 1)
            return calculadora.soma(num1, num2);
        if (option == 2)
            return calculadora.multiplicacao(num1, num2);
        if (option == 3)
            return calculadora.subtracao(num1, num2);
        if (option == 4)
            return calculadora.divisao(num1, num2);
    }
}

let option;
while (option != "0") {
    option = prompt(options());
    const result = optionSelected(option);
    if (result != undefined)
        console.log(`O resultado é ${result}`);
}