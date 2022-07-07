function getEvenNumbers(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let res = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            res.push(arr[i]);
        }
    }
    return res;
}
  