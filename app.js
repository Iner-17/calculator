const displayField = document.getElementById("field");
const history = document.querySelector(".history");
let firstNum = 1;
let operation;

function append(x) {
    displayField.value == 0
        ? (displayField.value = x)
        : (displayField.value += x);

    if (firstNum == 0) {
        displayField.value = x;
        firstNum = 1;
        history.innerText = "";
    }
}

const clearDisplay = () => {
    displayField.value = 0;
    history.innerText = "";
};

const clearOne = () => {
    displayField.value == 0
        ? (displayField.value = 0)
        : (displayField.value = displayField.value.slice(0, -1));
};

const add = () => {
    firstNum = displayField.value;
    operation = "+";
    displayField.value = "0";
};

const subtract = () => {
    firstNum = displayField.value;
    operation = "-";
    displayField.value = "0";
};

const multiply = () => {
    firstNum = displayField.value;
    operation = "*";
    displayField.value = "0";
};

const divide = () => {
    firstNum = displayField.value;
    operation = "/";
    displayField.value = "0";
};

const getResult = () => {
    switch (operation) {
        case "+":
            displayField.value =
                parseFloat(firstNum) + parseFloat(displayField.value);
            history.innerText =
                firstNum + "+" + parseFloat(displayField.value - firstNum);
            break;

        case "-":
            displayField.value =
                parseFloat(firstNum) - parseFloat(displayField.value);
            history.innerText =
                firstNum + "-" + parseFloat(firstNum - displayField.value);
            break;
        case "/":
            displayField.value =
                parseFloat(firstNum) / parseFloat(displayField.value);
            history.innerText =
                firstNum + "/" + parseFloat(firstNum / displayField.value);
            break;
        case "*":
            displayField.value =
                parseFloat(firstNum) * parseFloat(displayField.value);
            history.innerText =
                firstNum + "*" + parseFloat(displayField.value / firstNum);
            break;
    }
    firstNum = 0;
};
