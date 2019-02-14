'use strict';

// task 1
/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/

// const guest = 'Mango';
// const name = 'Mango';
// console.log(guest);


// task 2 
/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

// const day = ('02');  
// const month = 10;
// const year = 2017;

// const date = day + "\\" + month + "\\" + year; 

// console.log(date); 


// task 3
/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

// const name = prompt ('What is your name?');
// alert (name);


// task 4
/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в переменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/
// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.


// task 5
/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = 20;
// const border = 5;
// const contentWidth = 100;

// let totalWidth = padding + border + contentWidth + 'px';

// console.log(totalWidth); // '125px'


// task 6
/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/ 
// const question = prompt ('Какой сейчас год?');

// if (question === "2018")  {
//   alert ('Все верно!');
// } else {
//   alert ('Но ведь на вдоре 2018!');
// } 
    


// task 7
/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
  
*/ 

// const userInput = Number(prompt('Введите произвольное целое число'));

//   if (userInput === null) {
//     alert('Приходите еще!');
//   } else if (Number.isInteger(userInput)) {
//     alert('Спасибо!');
//   } else {
//    alert('Необходимо было ввести целое число!');
//   }


// task 8  
/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

// const num = Number.parseInt(Math.random() * 100);
// let type = num % 2 === 0 ? "even" : "odd";
// console.log(`${num} is ${type}`);


// task 9
/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;

// if (hours > 0 && hours < 9) {
//   hours = '0' + hours;
// } else {
//   hours = hours;
// }

// if (minutes > 0 && minutes < 9) {
//   minutes = '0' + minutes;
// } else {
//   minutes = minutes;
// }

// if (seconds > 0 && seconds < 9) {
//   seconds = '0' + seconds;
// } else {
//   seconds = seconds;
// }

// const time = `${hours}:${minutes}:${seconds}`;

// console.log('Time is: ', hours);
// console.log(typeof hours);
// console.log('Time is: ', minutes);
// console.log(typeof minutes);
// console.log('Time is: ', seconds);
// console.log(typeof seconds);


// console.log('Time is: ', time);
// console.log(typeof time);


// task 10  
/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// 1. Почему когда prompt обворачиваю в Number, не срабатывает условие input === null.
// 2. Если не привести к числу, то цифры не проверяет на жесткое равенство.

// const input = prompt('Выбирите желаемый вид отдыха от 1 до 5', 5);
// const hotelList = Number(input);
// // console.log(typeof input);
// // console.log(typeof hotelList);

// const INPUT_ONE = 1;
// const INPUT_TWO = 2;
// const INPUT_THREE = 3;
// const INPUT_FOUR = 4;
// const INPUT_FIFE = 5;

// const isValidInput = hotelList >= 1 && hotelList <= 5;

// if (input === null) {
//   alert('Очень жаль, приходите еще!');
// } else if (!Number(input) || input >= 6) {
//   alert('Неверный ввод, возможные варианты 1-5!');
// }

// if (isValidInput) {

//   switch(hotelList) {
//     case INPUT_ONE:
//     alert('Каталог хостелов');
//     break;
//     case INPUT_TWO:
//     alert('Каталог бюджетных отелей');
//     break;
//     case INPUT_THREE:
//     alert('Каталог отелей ***');
//     break;
//     case INPUT_FOUR:
//     alert('Каталог отелей ****');
//     break;
//     default:
//     alert('Каталог лучших отелей');
//   }
// }