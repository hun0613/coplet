function getAllElementsButNth(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i !== n){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}  