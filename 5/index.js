/* --- TASK #1 strings split, slice, indexOf, lastIndexOf --- */

// #1.1
function stringToArray(str) {
    let arr = str.split(' ');
    return arr;
}

let hi = stringToArray('Иван учит JavaScript');
// console.log(typeof (hi));
console.log('Задание 1.1:')
console.log(hi);


// #1.2
function getFirstChars(str, length) {
    let cutStr = str.slice(0, length);
    return cutStr;
}

console.log('Задание 1.2: ' + getFirstChars('JavaScript', 4));


// #1.3
function cutString(str, n) {
    let arr = str.split(' ');
    let temp = '';
    for (let i = 0; i < n; i++) {
        temp = temp + arr[i] + ' ';
    }
    return temp;
}

console.log('Задание 1.3: ' + cutString("Я учу JavaScript каждый день", 3));


// #1.4
function limitStr(str, n, symb = '...') {
    if (str.length > n) {
        return str.slice(0, n) + symb;
    } else {
        return str;
    }
}

console.log('Задание 1.4: ' + limitStr("Hello world", 5));


// #1.5
function getFileName(pathname) {
    let index = 0;
    for (let i = pathname.length - 1; i >= 0; i--) {
        if (pathname[i] === '\\') {
            index = i;
            break;
        }
    }
    // console.log(index); 
    return pathname.slice(index + 1, pathname.length);
}

console.log('Задание 1.5: ' + getFileName("C:\\Users\\Ivan\\report.txt"));


// #1.6
function getSubstr(str, char, pos) {
    let index = str.indexOf(char);
    if (pos === 'before') {
        return str.slice(0, index);
    } else if (pos === 'after') {
        return str.slice(index + 1, str.length);
    } else {
        return '';
    }
}

console.log('Задание 1.6: ' + getSubstr("user@mail.ru", "@", "before") + ', ' + getSubstr("user@mail.ru", "@", "after"));


// #1.7
function insert(str, substr, pos = 'default') {
    if (pos === 'default') {
        return substr + ' ' + str;
    } else {
        let str1 = str.slice(0, pos);
        let str2 = str.slice(pos + 1, str.length);
        return str1 + substr + ' ' + str2;
    }
}

console.log('Задание 1.7: ' + insert("Hello world", ",", 5) + ', ' + insert("world", "Hello"));



/* --- TASK #2 toUpperCase, toLowerCase --- */

// #2.1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}

console.log('\nЗадание 2.1: ' + ucFirst("ivan"));


// #2.2
function capitalize(str) {
    let arr = str.split(' ');
    let temp = '';
    for (let i = 0; i < arr.length; i++) {
        temp = temp + ucFirst(arr[i]) + ' ';
    }
    return temp;
}

console.log('Задание 2.2: ' + capitalize("каждый охотник желает знать"));


// #2.3
function changeRegister(str) {
    temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            temp = temp + str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            temp = temp + str[i].toUpperCase();
        } else {
            temp = temp + str[i];
        }
    }
    return temp;
}

console.log('Задание 2.3: ' + changeRegister("КаЖдЫй ОхОтНиК"));


// #2.4
function insertDash(str) {
    temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            temp = temp + str[i].replace(str[i], '-');
        } else {
            temp = temp + str[i].toUpperCase();
        }
    }
    return temp;
}

console.log('Задание 2.4: ' + insertDash("i love javascript"));


// #2.5
function initCap(str) {
    let arr = str.split(' ');
    temp = '';
    for (let i = 0; i < arr.length; i++) {
        temp = temp + ucFirst(arr[i]);
    }
    return temp;
}

console.log('Задание 2.5: ' + initCap("hello my world"));


// #2.6
function initSnake(str) {
    temp = '';
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && (str[i] === str[i].toUpperCase())) {
            temp = temp + '_' + str[i].toLowerCase();
        } else if (str[i] === str[i].toUpperCase()) {
            temp = temp + str[i].toLowerCase();
        } else {
            temp = temp + str[i];
        }
    }
    return temp;
}

console.log('Задание 2.6: ' + initSnake("HelloMyWorld"));



/* --- TASK #3 padStart, repeat --- */

// #3.1
function removeChar(str) {
    let charArr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        for (let k = 0; k < charArr.length; k++) {
            if (str[i] === charArr[k]) {
                temp = temp + str[i];
            } else if (str[i].toLowerCase() === charArr[k]) {
                temp = temp + str[i];
            } else {
                temp = temp + '';
            }
        }

    }
    return temp;
}

console.log('\nЗадание 3.1: ' + removeChar("Привет, World! 2026 :)"));


// #3.2
function strip(str) {
    let temp = str.trim();
    let arr = temp.split();
    temp = '';
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i] + ' ';
    }
    temp = temp.trim();
    return temp;
}

console.log('Задание 3.2: ' + strip(" Каждый охотник желает "));


// #3.3
function repeatStr(str, n) {
    return str.repeat(n);
}

console.log('Задание 3.3: ' + repeatStr("ab", 3));


// #3.4
function zeros(num, len) {
    let temp = Math.abs(num).toString();
    let str = temp.padStart(len, '0');
    if (num > 0) {
        return '+' + str;
    } else if (num < 0) {
        return '-' + str;
    }
}

console.log('Задание 3.4: ' + zeros(5, 4) + ', ' + zeros(-42, 5));



/* --- TASK #4 indexOf, includes --- */

// #4.1
function isEqualIgnoreCase(str1, str2) {
    temp1 = str1.toLowerCase();
    temp2 = str2.toLowerCase();
    if (temp1.length === temp2.length) {
        for (let i = 0; i < temp1.length; i++) {
            if (temp1[i] !== temp2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

console.log('\nЗадание 4.1: ' + isEqualIgnoreCase("JavaScript", "javascript"));


// #4.2
function insensitiveSearch(str1, str2) {
    let temp1 = str1.toLowerCase();
    let temp2 = str2.toLowerCase();
    if (temp1.includes(temp2)) {
        return temp1.indexOf(temp2);
    } else {
        return -1;
    }
}

console.log('Задание 4.2: ' + insensitiveSearch("Я изучаю JavaScript", "javascript"));


// #4.3
function hasEnding(str, ending) {
    if (str.includes(ending)) {
        temp = str.slice(str.length - ending.length);
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== ending[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

console.log('Задание 4.3: ' + hasEnding("report.txt", ".txt"));


// #4.4
function count(str, search) {
    let counter = 0;
    let temp = str.indexOf(search);

    while (temp !== -1) {
        counter += 1;
        temp = str.indexOf(search, temp + 1);
    }

    return counter;
}

console.log('Задание 4.4: ' + count("абракадабра", "а") + ', ' + count("абракадабра", "абра"));


// #4.5
function hasWord(str, word) {
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }
    return false;
}

console.log('Задание 4.5: ' + hasWord("Я люблю JavaScript", "JavaScript") + ', ' + hasWord("Я люблю JavaScript", "Java"));