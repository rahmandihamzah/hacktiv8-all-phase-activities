function deretBiasa(angka) {

    if (angka === 1) {
        // result = 1
        // return result
        return 1;
    } else {
        // result = angka * deretBiasa(angka - 1);
        // return result;
        return angka * deretBiasa(angka - 1);
    }
}

function deretBeda(angka, beda) {
    // if (angka === 1) {
    //     return 1;
    // } else {
    // }
    console.log('====================')
    console.log('angka awal ' + angka);

    console.log('bedanya ' + beda);

    console.log('angka - beda = ' + angka + ' - ' + beda);

    if (angka - beda > 0) {
        console.log('ini jika ' + angka);
        console.log('hasilnya ' + (angka * deretBeda(angka - beda)));
        return angka * deretBeda(angka - beda);
    } else {
        console.log(angka);
        return angka;
    }
}

console.log(deretBiasa(5));
console.log(deretBeda(12, 5));