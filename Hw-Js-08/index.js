'use strict';

//DZ-8

/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: 'img/01-320px.jpg', fullview: 'img/01-1280px.jpg', alt: "alt text 1" },
  { preview: 'img/02-320px.jpg', fullview: 'img/02-1280px.jpg', alt: "alt text 2" },
  { preview: 'img/03-320px.jpg', fullview: 'img/03-1280px.jpg', alt: "alt text 3" },
  { preview: 'img/04-320px.jpg', fullview: 'img/04-1280px.jpg', alt: "alt text 4" },
  { preview: 'img/05-320px.jpg', fullview: 'img/05-1280px.jpg', alt: "alt text 5" },
  { preview: 'img/06-320px.jpg', fullview: 'img/06-1280px.jpg', alt: "alt text 6" },
];

const imageGallery = document.querySelector('.js-image-gallery');


const div = document.createElement('div');
div.classList.add('fullview');

const fullImg = galleryItems.find(item => item.alt === 'alt text 1');
div.appendChild(createImg(fullImg.fullview, null, fullImg.alt, 'fullphoto'));

  const ul = document.createElement('ul');
  ul.classList.add('preview');

  galleryItems.forEach(item => {
    const li = document.createElement('li');
    li.appendChild(createImg(item.preview, item.fullview, item.alt, 'photo'));
    ul.appendChild(li);
  });


  imageGallery.append(div, ul);

const createFullPicture = ({target}) => {
  const fullphoto = document.querySelector('.fullphoto');
  fullphoto.setAttribute('src', target.dataset.fullview);
  console.log(target.dataset.fullview)
  fullphoto.setAttribute('alt', target.alt); 
  // console.log(target.alt)
};

const picture = Array.from(document.querySelectorAll('.photo'))
picture.forEach(item => item.addEventListener('click', createFullPicture));
console.log(picture);

const activeImg = ({target}) => {
  event.preventDefault();
  picture.forEach(elem => {
    if(elem !== target) {
      elem.classList.remove('photo-active');
    } else {
      elem.classList.add('photo-active');
    }
  });
};

ul.addEventListener('click', activeImg);

function createImg(src, datafullview, alt, className) {
  const fullImg = document.createElement('img');
  if(datafullview !== null) {
    fullImg.classList.add(className);
    fullImg.setAttribute("src", src);
    fullImg.setAttribute("data-fullview", datafullview);
    fullImg.setAttribute("alt", alt);
  } else {
    fullImg.classList.add(className);
    fullImg.setAttribute("src", src);
    fullImg.setAttribute("alt", alt);
  }
  return fullImg;
}

console.log(imageGallery);