console.log('siema!');
const name = 'Jarek';
const age = 35;

console.log(`Nazywamm się ${name} i mam ${age} lat`);

console.log('Cieszę się, że podglądasz moją pracę, ponieważ to znaczy, że się rozwijam. ;)');

const main__header = document.querySelector('.main__header--js');

console.log(main__header.innerHTML);

main__header.innerHTML = 'Pozdro JS';

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