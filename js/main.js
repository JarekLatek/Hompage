console.log('siema!');
const name = 'Jarek';
const age = 35;

console.log(`Nazywamm się ${name} i mam ${age} lat`);

console.log('Cieszę się, że podglądasz moją pracę, ponieważ to znaczy, że się rozwijam. ;)');

const button = document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'Klik klik';
});

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x*7;
}

calculate(1);

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);