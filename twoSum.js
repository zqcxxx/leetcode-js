/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    let  m = 0
    nums.forEach(function callback(x, index, array){
        array.forEach(function cb(y, indexy, arr){
            let c = x + y
            if( c === target){
                if( index !== indexy ){
                    m = [index, indexy]
                }
            }
        })
    })
    return m
};

let nums = [1, 3, 5, 2, 6]
let target = 5
let d = twoSum(nums, target)

console.log(d)
