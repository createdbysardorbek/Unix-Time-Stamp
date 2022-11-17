// ! #First

let data = Math.trunc(new Date().getTime() / 1000);
let h1 = document.querySelector('h1');
let input1 = document.querySelector('.input1');

input1.setAttribute('placeholder', `${data}`);

setInterval(() => {
    h1.innerHTML = `${data++}`;
}, 1000);

// ! #Second

let btn1 = document.querySelector('.btn1');
let gmt1 = document.querySelector('.gmt1');
let timezone1 = document.querySelector('.timezone1');
let relative1 = document.querySelector('.relative1');
let table1 = document.querySelector('.table1');
console.log(input1);

btn1.addEventListener('click', () => {
    if (+input1.value != 0) {
        gmt1.innerHTML = `${new Date(+input1.value * 1000).toUTCString()}`
        timezone1.innerHTML = `${new Date(+input1.value * 1000)}`;
        let dateForDifference = new Date().getFullYear();
        let dateForDifference2 = new Date(+input1.value * 1000).getFullYear();
        let difference = dateForDifference - dateForDifference2;
        relative1.innerHTML = `${difference} years ago`;
        table1.style.display = 'block';
    }
});


// ! #Third

// * Inputs

let firstYear = document.querySelector('.first');
let secondMonth = document.querySelector('.second');
let thirdDate = document.querySelector('.third');
let fourthHours = document.querySelector('.fourth');
let fifthMinutes = document.querySelector('.fifth');
let sixSeconds = document.querySelector('.six');

// * Giving Values

firstYear.setAttribute('value', `${new Date().getFullYear()}`);
secondMonth.setAttribute('value', `${new Date().getMonth()}`);
thirdDate.setAttribute('value', `${new Date().getDate()}`);
fourthHours.setAttribute('value', `${new Date().getHours()}`);
fifthMinutes.setAttribute('value', `${new Date().getMinutes()}`);
sixSeconds.setAttribute('value', `${new Date().getSeconds()}`);

// * Button

let btn2 = document.querySelector('.btn2');

// * Table 

let table2 = document.querySelector('.table2');
let unix = document.querySelector('.unix');
let gmt2 = document.querySelector('.gmt2');
let timezone2 = document.querySelector('.timezone2');
let relative2 = document.querySelector('.relative2');

// * Click

btn2.addEventListener('click', () => {
    if (firstYear.value != '' && secondMonth.value != '' && thirdDate.value != 0 && fourthHours.value != 0 && fifthMinutes.value != 0 && sixSeconds != 0) {
        let newDate = Date.parse(new Date(`${firstYear.value}-${secondMonth.value}-${thirdDate.value} ${fourthHours.value}:${fifthMinutes.value}:${sixSeconds.value}`)) / 1000;
        unix.innerHTML = `${newDate}`;
        gmt2.innerHTML = new Date(Date.parse(new Date(`${firstYear.value}-${secondMonth.value}-${thirdDate.value} ${fourthHours.value}:${fifthMinutes.value}:${sixSeconds.value}`))).toUTCString();
        timezone2.innerHTML = new Date(Date.parse(new Date(`${firstYear.value}-${secondMonth.value}-${thirdDate.value} ${fourthHours.value}:${fifthMinutes.value}:${sixSeconds.value}`)));
        let dateForDifference = new Date().getFullYear();
        let dateForDifference2 = new Date(Date.parse(new Date(`${firstYear.value}-${secondMonth.value}-${thirdDate.value} ${fourthHours.value}:${fifthMinutes.value}:${sixSeconds.value}`)) + input1.value * 1000).getFullYear();
        let difference = dateForDifference - dateForDifference2;
        relative2.innerHTML = `${difference} years ago`;
        table2.style.display = 'block';
    }
});

// ! #Extra

document.querySelector('.btn3').addEventListener('click', () => {
    table1.style.display = 'none';
});

document.querySelector('.btn4').addEventListener('click', () => {
    table2.style.display = 'none';
});
