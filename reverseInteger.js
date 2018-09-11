/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    if(x < 0){
        x = Math.abs(x)
        
        // let ans = '-' + [...(x + '')].reverse().join('') - 0
        
        let ans = Number('-' + [...x.toString()].reverse().join(''))
        
        return (ans < 2147483648 && ans > -2147483649) ? ans : 0    
    }
    // let ans = [...(x + '')].reverse().join('') - 0
    
    let ans = Number([...x.toString()].reverse().join(''))
    
    return (ans < 2147483648 && ans > -2147483649) ? ans : 0       
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(-1563847412))
