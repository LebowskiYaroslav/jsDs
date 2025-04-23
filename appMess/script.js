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
/*// ДОМАШНЕЕ ЗАДАНИЕ ВВЕДЕНИЕ В JAVASCRIPT
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
console.log(`Площадь прямоугольника равна ${area}px`);*/
/*function showText(name, age, status){
    console.log(`Имя: ${name}\nВозраст: ${age}\nСтатус: ${status}`);
}
showText("Ярик", 16, "pro");
let showText1 = (name, age, status) => console.log(`Имя: ${name}\nВозраст: ${age}\nСтатус: ${status}`);
showText("Ярик", 16, "pro");
const showText2 = (number) => {
    let a = 2;

}*/
/*function calculator(a, b, operation){
    if(operation == "+"){
        alert(a + b);
    }else if(operation == "-"){
        alert(a - b);
    }else if(operation == "*"){
        alert(a * b);
    }else if(operation == "/"){
        alert(a / b);
    }else{
        alert("Нет такой операции!");
    }
}
let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let operation = prompt("Какая операция?(+ - * /)");
calculator(a, b, operation);
const calculator2 = (a, b, operation) => {
    if(operation == "+"){
        alert(a + b);
    }else if(operation == "-"){
        alert(a - b);
    }else if(operation == "*"){
        alert(a * b);
    }else if(operation == "/"){
        alert(a / b);
    }else{
        alert("Нет такой операции!");
    }
}*/
/*let a = Number(prompt("Введите градусы"));
let replacement = prompt("Перевести в Фаренгейты или цельсия(1, 2)");
const celsiusAndFahrenheit = (a, replacement) => console.log(replacement === "1" ? (a *(9/5) + 32) : ((a - 32) * (5/9)));
celsiusAndFahrenheit(a, replacement);*/
//ЗАДАЧА 1                          ЗАДАЧА 1                                ЗАДАЧА 1                               ЗАДАЧА 1
/*let age = prompt("Введите ваш возраст");
if(age < "18"){
    alert("Вы еще слишком молоды!")
}else if(age >= "18" && age < "65"){
    alert("Добро пожаловать!");
}else{
    alert("Пожалуйста, будьте осторожны");
}*/
//Задача 2                             Задача 2                              Задача 2                                 Задача 2
/*let n = prompt("Задайте число для суммы");
let summ = 0
for(let i = 0; i <= n; i++){
    summ += i;
}
console.log(summ);*/
//Задача 3                              Задача 3                               Задача3
/*function areaСircle(radius){
    let pi = Math.PI;
    console.log(pi*(radius**2));
}
let radius = Number(prompt("Введите радиус окружности"));
areaСircle(radius);*/
//Задача 4                              Задача 4                               Задача4
/*let n = Number(prompt("Введите число N"));
nextPrime:
for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) { 
      if (i % j == 0){
        continue nextPrime;
      } 
    }
  
    console.log(i); 
}*/
//Задача 5                              Задача 5                               Задача5
/*for(let i = 2; i <= 10; i++){
    for(let x = 2; x <= 10; x++){
        console.log(`${i} * ${x} = ${i * x}`);
    }
}*/
/*let library = {
    name: "Вишневый сад",
    address: "Москва",
    books: [{title:"Евгений Онегин", author:"А.С.Пушкин", year:1823}, 
        {title:"Сказка о царе Салтане", author:"А.С.Пушкин", year:1831}, 
        {title:"Капитанская дочка", author:"А.С.Пушкин", year:1836}]
}
console.log(Object.keys(library));
console.log(Object.values(library));
library.books.push({title:"Дубровский", author:"А.С.Пушкин", year:1833});
console.log(library.books);
//ПРАКТИКА Б
let student = {
    name:"Иван",
    age:18,
    grades: [2,2,3,5,5,5],
    address:{
        street:"Космонавтики",
        city:"Москва",
        postalCode:2223423
    }
}
console.log(Object.entries(student));
function getAverageGrade(student){
    let summ = 0;
    let summplus = student.grades.forEach((element) => summ += element);
    console.log(student.grades.map(num => summ / (student.grades.length + 1)));
}
getAverageGrade(student);*/
//  ДОМАШНЕЕ ЗАДАНИЕ
// Номер 1111
/*let arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.shift();
arr.unshift(0);
arr.pop();
console.log(arr);*/
// Номер 2222
/*let user = {
    name: "Ярослав",
    age: 16,
    isStudent:false
}
function showUser(user){
    console.log(`Имя: ${user.name}, Возраст: ${user.age}, Студент: ${user.isStudent}`);
}
showUser(user);*/
// Номер 3333
/*let numbers = [2, 5, 3, 6];
let modernization = (numbers) => console.log(numbers.map(num => num * 2));
modernization(numbers);*/
// Номер 4444
/*let numbers = [2, 5, 3, 6, 8, 9];
let modernization = (numbers) => console.log(numbers.filter(num => num > 5));
modernization(numbers);*/
// Номер 5555
/*let numbers = [2, 5, 3, 6];
let modernization = (numbers) => console.log(numbers.reduce((prev, current) => prev += current));
modernization(numbers);*/
// Номер 6666
let shop = {
    name: "Пятерочка",
    products: [{productName:"Молоко", price: 100}, {productName:"Хлеб", price: 50}]
}
let totalCost = (shop) =>  console.log(shop.products.reduce((total, product) => total + product.price, 0));
totalCost(shop);