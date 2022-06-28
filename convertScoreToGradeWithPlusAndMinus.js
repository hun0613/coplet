function plusOfMinus(score){

    const extra = score % 10;
    if (extra <=  2){
        return '-';
    }else if (extra >= 8){
        return '+';
    }else{
        return '';
    }
}


function convertScoreToGradeWithPlusAndMinus(score){
    let grade;
    if(score > 100 || score < 0){
        return 'INVALID SCORE';
    }

    if(score >= 90){
        grade = 'A';
    }else if(score >= 80){
        grade = 'B';
    }else if(score >= 70){
        grade = 'C';
    }else if(score >= 60){
        grade = 'D';
    }
    else{
        grade = 'F';
    }

    if(grade !== 'F'){
        grade = grade + plusOfMinus(score);
    }
    console.log(grade);

}