// Você recebe uma matriz (que terá um comprimento de pelo menos 3,
// mas pode ser muito grande) contendo números inteiros. A matriz é
// composta inteiramente de inteiros ímpares ou composta inteiramente
// de inteiros pares, exceto por um único inteiro N. Escreva um
// método que receba a matriz como um argumento e retorne esse N
// para do padrão.

function findOutlier(integers){
    const numerosPares = [];
    const numerosImpares = [];

    integers.forEach(number => {
        number % 2 === 0 ? numerosPares.push(number) : numerosImpares.push(number);
    });

    if (numerosPares.length < numerosImpares.length) {
        return numerosPares[0];
    } else {
        return numerosImpares[0];
    }
  }

  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
  // 11
  // Único número ímpar

  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
  // 160
  // Único número par
