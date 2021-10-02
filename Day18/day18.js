// input
// [1,2,3,4,5]

// output
// [3, 4, 9, 8, 15]


function modifyArray(nums) {
    return nums.map(ele => ele * (ele % 2 === 0 ? 2 : 3))
}

let num = [1, 2, 3, 4, 5]
console.log(modifyArray(num))