/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    let y = [...x.toString()].reverse().join('')
    // console.log(Number([...y].join('')))
    if( Number([...y].join('')) - x === 0){
        return true
    }
    return false
};
