const btn = document.getElementById("btn");
function batman(){
    const operation = document.getElementById('operation').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
        result = num1 + num2;
        break;
        case 'subtract':
        result = num1 - num2;
        break;
        case 'multiply':
        result = num1 * num2;
        break;
        case 'divide':
        if (num2 === 0) {
         result = `error (Divizion by zero)`
        } else{
        result = num1 / num2;
        }
        break;
        default:
        result = `invalid operation`;
}
document.getElementById('box').textContent = result;
};

btn.addEventListener('click',  () => {
batman()});