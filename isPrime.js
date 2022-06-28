/* 
1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.
*/

function isPrime(num){
    // 소수 : 1과 자기자신만을 약수로 같는 수
    // 1. 1보다 커야된다.
    // 2. 2를 제외한 짝수는 소수가 아니다.
    // 3.
    
    if(num === 1){
        return false;
    }

    if(num === 2){
        return true;
    }

    if(num % 2 === 0){
        return false;
    }

    for(let i = 3; i < Math.floor(Math.sqrt(num)); i += 2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}