/*

Diberikan sebuah function trackStep yang menerima dua parameter:
 - parameter pertama merupakan array kumpulan string yang berisi nama ruangan
   yang bisa dilewati per langkah
 - parameter kedua merupakan array kumpulan string yang berisi perintah maju atau mundur

 Output dari function tersebut adalah berupa object literal yang memberitahukan
 sekarang berada diruangan mana dan kumpulan list ruangan yang bisa dilewati jika ingin mundur
 
 perintah/command dari moves akan bekerja seperti ini:
 - next: akan melangkah maju ke next rooms dan memasukkan nama rooms sekarang berada ke listPrevRooms
 - back: akan kembali ke rooms sebelumnya dan menghapus nama rooms tersebut dari listPrevRooms

 ASUMSI:
 - jika perintah next telah melebihi jumlah rooms, maka tetap berada di room terakhir

CONTOH 1
========
INPUT:
******
  rooms: ['Foxes Room', 'Wolves Room','Tigers Rooms', 'Elephants Rooms']
  moves: ['next', 'next', 'next', 'back']
OUTPUT:
*******
  {
    room: 'Wolves Room',
    listPrevRooms: ['Foxes Room']
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'Foxes Room'
    listPrevRooms: []
  }
- moves index-1: next
  {
    room: 'Wolves Room'
    listPrevRooms: ['Foxes Room']
  }
- moves index-2: next
  {
    room: 'Tigers Room'
    listPrevRooms: ['Foxes Room', 'Wolves Room']
  }
- moves index-3: back
  {
    room: 'Wolves Room'
    listPrevRooms: ['Foxes Room']
  }
CONTOH 2:
==========
INPUT:
******
  rooms: ['A Room', 'B Room']
  moves: ['next', 'next', 'next', 'next']
OUTPUT:
*******
  {
    room: 'B Room',
    listPrevRooms: ['A Room']
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'A Room'
    listPrevRooms: []
  }
- moves index-1: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
- moves index-2: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
- moves index-3: next
  {
    room: 'B Room'
    listPrevRooms: ['A Room']
  }
CONTOH 3:
==========
INPUT:
******
  rooms: ['A Room', 'B Room']
  moves: ['next', 'back', 'back']
OUTPUT:
*******
  {
    room: '',
    listPrevRooms: []
  }
PROSES:
*******
- moves index-0: next
  {
    room: 'A Room'
    listPrevRooms: []
  }
- moves index-1: back
  {
    room: ''
    listPrevRooms: []
  }
- moves index-2: next
  {
    room: ''
    listPrevRooms: []
  }
*/
function trackStep(rooms, moves) {
  let coordinate = -1;
  let result = { room: '', listPrevRooms: [] };

  if (rooms.length === 0 & moves.length === 0) {
    result = 'Invalid rooms and moves';
  } else if (moves.length === 0) {
    result = 'No steps';
  } else if (rooms.length === 0) {
    result = 'There is no rooms can explore';
  } else {
    result
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === 'next') {
        coordinate++;
      } else if (moves[i] === 'back') {
        coordinate--;
      }
    }
    // console.log(coordinate);

    if (coordinate > rooms.length - 1) {
      result.room = rooms[rooms.length - 1];
      result.listPrevRooms.push(rooms[rooms.length - 2]);
    } else if (coordinate >= 0 && coordinate <= rooms.length - 1) {
      result.room = rooms[coordinate];
      for (let i = 0; i < coordinate; i++) {
        result.listPrevRooms.push(rooms[i]);
      }
    }
  }

  return result;
}
/* TEST CASE / DRIVER CODE */
console.log(trackStep(['Foxes Room', 'Wolves Room', 'Tigers Rooms', 'Elephants Rooms'], ['next', 'next', 'next', 'back']));
//  { room: 'Wolves Room', listPrevRooms: [ 'Foxes Room' ] }
console.log(trackStep(['A Room', 'B Room'], ['next', 'next', 'next', 'next']));
// { room: 'B Room', listPrevRooms: [ 'A Room '] }
console.log(trackStep(['A Room', 'B Room'], ['next', 'back', 'back']));
// { room: '', listPrevRooms: [] }
console.log(trackStep([], [])); // Invalid rooms and moves
console.log(trackStep(['A rooms'], [])); //No steps!
console.log(trackStep([], ['next', 'back', 'next'])); //There is no rooms can explore
