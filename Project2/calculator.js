function addToDisplay(value) {
    document.calc.display.value += value;
}

function clearDisplay() {
    document.calc.display.value = "";
}

function calculate() {
    let expression = document.calc.display.value;
    let result = eval(expression);
    document.calc.display.value = result;
}