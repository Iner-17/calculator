const displayField = document.getElementById("field");
const history = document.querySelector(".history");
const container = document.querySelector(".container");
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')
const nav = document.getElementById('nav')
const mainText = document.getElementById('main-text')
const simple = document.getElementById('simple')
const buttons = document.getElementsByTagName('button')

let mode = document.getElementById('mode')
let firstNum = 1;
let operation;


moon.addEventListener('click', () => {
    if (sun.style.display == 'none') {
        sun.style.display = 'block'; 
        moon.style.display = 'none';
        mode.innerText = 'light mode'
        mode.style.color = "rgb(18 24 27)"
        nav.style.backgroundColor = '#fff';
        container.style.backgroundColor = '#fff';
        mainText.style.color = 'rgb(18 24 27)';
        simple.style.color = 'rgb(239 68 68)';
        displayField.style.backgroundColor = 'rgb(234 179 8)';
        for (const button of buttons) {
            button.style.backgroundColor = 'rgb(239 68 68)';
        }
        
    }  else {
        sun.style.display = 'none'
        moon.style.display = 'block'
    }
    


})

sun.addEventListener('click', () => {

    if (moon.style.display == 'none') {
        moon.style.display = 'block'; 
        sun.style.display = 'none';
        mode.innerText = 'dark mode'
        mode.style.color = "#fff"
        nav.style.backgroundColor = 'rgb(18 24 27)';
        container.style.backgroundColor = 'rgb(18 24 27)';
        mainText.style.color = '#fff'
        simple.style.color = 'rgb(234 179 8)'
        displayField.style.backgroundColor = 'rgb(239 68 68)';
        for (const button of buttons) {
            button.style.backgroundColor = 'rgb(234 179 8)';
        }
    }  else {
        moon.style.display = 'none'
        sun.style.display = 'block'
    }

})


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
