/* 
   2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다. 
*/

function listPrimes(num){
    // 1. 2는 무조건 소수
    let res = '2';
    /* 이중for문으로 3부터 차례대로 num까지 소수인지 확인
        - 첫번째 for문 i: 3부터 num까지 +2해가며 반복 : 소수 후보
        - 두번째 for문 j: 3부터 sqrt(i)까지 +2해가며 반복 : 소수 검증
            -만약 i % j === 0 일 경우
                - isPrime = false 후 break
        - isPrime이 true인 동안
            - res = res'-'i

    */ 
    for(let i = 3; i <= num; i += 2){
        let isPrime = true;
        for(let j = 3; j <= Math.floor(Math.sqrt(i)); j += 2){
            if (i % j === 0){
                isPrime = false;
                break;
            }
        }
    
        if(isPrime){
            res = `${res}-${i}`;
        }
   }
   return res;


}