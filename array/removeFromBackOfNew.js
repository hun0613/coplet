function removeFromBackOfNew(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = arr.slice(); //slice() -> 복사붙여넣기 (새로운 메모리주소를 가지고 있는 변수 선언)
    newArr.pop();
    return newArr;
    
}
  