'use strict';

// task 1  

/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
  ];

  const btnStart = document.querySelector('.js-btn-start');
  const btnStop = document.querySelector('.js-btn-stop');

  let timerId = null;
  let isActive = false;

  btnStart.addEventListener('click', changeColor);
  btnStop.addEventListener('click', colorStop);

function changeColor() {
  if(!isActive) {
    console.log('start');
    isActive = true;
    timerId = setInterval(() => {
      let color = colors[Math.floor(Math.random()*colors.length)];
      const body = document.body;
      body.style.backgroundColor = color;
      }, 1000)
    }
}

function colorStop () {
  if(isActive) {
  console.log('stop');
  isActive = false;
  clearInterval(timerId);
  }
}




//   task 2  

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   let date = new Date(time);  //Узнали дату и время прошедших миллисекунд с эпохи Unix 
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   let millisec = Number.parseInt(date.getMilliseconds()/100);
//   return `${min}:${sec}.${millisec}`;
// }
  
//   console.log(
//     getFormattedTime(5000)
//   ); // 

//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2