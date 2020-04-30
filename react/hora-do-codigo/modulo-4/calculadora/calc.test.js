const calculadora = require('./calc');

describe("calculadora", () => {
    it('teste exemplo', () => {
        const numero1 = 23;
        const numero2 = 7;
        expect(23 + 7).toBe(30);
    });
});

describe("soma", () => {
    it('retorna 3 quando 2 somado com 1', () => {
        const num1 = 2;
        const num2 = 1;
        expect(calculadora.soma(num1, num2)).toBe(3);
    });
});

describe("subtração", () => {
    it('retorna 1 quando 1 subtraido de 2', () => {
        const num1 = 2;
        const num2 = 1;
        expect(calculadora.subtracao(num1, num2)).toBe(1);
    });
});

describe("multiplicação", () => {
    it('retorna 6 quando 2 multiplicado por 3', () => {
        const num1 = 2;
        const num2 = 3;
        expect(calculadora.multiplicacao(num1, num2)).toBe(6);
    });
});

describe("divisão", () => {
    it('retorna 2 quando 6 dividido por 3', () => {
        const num1 = 6;
        const num2 = 3;
        expect(calculadora.divisao(num1, num2)).toBe(2);
    });
    it('retorna 0 se divisão por 0', () => {
        const num1 = 6;
        const num2 = 0;
        expect(calculadora.divisao(num1, num2)).toBe(0);
    });
});