'use strict';

/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'.
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const userName = prompt('Введите Ваш логин!');

const CANCEL_MESSAGE = 'Отменено пользователем!';
const WRONG_INPUT_MESSAGE = 'Доступ запрещен!';
const WELCOME_MESSAGE = 'Добро пожаловать!';
 

if (userName === adminLogin) { 
  const password = prompt('Введите Ваш пароль!');
    if (password === adminPassword) {
      alert (WELCOME_MESSAGE);
    } else if (password === null) {
      alert (CANCEL_MESSAGE);
    } else {  
      alert (WRONG_INPUT_MESSAGE);
    }
} else if  (userName === null) { 
  alert (CANCEL_MESSAGE);
} else {
  alert (WRONG_INPUT_MESSAGE);
}