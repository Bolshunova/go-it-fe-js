'use strict';

// task 1
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax


// task 2
/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива любое имя
// users.unshift( "Elena" );
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// users.splice(3, 0, "Alesha", "Misha")
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


// task 3
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/
// const userInput = prompt ('Введите текст сообщения!');
// let string = userInput; 

// console.log('Я ввела текст:', string); // привет меня зовут Лена

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr 

// let arr = userInput.split(' ');
// console.log('Перезапишем в массив arr:', arr); // ["привет", "меня", "зовут", "Лена"]

// // // Вывести в консоли общую длину массива arr
// console.log('Длина масссива:',arr.length);  //4

// // // Используя цикл, вывести в консоль все индексы массива arr
//  for (let i = 0; i < arr.length; i = i + 1) {
//   console.log('Индекс массива:', i);  //0    //2
// }                                     //1    //3

// // // Используя цикл, вывести в консоль все элементы массива arr
// for (let i = 0; i < arr.length; i = i + 1) {
//   console.log('Элемент масссива:', arr[i]);   // Выведет все элементы массива
// }                                              //привет   //меня //зовут //Лена

// // // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let i = 0; i < arr.length; i = i + 2) {
//   console.log('Индекс массива:', i);  //0   //2
// }


// task 4
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// const min = 100;

// let userInput;
// let inRange = false;

// do {
//   userInput = prompt (`Введите число больше ${min}`);
//   console.log(userInput);
//    if(userInput < 100) {
//      alert('Число меньше 100, Введите еще раз.')
//    }
//   inRange = userInput > min
// } while (userInput !== null && !inRange);


// task 5
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

//   for (let i = 1; i <= max; i +=1) {
//     if (i % 3 === 0) {
//       console.log ('Fizz', i);
//     } else if (i % 5 === 0) {
//       console.log ('Buzz', i);
//     }
//  }


// task 6
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log (numbers[i]);  // выведет все элементы массива
//   if (numbers[i] > num) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);


// task 7
/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;
// let longestLength = 0;

// const splitStr = string.split(' '); // Разбили строку в массив
// // console.log(splitStr);

// for (let i = 0; i < splitStr.length; i += 1) {
//   // console.log(splitStr[i].length);   // узнаем длину каждого элемента
//  if (splitStr[i].length > longestLength) {
//    longestLength = splitStr[i].length;
//    longestWord = splitStr[i];
//  }
// }
//   console.log(longestLength); // 5
//   console.log(longestWord); // 'force'


// task 8
/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

let userInput;
let numbers = [];
let sum = 0;

do {
  userInput = prompt('Введите числа');
  if (userInput === null) {
    alert('Очень жаль, до встречи)');
    break;
  } else {
    const numInput = Number(userInput);
    numbers.push(numInput);
    console.log(numbers);
  }
} while (true);

if (numbers.length) {    //можно упростить условие до if (numbers.length) - ведь 0 приведется к falsy, 
  for (let item of numbers){   // а отрицаетльной длины не бывает. Поэтому это условие пропустит любые числа больше нуля
    sum = sum + item;
    } 
    alert(`Сумма: ${sum}`);
    console.log(`Сумма: ${sum}`);
}                                                 
  