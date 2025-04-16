/*let number1 = prompt("Введите первое число");
let number2 = prompt("Введите второе число");
let operation = prompt("Выберите операцию (отправьте сюда знак) (+ - / % *)");
number1 = Number(number1);
number2 = Number(number2);
if(operation == "+"){
    alert(number1 + number2);
}else if(operation == "-"){
    alert(number1 - number2);
}else if(operation == "/"){
    alert(number1 / number2);
}else if(operation == "%"){
    alert(number1 % number2);
}else if(operation == "*"){
    alert(number1 * number2);
}else{
    alert("Неверная операция");
}*/
/*for(let i = 2; i <= 10; i++){
    console.log(`7 * ${i} = ${7 * i}`);
}
for(let i = 2; i <= 10; i++){
    for(let x = 2; x <= 10; x++){
        console.log(`${i} * ${x} = ${i * x}`);
    }
}*/
/*let summ = prompt("Введите сумму");
summ = Number(summ);
let prozent = prompt("Введите процент который нужно вычислить от данной суммы");
prozent = Number(prozent);
alert(`Вычтенная сума равна: ${(summ / 100) * prozent}`);
let confirm2 = confirm("Хотите ли вы увидеть остаток?");
if(confirm2){
    alert(`Оставшаяся сумма равна: ${summ - ((summ / 100) * prozent)}`);
}*/
/*alert("Приветствуем вас в нашей игре 'Угадай число'");
alert("Угадывай число от 0 до 100, мы будем вам подсказывать");
let max = 101;
let min = 0;
let number = Math.floor(Math.random() * (max - min)) + min;
let flag = true;
while(flag){
    let vvod = prompt("Введите число");
    vvod = Number(vvod);
    if(vvod < number){
        alert("Ваше число меньше загаданного, попробуйте еще раз");
    }else if(vvod > number){
        alert("Ваше число больше загаданного, попробуйте еще раз");
    }else if(vvod == number){
        alert("Вы угадали число, поздравляем!");
        flag = false;
    }
}*/
// ДОМАШНЕЕ ЗАДАНИЕ ВВЕДЕНИЕ В JAVASCRIPT
const userName = "Yarik";
let userAge = 16;
let isStudent = false;
console.log(`Имя: ${userName}\nВозраст: ${userAge} \nЯвляется студентом: ${isStudent}`);
//Задача 2: Арифметические операции
let a = 10;
let b = 15;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//Задача 3: Определение типа данных
let string = "hello";
let number = 10;
let boolean = true;
var array = [1, 2, 3, 4, 5];
let x;
let y = null;
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof array);
console.log(typeof x);
console.log(typeof y);
console.log(2 / "sad"); // NaN
//Задача 4: Расчёт площади прямоугольника
let width = 100;
let height = 200;
let area = width * height;
console.log(`Площадь прямоугольника равна ${area}px`);