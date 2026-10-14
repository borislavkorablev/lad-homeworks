/* --- TASK #1 if-else --- */

// #1.1 - 1.6 Выводит ответы в терминал. Я положил в цикл, чтобы проверить сразу три значения переменной
console.log('Задания 1.1-1.6:');

let a;
for (let i = 0; i < 3; i++) {
    if (i == 0) {
        a = 1;
    }

    if (i == 1) {
        a = 0;
    }

    if (i == 2) {
        a = -3;
    }

    // Condition 1
    if (a == 0) {
        console.log('Переменная а = ' + a + ' : Условие a == 0 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a == 0 : Результат - ' + false);
    }

    // Condition 2
    if (a > 0) {
        console.log('Переменная а = ' + a + ' : Условие a > 0 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a > 0 : Результат - ' + false);
    }

    // Condition 3
    if (a < 0) {
        console.log('Переменная а = ' + a + ' : Условие a < 0 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a < 0 : Результат - ' + false);
    }

    // Condition 4
    if (a >= 0) {
        console.log('Переменная а = ' + a + ' : Условие a >= 0 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a >= 0 : Результат - ' + false);
    }

    // Condition 5
    if (a <= 0) {
        console.log('Переменная а = ' + a + ' : Условие a <= 0 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a <= 0 : Результат - ' + false);
    }

    // Condition 6
    if (a != 0) {
        console.log('Переменная а = ' + a + ' : Условие a != 0 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a != 0 : Результат - ' + false);
    }

    console.log();
}

// #1.7
console.log('Задание 1.7:');

a = 'test';
for (let i = 0; i < 3; i++) {
    if (a == 'test') {
        console.log('Переменная а = ' + a + ' : Условие a == "test" : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a == "test" : Результат - ' + false);
    }

    if (i == 0) {
        a = 'тест';
    }

    if (i == 1) {
        a = 3;
    }
}

// #1.8
console.log();
console.log('Задание 1.8:');

a = '1';
for (let i = 0; i < 3; i++) {
    if (a === '1') {
        console.log('Переменная а = ' + a + ' : Условие a === 1 : Результат - ' + true);
    } else {
        console.log('Переменная а = ' + a + ' : Условие a === 1 : Результат - ' + false);
    }

    if (i == 0) {
        a = 'тест';
    }

    if (i == 1) {
        a = 3;
    }
}



/* --- TASK #2 --- */
console.log();
console.log();

// #2.1 - 2.2 Я положил в цикл, чтобы проверить сразу два значения переменной
console.log('Задание 2.1-2.2:');

let test = true;
for (let i = 0; i < 2; i++) {
    if (test) {
        console.log('Переменная test = ' + test + ' : Условие test == true : Результат - ' + true);
    } else {
        console.log('Переменная test = ' + test + ' : Условие test == true : Результат - ' + false);
    }

    if (test == true) {
        console.log('Переменная test = ' + test + ' : Условие test == true : Результат - ' + true);
    } else {
        console.log('Переменная test = ' + test + ' : Условие test == true : Результат - ' + false);
    }

    if (!test) {
        console.log('Переменная test = ' + test + ' : Условие test != true : Результат - ' + true);
    } else {
        console.log('Переменная test = ' + test + ' : Условие test != true : Результат - ' + false);
    }

    if (test != true) {
        console.log('Переменная test = ' + test + ' : Условие test != true : Результат - ' + true);
    } else {
        console.log('Переменная test = ' + test + ' : Условие test != true : Результат - ' + false);
    }

    test = false;
    console.log();
}



/* --- TASK #3 && and || --- */
console.log();

// #3.1 - 3.2 Я положил в цикл, чтобы проверить сразу четыре значения переменной
console.log('Задание 3.1-3.2:');

