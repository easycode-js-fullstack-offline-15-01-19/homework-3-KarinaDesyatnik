// -------------------------- Home work --------------------------
// -------------------------- Desyatnik Karina --------------------------


// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.

let str = "i am in the easycode";
let newStr = '';

for (let i = 0; i < str.length; i++) {
  newStr += i === 0 || str[i - 1] === ' ' ? str[i].toUpperCase() : str[i];   
}

//2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let string = "tseb eht ma i";
let reversSring = '';

for (let i = string.length - 1; i >= 0; i--) {
  reversSring += string[i];
}

//3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.


let factorial = 1;

for(let i = 1; i <= 10; i++) {
  factorial *= i;
}

//4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let string2 = "JavaScript is a pretty good language";
let newString2 = '';
for (let i = 0; i < string2.length; i++) {
  newString2 += (string2[i - 1] == ' ') ? string2[i].toUpperCase() : string2[i];
  newString2 = newString2.split(' ').join('');
}

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их
//  в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let number of arr) {
  if (number % 2 != 0) {
   console.log(number);
  } 
}

// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}
for (let key in list) {
if (list[key].length) {
   console.log(list[key].toUpperCase());
}
}


