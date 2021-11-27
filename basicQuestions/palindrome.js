function isPalindrome(num) {

    let b
    let s
    while (num > 0) {
        b = num % 10
        s = (s * 10) + b
        num = num / 10
    }
    if (s == num) {
        console.log(`The number ${num} is a palindrome`)
    } else {
        console.log(`The number ${num} is not a palindrome`)
    }
}

isPalindrome(121)