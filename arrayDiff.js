//Seu objetivo neste kata é implementar uma função
//de diferença, que subtrai uma lista de outra e
//retorna o resultado.
// Deve remover todos os valores da lista a, que
//estão presentes na lista b mantendo sua ordem.
//arrayDiff([1,2],[1]) == [2]
//Se um valor estiver presente em b, todas as suas
//ocorrências devem ser removidas do outro:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    const list = [];

    b.forEach(numberB => {
        let index = a.length;

        while (index--) {
            if (a[index] === numberB) a.splice(index, 1);
        }

    });
    return a;
}

console.log(arrayDiff([1,2],[1]));
// [2]

console.log(arrayDiff([1,2,2,2,3],[2]));
// [1,3]

console.log(arrayDiff([1,2,2,2,3],[2,3]));
// [1]
