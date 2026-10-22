/* --- TASK #1 return --- */

// #1.1
function powerTwo(num) {
    return num * num;
}

let num1 = 3;
let result = powerTwo(num1);
console.log(`Задача 1.1. Квадрат числа ${num1} = ${result}`);


// #1.2
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

num1 = 5;
let num2 = 8;
result = sumOfTwo(num1, num2);
console.log(`Задача 1.2. Сумма ${num1} и ${num2} = ${result}`);


// #1.3
function subtractAndDivide(num1, num2, num3) {
    return (num1 - num2) / num3;
}

num1 = 20;
num2 = 7;
let num3 = 3;
result = subtractAndDivide(num1, num2, num3);
console.log(`Задача 1.3. Разница ${num1} и ${num2}, поделенная на ${num3} = ${result.toFixed(2)}`);


// #1.4
function weekDay(num) {
    if (num < 1 || num > 7) {
        return 'Введите число от 1 до 7';
    }

    switch (num) {
        case (num = 1):
            return 'monday';
        case (num = 2):
            return 'tuesday';
        case (num = 3):
            return 'wednesday';
        case (num = 4):
            return 'thursday';
        case (num = 5):
            return 'friday';
        case (num = 6):
            return 'saturday';
        case (num = 7):
            return 'sunday';
    }
}

num1 = 4;
result = weekDay(num1);
console.log(`Задача 1.4. ${num1} День недели = ${result}`);



/* --- TASK #2 true/false --- */

// #2.1
function isEqual(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

num1 = 7;
num2 - 3;
console.log(`\nЗадача 2.1. ${isEqual(num1, num2)}`);


// #2.2
function isSumAbove10(num1, num2) {
    temp = num1 + num2;
    if (temp > 10) {
        return true;
    } else {
        return false;
    }
}

num1 = 4;
num2 = 2;
console.log(`Задача 2.2. ${isSumAbove10(num1, num2)}`);


// #2.3
function isNegative(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

num1 = -3;
console.log(`Задача 2.3. ${isNegative(num1)}`);


// #2.4
function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}

num1 = 13;
console.log(`Задача 2.4. ${isNegative(num1)}`);


// #2.5
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

num1 = 172;
console.log(`Задача 2.5. ${isEven(num1)}`);



/* --- TASK #3 true/false --- */

// #3.1
function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum = sum + Number(str[i]);
    }
    return sum;
}

result = getDigitsSum(45612);
console.log(`\nЗадача 3.1. Число 45612. Сумма цифр = ${result}`);


// #3.2 Добавил к внешней функции возможность указать первый и последний годы
function findYears(year1, year2) {
    let str = '';
    for (let i = year1; i <= year2; i++) {
        target = getDigitsSum(i);
        if (target === 13) {
            str = str + String(i) + " ";
        }
    }
    return str;
}

console.log(`Задача 3.2. Список: ${findYears(1, 2020)}`);


// #3.3
function toOneDigit(num) {
    let target = 0;
    while (true) {
        target = getDigitsSum(num);
        if (target < 10) {
            return target;
        } else {
            num = target;
        }
    }
}

console.log(`Задача 3.3. Результат: ${toOneDigit(13473)}`);



/* --- TASK #4 true/false --- */

// #4.1
const palindrome = (str) => {
    if (str.length % 2 === 0) {
        for (let i = 0; i < (str.length / 2); i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
            console.log(`Cycle #${i}: 1 = ${str[i]} ; 2 - ${str[str.length - 1 - i]}`)
        }
        return true;
    }
    else {
        for (let i = 0; i < ((str.length / 2) - 1); i++) {
            if (i == 0) {
                console.log(`Middle letter: ${str[str.length / 2 - 0.5]}`)
            }

            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
            console.log(`Cycle #${i}: 1 = ${str[i]} ; 2 - ${str[str.length - 1 - i]}`)
        }
        return true;
    }

}

let ex = palindrome('ertptre');
console.log(ex);