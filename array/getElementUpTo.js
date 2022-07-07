function getElementsUpTo(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length - 1 < n){
        return [];
    }

    return arr.slice(0, n); //slice는 immutable한 메소드이기 때문에 원본이 변경되지 않는다.
}

console.log(getElementsUpTo([4,5,6],2));
  