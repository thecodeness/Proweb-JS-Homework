let num = 18;
let star = '🌟';
let snow = '✼'
let oldNum = num;
let answer = '';
let answer1 = '';


// for (let l = 0; l < num; l++) {


for (let i = 0; i < num; i++) {
    answer = answer + snow;

    for (let k = 0; k < 2 * oldNum - 1; k++) {

        answer1 = answer1 + star;
    }

    console.log(answer + answer1 + answer)
    oldNum--
    answer1 = '';
}




