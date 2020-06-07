document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const addBtn = document.querySelector('#add');
    const subBtn = document.querySelector('#sub');
    const multiBtn = document.querySelector('#multiplications');
    const divBtn = document.querySelector('#divisions');
    const output = document.querySelector('#output');

    function getInputValues() {
        const value1 = +num1.value;
        const value2 = +num2.value;

        return [value1, value2];
    }

    function addHandler() {
        const values = getInputValues();

        const result = values[0] + values[1];

        displayResult(result);
    }

    function subHandler() {
        const values = getInputValues();

        const result = values[0] - values[1];

        displayResult(result);
    }

    function multiHandler() {
        const values = getInputValues();

        const result = values[0] * values[1];

        displayResult(result);
    }

    function divHandler() {
        const values = getInputValues();

        const result = values[0] / values[1];

        displayResult(result);
    }

    function displayResult(result) {
        output.closest('.card').style.display = 'block';
        output.innerHTML = `result = ${result}`;
    }

    addBtn.addEventListener('click', addHandler);
    subBtn.addEventListener('click', subHandler);
    multiBtn.addEventListener('click', multiHandler);
    divBtn.addEventListener('click', divHandler);

});