/*
    수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

    반복문(while)문을 사용해야 합니다.
    for문 사용은 금지됩니다.
    숫자(number string) 사이를 '-'로 구분합니다. ('1-2-3-4-5')
*/
function makeDigits2(num){
    let res = '1';
    let i = 1;
    while(i < num){
        i += 1;
        res = `${res}-${i}`
    }

    return res;

}