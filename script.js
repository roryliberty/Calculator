const numbers = document.querySelectorAll('.number-buttons');
//const operators = document.querySelectorAll('.operator-buttons');
let displayContent = '';
let calcType = '';


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log(e.currentTarget.innerText);
        displayContent = e.currentTarget.innerText;
        document.getElementById('result').innerText = displayContent;
    });
});

// operators.forEach((operator) => {
//     operator.addEventListener('click', (e) => {
//         console.log(e.currentTarget.innerText);
//         calcType = e.currentTarget.innerText;
//     });
// });

// if (displayContent !== '' && calcType === '+') {
//     addition(displayContent);
// } else return false;

 function addition(addNum) {
    if (displayContent !== '') {
        console.log(`First addition number: ${addNum}`);
        console.log(`Second addition number: ${displayContent}`);
    }   else return false;
 }