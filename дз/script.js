/*let timeElement = document.querySelector(".time");
let timerId = null;

function setTime() {
    let countdown = 10;
    timeElement.textContent = countdown;
    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setInterval(() => {
        countdown--;
        timeElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(timerId);
        }
    }, 1000);
}*/

/*let hello = document.querySelector(".hello");
function hello2(){
    hello.textContent = "Привет, пользователь!";
}*/

/*let effect_p = document.querySelector(".effect-p");
let colors = ['red', 'yellow', 'blue', 'pink','brow', 'green'];
function effect(){
    effect_p.textContent = "Эффект начался!";
    let summTime = 0;
    timerId = setInterval(() => {
        summTime += 2;
        let number = Math.floor(Math.random() * (6 - 0) + 0);
        effect_p.style.color = colors[number];
        if (summTime === 10) {
            clearInterval(timerId);
            console.log("Время вышло!");
        }
    }, 2000);
}*/
let taskMenu = document.querySelector(".task-menu");
function taskAdd(){
    let newTask = document.createElement("p");
    newTask.classList.add("newTask");
    newTask.textContent = prompt("Введите задачу");
    taskMenu.appendChild(newTask);
}
