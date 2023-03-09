// Um pangrama é uma frase que contém todas as letras do alfabeto pelo menos uma vez.
// Dada uma string, detecte se é ou não um pangrama. Retorne 'true' se for, 'false' se
// não. Ignore números e pontuação.

function isPangram(string){
    const alphabet = "qwertyuiopasdfghjklzxcvbnm".split('');
    string = string.toLowerCase();

    for (let i = 0; i < alphabet.length; i++){
        if (string.indexOf(alphabet[i]) < 0)
            return false
    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// true

console.log(isPangram("This is not a pangram."));
//false

console.log(isPangram("Já fiz vinho com toque de kiwi para belga sexy."));
//true
