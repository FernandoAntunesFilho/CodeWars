// Conclua o método/função para que ele converta palavras
// delimitadas por traço/sublinhado em maiúsculas e
// minúsculas. A primeira palavra dentro da saída deve
// estar em maiúscula somente se a palavra original estiver
// em maiúscula. As próximas palavras devem ser sempre
// maiúsculas.

function toCamelCase(string){
    const tabs = /[-_]+/
    const stringArray = string.split(tabs);
    let newString = stringArray[0];

    for (let i = 1; i < stringArray.length; i++){
        newString += firstLetterUp(stringArray[i]);
    }

    return newString;
}

function firstLetterUp(word){
    const firstLetter = word[0].toUpperCase();
    const otherLetters = word.substr(1, word.length - 1);

    return firstLetter + otherLetters;
}

console.log(toCamelCase(''));
// ''

console.log(toCamelCase("the_stealth_warrior"));
//theStealthWarrior

console.log(toCamelCase("The-Stealth-Warrior"));
//TheStealthWarrior

console.log(toCamelCase("A-B-C"));
//ABC
