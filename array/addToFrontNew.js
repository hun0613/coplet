function addToFrontOfNew(arr, el) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = arr.slice();
    newArr.unshift(el);

    return newArr;
}