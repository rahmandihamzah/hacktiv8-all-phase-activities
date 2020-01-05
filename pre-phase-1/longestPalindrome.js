/**
 * Carilah palindrome terpanjang dari sebuah string input.
 *
 * Demo:
 * Case 1
 * Input: 'banana'
 * Output: 'anana'
 *
 * Case 2
 * Input: 'ana'
 * Output: 'ana'
 *
 * Case3
 * Input: 'duyabbcsscbbauyd'
 * Output: 'abbcsscbba'
 *
 * @param {*} str = string input untuk dicari palindrome terpanjangnya
 */

function longestPalindrome(str) {
  let tempStr = '';
  let longestPalindromeResult = '';

  for (let i = 0; i < str.length; i++) {
    let newStr = '';

    for (let j = i; j < str.length; j++) { // new string start from i
      newStr += str[j];
    }
    // console.log(newStr);

    let newStr1 = '';
    let k = 0;
    let status = true;
    while (status) {
      for (let l = 0; l < newStr.length - k; l++) {
        newStr1 += newStr[l];
      }
      // console.log(newStr1);

      for (let m = newStr1.length - 1; m >= 0; m--) {
        tempStr += newStr1[m];
      }
      // console.log('ini temp ' + tempStr + '\n============');

      if (newStr1 === tempStr) {
        if (newStr1.length > longestPalindromeResult.length) {
          longestPalindromeResult = newStr1;
        }
      }

      tempStr = '';

      if (k === newStr.length - 1) {
        status = false;
      } else {
        k++;
        newStr1 = '';
      }
    }
  }
  console.log(longestPalindromeResult);
}

// Test Case
longestPalindrome('banana') // 'anana'
longestPalindrome('ana') // 'ana'
longestPalindrome('duyabbcsscbbauyd') // 'abbcsscbba'