const displayField = document.getElementById("field");
let firstNum = 1;
let operation;
let result = 0;

function append(x) {
    displayField.value == 0
        ? (displayField.value = x)
        : (displayField.value += x);

    if (firstNum == 0) {
        displayField.value = x;
        firstNum = 1;
    }
}

function clearDisplay() {
    displayField.value = 0;
}

function add() {
    firstNum = displayField.value;
    operation = "+";
    displayField.value = "0";
    console.log(firstNum);
}

function subtract() {
    firstNum = displayField.value;
    operation = "-";
    displayField.value = "0";
    console.log(firstNum);
}

function multiply() {
    firstNum = displayField.value;
    operation = "*";
    displayField.value = "0";
    console.log(firstNum);
}

function divide() {
    firstNum = displayField.value;
    operation = "/";
    displayField.value = "0";
    console.log(firstNum);
}

function getResult() {
    switch (operation) {
        case "+":
            result = firstNum + displayField.value;
            displayField.value =
                parseInt(firstNum) + parseInt(displayField.value);
            break;

        case "-":
            displayField.value =
                parseInt(firstNum) - parseInt(displayField.value);
            break;
        case "/":
            displayField.value =
                parseInt(firstNum) / parseInt(displayField.value);
            break;
        case "*":
            displayField.value =
                parseInt(firstNum) * parseInt(displayField.value);
            break;
    }
    firstNum = 0;
    console.log(firstNum);
}
