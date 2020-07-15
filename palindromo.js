var palavra = process.argv[2];
var palavraInvertida = "";

for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    console.log(palavra + " é palíndromo.");
} else {
    console.log(palavra + " não é palíndromo.");
}