function deretBiasa(angka) {
    let result = 1;

    for (let i = angka; i > 0; i--) {
        result *= i;
    }

    return result;
}

function deretBeda(angka, beda) {
    let result = 1;

    for (let i = angka; i > 0; i -= beda) {
        result *= i;
    }

    return result;
}

console.log(deretBiasa(5));
console.log(deretBeda(12, 5));