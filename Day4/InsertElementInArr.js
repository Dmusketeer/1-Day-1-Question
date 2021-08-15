function InsertEle(Arr,pos,ele){
     // shift all elements one
    // place to the back until index
    for(let i = Arr.length;i<pos;i--){
        Arr[i]=Arr[i-1]
    }
    Arr[pos]=ele;
}

let arr=[2,5,9,6];
console.log(`before insertion -> ${arr}`);
insert(arr, 1, -4);
console.log(`After insertion -> ${arr}`);