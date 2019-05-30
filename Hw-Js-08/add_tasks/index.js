'use strict';

// task 1 

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const button = document.querySelector('.button');

// button.addEventListener('click', addNumber);

// let counter = 0;

// function addNumber() {
//     button.textContent = counter+=1;    //++counter
//     console.log(button.textContent);
// }


// task 2 

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые будут введены в инпуты и запишите их сумму в span.result.
*/
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.querySelector('button');
//   const input = document.querySelectorAll('input');
//   const result1 = document.querySelector('.result');

//   button.addEventListener('click', addNumber);

//   function addNumber() {
//       const firstInput = Number(input[0].value);
//       const secondInput = Number(input[1].value);
//       const result2 = firstInput + secondInput;
//       result1.textContent = result2;
//       console.log(result2);
//       // console.log(firstInput);
//       // console.log(secondInput);
//   }
// });


// task 3

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/



// task 4 

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// document.addEventListener('DOMContentLoaded', () => {
// const button = document.querySelector('button');
// const input = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// button.addEventListener('click', showResult);


// function showResult () {
//   // Прекратили перезагрузку
//   event.preventDefault();
//   // Собрали инпуты в массив
//   const elem = Array.from(input);
//   // Найти из массива элемент который выбрали
//   const checked = elem.find(item => item.checked);
//   // Выведем элемент в графу result;
//   const res = result.textContent = checked.value;
//  console.log(res);
// }
// });


// task 5 
  /*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// document.addEventListener('DOMContentLoaded', () => {
// const images = document.querySelector('.js-img');

// images.addEventListener('click', showAlert);

// function showAlert (event) {
//   const target = event.target;
//   const nodeName = target.nodeName;
//   if(nodeName !== 'IMG') return;
//   alert(event.target.src);
// }
// });


// task 6  

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// document.addEventListener('DOMContentLoaded', () => {
// const list = document.querySelector('.js-list');

// list.addEventListener('click', handleClick);

// function handleClick (event) {
//   const target = event.target;
//   const nodeName = target.nodeName;
//   const parent = target.parentNode;
//   console.log(nodeName);
//   if(nodeName !== 'BUTTON') return;

//   parent.remove();
// }
// });



// task 7 

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

document.addEventListener('DOMContentLoaded', () => {

  const input = document.querySelectorAll('.input');

  const elem = Array.from(input);
  const elems = elem.forEach(item => item.addEventListener('blur', showResult));
    
  function showResult () {
    const target = event.target;
    const target2 = event.currentTarget;
    console.log(target);
    console.log(target2);
    if(target.dataset.length <= target.value.length){
      target.classList.add('invalid');
      target.classList.remove('valid');
    }else{
      target.classList.add('valid');
      target.classList.remove('invalid');
    }
  }
});