a = 5;
for (let i = 0; i < 4; i++) {
    if (i == 1) {
        a = 0;
    }

    if (i == 2) {
        a = -3;
    }

    if (i == 3) {
        a = 2;
    }

    if (a > 0 && a < 5) {
        console.log('Переменная a = ' + a + ' : Условие a > 0 && a < 5 : Результат - ' + true);
    } else {
        console.log('Переменная a = ' + a + ' : Условие a > 0 && a < 5 : Результат - ' + false);
    }

    if (a == 0 || a == 2) {
        process.stdout.write('Переменная a = ' + a);
        a += 7;
        console.log(' : Условие a == 0 || a == 2 : Результат - a = ' + a);
    } else {
        process.stdout.write('Переменная a = ' + a);
        a /= 10;
        console.log(' : Условие a == 0 || a == 2 : Результат - a = ' + a);
    }

    console.log();
}

// #3.3 - 3.4 Я положил в цикл, чтобы проверить сразу три значения переменных
console.log('Задание 3.3-3.4:');

a = 1;
let b = 3;
let result;
for (let i = 0; i < 3; i++) {
    if (i == 1) {
        a = 0;
        b = 6;
    }

    if (i == 2) {
        a = 3;
        b = 5;
    }

    if (a <= 1 && b >= 3) {
        process.stdout.write('Переменные a = ' + a + ', b = ' + b);
        result = a + b;
        console.log(' : Условие a <= 1 && b >= 3 : Результат = ' + result);
    } else {
        process.stdout.write('Переменные a = ' + a + ', b = ' + b);
        result = a - b;
        console.log(' : Условие a <= 1 && b >= 3 : Результат = ' + result);
    }

    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Переменные a = ' + a + ', b = ' + b + ' : Условие составное : Результат - ' + true);
    } else {
        console.log('Переменные a = ' + a + ', b = ' + b + ' : Условие составное : Результат - ' + false);
    }

    console.log();
}



/* --- TASK #4 switch-case --- */
console.log();

// #4
console.log('Задание 4:');

let num = 3;
switch (num) {
    case (num = 1):
        result = 'зима';
        break;
    case (num = 2):
        result = 'весна';
        break;
    case (num = 3):
        result = 'лето';
        break;
    case (num = 4):
        result = 'осень';
        break;
    default:
        console.log('Допустимое значение от 1 до 4');
}
console.log('При num = ' + num + ' : Сезон - ' + result);



/* --- TASK #5 --- */
console.log();
console.log();

// #5.1
console.log('Задание 5.1:');

let day = 8;
if (day >= 1 && day <= 10) {
    console.log('Первая декада');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третья декада');
}

// #5.2
console.log();
console.log('Задание 5.2:');

let month = 8;
if (month >= 1 && month <= 3) {
    console.log('Зима');
} else if (month >= 4 && month <= 6) {
    console.log('Весна');
} else if (month >= 7 && month <= 9) {
    console.log('Лето');
} else if (month >= 10 && month <= 12) {
    console.log('Осень');
}

// #5.3
console.log();
console.log('Задание 5.3:');

let string = 'abcde';
if (string[0] === 'a') {
    console.log('да');
} else {
    console.log('нет');
}



/* --- TASK #6 while & for --- */
console.log();
console.log();

// #6.1
console.log('Задание 6.1:');

console.log('For');
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log('While');
num = 1;
while (num <= 100) {
    console.log(num);
    num++;
}

// #6.2
console.log();
console.log('Задание 6.2:');

console.log('For');
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

console.log('While');
num = 11;
while (num <= 33) {
    console.log(num);
    num++;
}

// #6.3
console.log();
console.log('Задание 6.3:');

console.log('For');
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log('While');
num = 0;
while (num <= 100) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}

// #6.4
console.log();
console.log('Задание 6.4:');

console.log('For');
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

console.log('While');
num = 1;
sum = 0;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);



/* --- TASK #7 --- */
console.log();
console.log();

// #7
console.log('Задание 7:');

n = 1000;
num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log('Число: ' + n);
console.log('Циклов ' + num);