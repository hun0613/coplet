function getLongestWord(str) {

    let res = str.split(' ');

    let longest = res[0];

    for(let i = 1; i < res.length; i++){
        if(longest.length < res[i].length){
            longest = res[i];
        }
        else if(longest.length === res[i].length){
            longest = longest;
        }
    }

    return longest;

}
  