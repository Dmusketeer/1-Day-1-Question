function deleteElement(arr, ele) {
    // indexOf() method is used to search the specified element
    if (arr.indexOf(ele) === -1) {
        return 'no such element exist in array';
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.indexOf(ele)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [1, 2, 3, 5];

console.log(arr);
console.log(`Before deletion => ${arr}`);
let deleteElemArr = deleteElement(arr, 1);
console.log(`After deletion => ${deleteElemArr}`);