// JavaScript program for reversal algorithm
// of array rotation

/*Function to reverse arr[] from index start to end*/
function reverseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

/* Function to left rotate arr[] of size n by d */
function leftRotate(arr, d, n) {
    if (d == 0) return;
    // in case the rotating factor is
    // greater than array length
    d = d % n;

    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, n - 1);
    reverseArray(arr, 0, n - 1);
}

// Function to print an array
function printArray(arr, size) {
    for (var i = 0; i < size; i++) document.write(arr[i] + " ");
}

/* Driver program to test above functions */

var arr = [1, 2, 3, 4, 5, 6, 7];
var n = arr.length;
var d = 2;

// Function calling
leftRotate(arr, d, n);
printArray(arr, n);