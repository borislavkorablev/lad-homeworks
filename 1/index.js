/* #1 Hello World! */
console.log("Hello World!");


/* #2 Variables */
let age = 46;                               // num
const birthYear = 1980;                     // num

let greeting = "Hello World!";              // string
const LARGEST_OCEAN = "Pacific Ocean";       // string

let isDay = true;                           // boolean
const isFeatureModeOn = false;                // boolean

let userName = null;                        // null
const emptyPlaceholder = null;              // null

let password;                               // undefined 
// const finalScore;                        // undefined (error)


/* #3 Console */
console.log(age);
console.log(birthYear);
console.log(greeting);
console.log(LARGEST_OCEAN);
console.log(isDay);
console.log(isFeatureModeOn);
console.log(userName);
console.log(emptyPlaceholder);
console.log(password);
// console.log(finalScore); SyntaxError: Missing initializer in const declaration


/* #4 typeof */
console.log();
console.log("age:");
console.log(typeof (age));
console.log(typeof age);

console.log();
console.log("birthYear:");
console.log(typeof (birthYear));
console.log(typeof birthYear);

console.log();
console.log("greeting:");
console.log(typeof (greeting));
console.log(typeof greeting);

console.log();
console.log("LARGEST_OCEAN:");
console.log(typeof (LARGEST_OCEAN));
console.log(typeof LARGEST_OCEAN);

console.log();
console.log("isDay:");
console.log(typeof (isDay));
console.log(typeof isDay);

console.log();
console.log("isFeatureModeOn:");
console.log(typeof (isFeatureModeOn));
console.log(typeof isFeatureModeOn);

console.log();
console.log("userName:");
console.log(typeof (userName));
console.log(typeof userName);

console.log();
console.log("isFeatureModeOn:");
console.log(typeof (emptyPlaceholder));
console.log(typeof emptyPlaceholder);

console.log();
console.log("password:");
console.log(typeof (password));
console.log(typeof password);

// Функция возвращает значение переменной. typeof это оператор. Скобки нужны для группировки


/* #5 Const rename */
// isFeatureModeOn = true; TypeError: Assignment to constant variable.


/* #6 Object */
const bone = {
    id: 436,
    length: 23,
    weigth: 1.2
}

bone.length = 28;
console.log(bone);

/* TypeError: Assignment to constant variable.
bone = {
    id: 784,
    length: 11,
    weigth: 0.4
}

// Константа, объявленная с помощью оператора const содержит ссылку на объект. Содержимое объекта может меняться, потому что ссылка при этом остается прежней. При изменении ссылки константы интерпретатор вернет ошибку. 
*/

/* #7 Object, let */
let player = {
    id: 37,
    health: 100,
    gold: 5349
}

player.health = player.health - 40;
console.log(player);

player = {
    id: 81,
    health: 100,
    gold: 100
}
console.log(player);

// При объявлении переменной оператором let возможно и изменение значения объекта, и изменение самого объекта.


var user = {
    name: "Ivan",
    age: 48,
    isMarried: true
}

user.isMarried = false;
console.log(user);

user = {
    name: "Peter",
    age: 22,
    isMarried: false
}
console.log(user);

// var ведет себя непредсказуемо - создает риски переприсваивания, игнорирует границы блоков, что нарушает работу принципов области видимости.