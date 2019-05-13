'use strict';

// DZ #7
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  },
]
const postBox = document.querySelector('.post-card');

const elements = createCards(posts);

function createCards(posts){
  const elem = []

posts.forEach(item => {
  const el = createPostCard(item);
  elem.push(el);
})
return elem;
}

postBox.append(...elements);

function createPostCard({img, title, text, link}) {
    const bodyCard = document.createElement('div');

    const imgCard = document.createElement('img');
    imgCard.setAttribute('src', img);
    
    const titleElem = document.createElement('h2');
    titleElem.textContent = title;
    
    const textElem = document.createElement('p');
    textElem.textContent = text;
    
    const linkElem = document.createElement('a');
    linkElem.textContent = link;
    linkElem.setAttribute('href', link);
    
    bodyCard.append(imgCard, titleElem, textElem, linkElem);
    return bodyCard;
  }

console.log(postBox);