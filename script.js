//HW #7

const operation = prompt("Какую операцию вы хотите выполнить?")

const operandFirst = +prompt("Введите первый операнд")

const operandSecond = +prompt("Введите второй операнд")

let result

if (operation === "+") {
    result = operandFirst + operandSecond
    console.log(operandFirst + " + " + operandSecond + " = " + result)
} else if (operation === "-") {
    result = operandFirst - operandSecond
    console.log(operandFirst + " - " + operandSecond + " = " + result)
} else if (operation === "*") {
    result = operandFirst * operandSecond
    console.log(operandFirst + " * " + operandSecond + " = " + result)
} else if (operation === "/") {
    result = operandFirst / operandSecond
    console.log(operandFirst + " / " + operandSecond + " = " + result)
} else {
    alert('Введен не коректный оператор (операция)')
}