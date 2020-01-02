/**
 * ///////////
 * Donor Darah
 * ///////////
 * 
 * Anda akan mensimulasikan suatu rumah sakit dengan daftar golongan darah beserta nama pasien yang memiliki golongan darah tersebut.
 * Wajib menggunakan modular function untuk solve soal ini.
*/

var bloodTypeInfo = {
  A: ['Olive', 'Queen', 'Scala', 'Uranium', 'Wick', 'Yongki'],
  B: ['Nancy', 'Patrick', 'Rust', 'Tesla', 'Vans', 'Xavier'],
  AB: ['Bolt', 'Daniel', 'Frans', 'Hans', 'Jack', 'Laura'],
  O: ['Alan', 'Charly', 'Ester', 'George', 'Intan', 'Mona', 'Zend']
};

// Release 0 - Get Type dari golongan darah orang yang diinput

function getType(person) {
  let getBloodType;

  for (const key in bloodTypeInfo) {

    if (getBloodType === undefined || getBloodType === null) {
      let j = 0;
      let status = true;
      while (status) {
        if (person === bloodTypeInfo[key][j]) {
          getBloodType = key;
          status = false;
        } else if (j === bloodTypeInfo[key].length - 1) {
          getBloodType = null;
          status = false;
        }
        j++;
      }
    }
  }

  return getBloodType;
}

console.log('Release 0\n==========');
console.log(getType('Bolt')); // 'AB'
console.log(getType('Charly')); // 'O'
console.log(getType('Nancy')); // 'B'
console.log(getType('Bolt')); // 'AB'
console.log(getType('Sule')); // null
console.log();

// Release 1 - canDonor

/**
 * Anda harus mensimulasikan suatu sistem rumah sakit dimana akan ada fungsi pengecekan kecocokan golongan darah antara pendonor dan penerima dengan syarat sebgai berikut:
 * A = A, AB (A dapat mendonor ke gol darah A dan AB)
 * B = B, AB
 * AB = AB (AB adalah penerima universal)
 * O = A, B, AB, O (O adalah Donor universal)
 * 
 * Notes:
 * @param Recepient adalah orang yang menerima donor.
 * @param Donor adalah pendonor.
 * Wajib menggunakan function getType.
*/

function canDonor(recepient, donor) {
  let matchBloodType;
  let arrRecepient = [];

  if (getType(donor) === 'A') {
    arrRecepient.push('A', 'AB');
  } else if (getType(donor) === 'B') {
    arrRecepient.push('B', 'AB');
  } else if (getType(donor) === 'AB') {
    arrRecepient.push('AB');
  } else if (getType(donor) === 'O') {
    arrRecepient.push('A', 'B', 'AB', 'O');
  }

  let i = 0
  let status = true;
  while (status) {
    if (getType(recepient) === arrRecepient[i]) {
      matchBloodType = true;
      status = false;
    } else if (i === arrRecepient.length - 1) {
      matchBloodType = false;
      status = false;
    }
    i++;
  }

  return matchBloodType;
}

console.log('Release 1\n==========');
console.log(canDonor('Bolt', 'Alan')); // true
console.log(canDonor('Charly', 'Olive')); // false
console.log(canDonor('Nancy', 'Patrick')); // true
console.log(canDonor('Bolt', 'Alan')); // true
console.log(canDonor('Charly', 'Daniel')); // false
console.log();

// Release 2 - transfussionProcess

/**
 * Implementasikan function transfusionProcess, yang akan menerima parameter
 *
 * @param recipients daftar orang penerima
 * @param  donors 	daftar orang pendonor
 *
 * Fungsi ini akan mencari pendonor yang cocok dari masing-masing penerima dengan syarat pendonor hanya bisa mendonorkan darahnya sekali saja.
 * 
 * Notes:
 * Kalian tidak harus memikirkan optimisasi golongan darah.
 * Wajib menggunakan function canDonor.
*/

function transfusionProcess(recepients, donors) {
  let result = '';

  for (let i = 0; i < recepients.length; i++) {
    let j = 0;
    let status = true;
    while (status) {
      if (j === donors.length) {
        if (i === recepients.length - 1) {
          result += `${recepients[i]} tidak selamat`;
          status = false;
        } else {
          result += `${recepients[i]} tidak selamat \n`;
          status = false;
        }
      } else {
        if (donors[j] !== undefined) {
          if (canDonor(recepients[i], donors[j]) === true) {
            result += `${recepients[i]} menerima donor dari ${donors[j]} \n`;
            donors[j] = undefined;
            status = false;
          }
        }
      }
      j++;
    }
  }

  return result;
}

console.log('Release 2\n==========');
console.log(transfusionProcess(['Bolt', 'Queen'], ['Alan', 'Tesla']));

/*
  Bolt menerima donor dari Alan
  Queen tidak selamat
*/

console.log('-------------------------------');

console.log(
  transfusionProcess(
    ['Nancy', 'Frans', 'Scala', 'Alan'],
    ['Ester', 'Bolt', 'Rust']
  )
);

/*
  Nancy menerima donor dari Ester
  Frans menerima donor dari Bolt
  Scala tidak selamat
  Alan tidak selamat
*/