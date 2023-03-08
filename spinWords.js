// Escreva uma função que receba uma string de uma ou mais palavras
// e retorne a mesma string, mas com todas as palavras de cinco ou
// mais letras invertidas. As strings passadas consistirão apenas em
// letras e espaços. Espaços serão incluídos somente quando hover
// mais de uma palavra.

function spinWords(string){
    const stringArray = string.split(" ");
    const reverseStringArray = [];

    stringArray.forEach(word => {
        if (word.length >= 5) {
            reverseStringArray.push(reverseWord(word));
        } else {
            reverseStringArray.push(word);
        }
    });

    return reverseStringArray.join(" ");
}

function reverseWord(word){
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--){
        newWord += word[i];
    }

    return newWord;
}

console.log(spinWords("Hey fellow warriors"));
// "Hey wollef sroirraw"

console.log(spinWords("This is a test"));
// "This is a test"

console.log(spinWords("This is another test"));
// "This is rehtona test"

console.log(spinWords("Welcome"));
// "emocleW"
