'use strict';

// task 1

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const items = document.querySelectorAll('.categories > li');
// const arr = Array.from(items);
// // console.log(arr);

// arr.forEach(item => {
//     console.log('Категория: ', item.firstChild.textContent);
//     console.log('Количество вложенных li: ', item.firstElementChild.children.length);
// })


// task 2 

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list');
// console.log(list);
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';


// task 3 
/*
  Дан ul с классом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

//Создали функцию для создание 1-го li
// function createLiElem ({
//   titleText = '',
// }) {
//   const elemLi = document.createElement('li');
//   elemLi.textContent = titleText;
//   return elemLi;
// }

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const elementsList = document.querySelector('.list');
// const liEls = [];

// //Перебираем данный массив и записываем в titleText элементы массива
// elements.forEach(item => {
//   const el = createLiElem({
//     titleText: item,
//   })
//   liEls.push(el);
//   console.log(el);  // все элементы li
// })
// console.log(liEls);  // массив li

// //К классу list добавили наш распыленный массив элементов
// elementsList.append(...liEls);

// console.log(elementsList);


// task 4  

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];

// // Создали ДОМ узел 
//   const pictureGallery = document.querySelector('.gallery');
  
//   // Переберем массив пришедший к нам
//   const elements = [];
//   galleryItems.forEach(item => {
//     const el = createElem(item);
//     elements.push(el);
//   });
//   // console.log(elements);

// // createElem принимает настройки с переданного массива
// function createElem ({url, alt}) {
//   const elemLi = document.createElement('li');
//   const elemImg = document.createElement('img');
//   elemImg.src = url;
//   elemImg.alt = alt;
//   elemImg.width = '300';
//   elemLi.append(elemImg);
//   return elemLi;
// }

// pictureGallery.append(...elements);
// console.log(pictureGallery);

// task 5
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const filterSize = document.querySelector('.size-filter');
// const items = document.querySelectorAll('input');
// const arr = Array.from(items);
// // console.log(arr);

// const includeChecked = []

// arr.forEach(item => {
//     if(item.hasAttribute('checked')){
//       includeChecked.push(item);
//     }
// })
// // Получили массив который содержит checked
// // console.log(includeChecked);


// const el = collectInputData(includeChecked);

// function collectInputData(inputs) {
// return inputs.map(elem => elem.value);
// }
// console.log(el);  //["s", "l", "xl"]


// task 6  

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

{/* <div class="movie">
  <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
  
  <div class="movie__body">
    <h2 class="movie__title">The Godfather</h2>
    <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
      would-be killers, launching a campaign of bloody revenge.</p>

    <p class="movie__date">Released: 1972-03-14</p>
    <p class="movie__rating">Rating: 8.6</p>
  </div>
</div> */}


const movieBox = document.querySelector('.movie');
const movieCard = createMovieCard();
console.log(movieCard);

function createMovieCard() {
  const imgCard = document.createElement('img');
  imgCard.classList.add('movie__image');
  imgCard.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
  imgCard.alt = 'movie image';
  
  const bodyCard = document.createElement('div');
  bodyCard.classList.add('movie__body');
  
  const titleElem = document.createElement('h2');
  titleElem.classList.add('movie__title');
  titleElem.textContent = 'The Godfather';
  
  const descriptionElem = document.createElement('p');
  descriptionElem.classList.add('movie__description');
  descriptionElem.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son.';
  
  const dateElem = document.createElement('p');
  dateElem.classList.add('movie__date');
  dateElem.textContent = 'Released: 1972-03-14';
  
  const ratingElem = document.createElement('p');
  ratingElem.classList.add('movie__description');
  ratingElem.textContent = 'Rating: 8.6';
  
  bodyCard.append(titleElem, descriptionElem, dateElem, ratingElem);
  movieBox.append(imgCard, bodyCard);
  
  return movieBox;
}


// task 7 

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
