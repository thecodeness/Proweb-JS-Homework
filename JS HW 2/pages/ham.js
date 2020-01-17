

function sumInput() {
    let size = ['маленький', 'большой'];
    let filling = ['салат', 'сыр', 'ветчина'];
    let sous = ['кетчуп', 'майонез']
    let price = [5000, 10000, 1500, 2000, 5000, 500];
    let kkal = [250, 340, 5, 25, 50, 0, 10];


    let finalPrice = [];
    let hamSize = prompt('Привет, какого размера бургер желаете, маленький или большой?');
            if (hamSize == size[0]) {
            finalPrice.push(5000);
    } else if (hamSize == size[1]) {
    finalPrice.push(10000);
}
let hamFilling = prompt('Выберите начинку: салат, сыр или ветчина?')
if (hamFilling == filling[0]) {
    finalPrice.push(1500);
} else if (hamFilling == filling[1]) {
    finalPrice.push(2000);
} else if (hamFilling == filling[2]) {
    finalPrice.push(5000);
}
let hamSous = prompt('Хотите кетчуп или майонез?')
if (hamSous == sous[0, 1]) {
    finalPrice.push(500);




let sum = 0;
for (let k = 0; k < finalPrice.length; k++) {
    const el = finalPrice[k]
    sum += el
}
return sum;
}
}

alert(sumInput());

// alert('Ваш заказ составляет ' + sum + ' сум и ' + ' калорий');