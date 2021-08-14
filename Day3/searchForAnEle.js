function searchItem(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i;
        }
    }
    //return -1 if element is not found:
    return -1
}
const val=0;
const arr=[7,2,1,4,5,6]
console.log(`Search item index is : ${searchItem(arr, val)}`)