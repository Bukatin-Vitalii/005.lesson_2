// Написати цикли, які роблять наступне:
//1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let arr1 = [];
for (let i = 20; i <= 30; i += 0.5) {
	arr1.push(i);
}
arr1 = arr1.join(' ');
let div1 = document.querySelector('.div1');
div1.innerHTML = arr1;

//2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let arr2 = [];

for (let i = 10; i <= 100; i += 10) {
	arr2.push(i);
}
arr2 = arr2.map((dollarsAmount) => {
	return dollarsAmount * 27;
});
arr2 = arr2.join(', ');
let div2 = document.querySelector('.div2');
div2.innerHTML = arr2;

//3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let arr3 = [];
let n = 200;

for (let i = 1; i <= 100; i++) {
	if (i * i <= n) {
		arr3.push(i);
	}
}
arr3 = arr3.join(', ');
let div3 = document.querySelector('.div3');
div3.innerHTML = arr3;

//4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number = 11;
let isPrime = true;

for (let i = 2; i < number; i++) {
	if (number % i === 0) {
		isPrime = false;
		break;
	}
}

let div4 = document.querySelector('.div4');
div4.innerHTML = isPrime ? 'Число ' + number + ' просте' : 'Число ' + number + ' не просте';

//5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number5 = 81;
let isPowerOfThree = false;
let power = 0;

for (let i = 1; i <= number5; i++) {
	if (3 ** i === number5) {
		isPowerOfThree = true;
		power = i;
		break;
	}
}

let div5 = document.querySelector('.div5');
div5.innerHTML = isPowerOfThree ? `Число ${number5} є степенем числа 3  (3 в степені ${power})` : `Число ${number5} не є степенем числа 3`;
