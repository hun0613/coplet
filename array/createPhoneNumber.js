function createPhoneNumber(arr){
    
    let first = arr.slice(0,3).join('');
    let second = arr.slice(arr.length - 8, arr.length - 4).join('');
    let third = arr.slice(arr.length - 4, arr.length).join('');


    if(arr.length === 8){
        first = '010';
    }

    return `(${first})${second}-${third}`;

}