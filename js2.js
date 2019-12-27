let week = +prompt('Введите число дня недели');
let answer;

switch (week) {
    case 1: answer = 'Понедельник'; break
    case 2: answer = 'Вторник'; break
    case 3: answer = 'Среда'; break
    case 4: answer = 'Четверг'; break
    case 5: answer = 'Пятница'; break
    case 6: answer = 'Суббота'; break
    case 7: answer = 'Воскресенье'; break
    default: answer = 'Вы ввели число вне диапазона от 1 до 7';
}
alert(answer);

var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

var res = (x >= y && x >= z ? x : (y >= x && y >= z ? y : z));
alert(res);

var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

var res = (x <= y && x >= z ? x : (y <= x && y >= z ? y : z));
alert(res);

let age = prompt('Введите свой возраст');

if (age < 18) {
    res = 'Вам еще учиться и учиться';
}
else if (age > 17 && age < 60) {
    res = 'Вам еще работать и работать';
}
else if (age >=60) {
    res = 'Вам пора на пенсию';
}
else if (age >120) {
    res = 'Не может быть! Столько не живут'
}
alert (res);

