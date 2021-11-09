// recursive way
function facto(num) {
    if (num < 1) return 1;
    return num * facto(num - 1);
}

let n = 6
console.log(`factorial of ${n} is : `, facto(n))



// iterative way
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

let n1 = 6
console.log(`fact of ${n1} : `, factorial(n1))