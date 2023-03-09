// Se listarmos todos os números naturais abaixo de 10
// que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A
// soma desses múltiplos é 23.
// Conclua a solução para que ela retorne a soma de todos
// os múltiplos de 3 ou 5 abaixo do número passado. Além
// disso, se o número for negativo, retorne 0.
// Observação: se o número for múltiplo de 3 e 5, conte
// apenas uma vez.

function solution(number){
    let somaDosMultiplos = 0;

    for (let i = number - 1; i >= 0; i--){
        if (i % 3 === 0 || i % 5 === 0) {
            somaDosMultiplos += i;
        }
    }

    return somaDosMultiplos
}

console.log(solution(10));
// 23
