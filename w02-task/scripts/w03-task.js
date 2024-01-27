/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1,num2) {
    return num1 + num2;
}

function addNumbers() {
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.querySelector("#add2").value);
    const sum = add(num1, num2);

    const sumField = document.getElementById("sum");
    sumField.value = sum;
}

document.getElementById("addNumbers").addEventListener("click",addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(num1, num2) {
    return num1 - num2;
}

const subtractNumbers = function() {
    const num1 = parseInt(document.getElementById("subtract1").value);
    const num2 = parseInt(document.querySelector("#subtract2").value);
    const difference = subtract(num1, num2);

    const differenceField = document.getElementById("difference");
    differenceField.value = difference;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    const num1 = parseInt(document.getElementById("factor1").value);
    const num2 = parseInt(document.querySelector("#factor2").value);
    const product = multiply(num1, num2);

    const productField = document.getElementById("product");
    productField.value = product;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (num1, num2) => num1 / num2;

function divideNumbers() {
    const num1 = parseInt(document.getElementById("dividend").value);
    const num2 = parseInt(document.querySelector("#divisor").value);
    const quotient = divide(num1, num2);

    const quotientField = document.getElementById("quotient");
    quotientField.value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

let memberCheck = document.getElementById("member");
 function newTotal() {
    let subtotal = Number(document.getElementById("subtotal").value);
    if (memberCheck.checked) {
        document.getElementById("total").innerHTML = (subtotal * 0.8).toFixed(2);
    } else{
        document.getElementById("total").innerHTML = subtotal.toFixed(2);
    }

}

document.getElementById("getTotal").addEventListener("click", newTotal);
memberCheck.addEventListener("change", newTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//odds and evens
document.querySelector("#odds").innerHTML = numbersArray.filter(num => num % 2 !== 0);
document.querySelector("#evens").innerHTML = numbersArray.filter(num => num % 2 === 0);

//sum of array
let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").textContent = sum;

//array times 2
let multipliedArray = numbersArray.map(num => num * 2);
document.getElementById("multiplied").textContent = multipliedArray;

//sum of array times 2
let sumOfMultiplied = numbersArray.map(num => num * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

//display
document.getElementById("array").textContent = numbersArray;

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
