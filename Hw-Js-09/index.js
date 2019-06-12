'use strict';

//DZ-9

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector(".js-reset");

let timer = {
  isActive: false,
  paused: false,
  startTime: null,
  currentTime: null,
  deltaTime: null,
  pauseTime: 0,
  delay: 0,
  laps: [],
  id: null
};


const startTimer = () => {
    if(!timer.isActive){
      setActiveBtn(startBtn);
      timer.isActive = true;
      timer.startTime = Date.now();
      timer.id = setInterval(updateTime, 100);
      setStartBtnMode('pause');
      return;
    }else if(timer.isActive && !timer.paused){
      timer.paused = true;
      timer.pauseTime = Date.now();
      clearInterval(timer.id);
      setStartBtnMode('continue');
      return;
    }else if(timer.isActive && timer.paused){
      timer.paused = false;
      let currentDelayTime = Date.now();
      timer.delay += currentDelayTime - timer.pauseTime;
      timer.id = setInterval(updateTime, 100);
      setStartBtnMode('pause');
      return;
    }
};
startBtn.addEventListener('click', startTimer);

const getLap = ({target}) => {
    setActiveBtn(target);
    const lapsGet = document.querySelector('.js-laps');
    const item = document.createElement('li');
    item.classList.add('lap-item');
    updateClockface(item, timer.deltaTime);
    timer.laps.push(item);
    lapsGet.appendChild(item);
};
lapBtn.addEventListener('click', getLap);


const resetTimer = ({target}) => {
    setActiveBtn(target);
    clearResetBtn();
    setStartBtnMode('start');
}
resetBtn.addEventListener('click', resetTimer);

function clearResetBtn() {
    timer.isActive = false;
    timer.paused = false;
    timer.startTime = null;
    timer.deltaTime = null;
    timer.delay = 0;
    clearInterval(timer.id);
    updateClockface(time, 0);
    resetLapArr();
    const lapArr = timer.laps;
    lapArr.splice(0, lapArr.length);
}

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}
function getFormattedTime(time) {
    let date = new Date();
    date.setTime(time);
    let minutes = addFirstZero(date.getMinutes());
    let seconds = addFirstZero(date.getSeconds());
    let millisec = Number.parseInt(date.getMilliseconds()/100);
    return `${minutes}:${seconds}.${millisec}`;
}
const addFirstZero = (number) => {
    if(number < 10 && number >= 0){
        number = String('0'+ number);
        return number;
    }
    return number;
}


const removeActive = (elem) => elem.classList.remove('active');
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }else{
    removeActive(startBtn);
    removeActive(lapBtn);
    removeActive(resetBtn);
    target.classList.add('active');
  }
};

function resetLapArr() {
    const lapArr = timer.laps;
    lapArr.splice(0, lapArr.length);
    const lapsGet = document.querySelector('.js-laps');
    const items = document.querySelectorAll('.lap-item');
    items.forEach(lap => lapsGet.removeChild(lap));
};
function updateTime() {
  timer.currentTime = Date.now() - timer.delay;
  timer.deltaTime = timer.currentTime - timer.startTime;
  updateClockface(time, timer.deltaTime);
}

function setStartBtnMode(mode) {
  switch(mode){
    case 'pause': 
      startBtn.textContent = 'Pause';
      startBtn.classList.remove('btn--continue');
      startBtn.classList.add('btn--pause');
      break;
    case 'continue':
      startBtn.textContent = 'Continue';
      startBtn.classList.remove('btn--pause');
      startBtn.classList.add('btn--continue');
      break;
    case 'start':
      startBtn.textContent = 'Start';
      startBtn.classList.remove('btn--pause');
      startBtn.classList.remove('btn--continue');
  }
}