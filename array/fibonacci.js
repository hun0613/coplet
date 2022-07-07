function fibonacci(num){
    let fib = [];
    for(let i = 0; i <= num; i++){
        if(i === 0 || i === 1){
            fib.push(i);
        }else{
            fib.push(fib[i-2] + fib[i-1]);
        }
    }
    return fib;
}