'use strict';

// task 1 

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    1- добавляет поле mood со значением 'happy'
    
    2- заменяет значение hobby на 'javascript'
    
    3- удаляет свойство premium
    
    4- выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
   5 - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
   6 - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

// //  1 
// user.mood = 'happy';  
// // 2
// user.hobby = 'javascript';  
// // 3
// delete user.premium;  
// console.log(user);   //{name: "Mango", age: 20, hobby: "javascript", mood: "happy"}
// // 4
// for (let key in user){
//   // console.log(key);   // выведет все ключи объекта
//   // console.log(user[key]); // выведет все свойства объекта
//   console.log(`${key} : ${user[key]}`);  // name : Mango   //age : 20   //hobby : javascript   //mood : happy
// }
// // 5
// const keys = Object.keys(user);
// console.log(keys);   //выведет все ключи объетка  ["name", "age", "hobby", "mood"]
// for(let key of keys) {
//   console.log(`${key} : ${user[key]}`);  //name : Mango   //age : 20   //hobby : javascript   //mood : happy
// }
// // 6
// const entries = Object.entries(user);
// console.log(entries);     // ["name", "Mango"] ["age", 20] ["hobby", "html"] ["premium", true]
// for(let entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key} : ${value}`);  // name : Mango   //age : 20   //hobby : javascript   //mood : happy
//   }



// task 2 

  /*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/


// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// const entries = Object.entries(tasksCompleted);  //Получим сразу и ключи и значения в виде масси массивов
// // console.log(entries);  //[["ann", 29] ["david", 35] ["helen", 1] ["lorence", 99]]

// let max = 0;
// let maxTasks;

// for (const entry of entries){
//   const key = entry[0];
//   const value = entry[1];
// // console.log(`${key}`)  //Выведет все ключи
// // console.log(`${value}`)  //Выведет все значения

//   if (value > max) {
//   max = value;
//   maxTasks = key;
//   }
// }
// console.log(maxTasks);



// task 3 

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/


// const countProps = function(obj){
//   const values = Object.values(obj);   // Выбераем значения
//   // console.log(values);   //[1, 3, "hello"]
//   return values.length;
// };


// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3



// task 4  

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = function(obj){

//   const values = Object.values(obj);  // Выбераем значения

//   if (values.length <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false



// task  5 
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/


// const countTotalSalary = function(salaries){

//   const values = Object.values(salaries);
//   console.log(values);  // []      //[100, 150, 80]

//   let sum = 0;

//   for (let i = 0; i < values.length; i++) {
//         sum += values[i];
//       } return sum;
//     };



// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330



// task 6   
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/


// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// const getAllPropValues = function(arr, prop){
 
// let newName = [];
// let newMood = [];

//   for (let elem of arr) {
//     for (let key in elem) {  
//       if(key === prop){
//       newName.push(elem[key]);
//       } 
//       if (key === prop) {
//       newMood.push(elem[key]);
//       } 
//   }
//   }
//   return newName;
//   return newMood;
// }

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []




//task 7  
/*  
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']



// task 8

/*  
 * Расставь отсутствующие this в конструкторе Account
*/

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//       Login: ${login}, 
//       Pass: ${password}, 
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'



// task 9  

/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

function User ({name, age, friends}) {

  this.name = name;
  this.age = age;
  this.friends = friends;  

  this.getInfo = function() {
    console.log(`User ${name} is ${age} years old and has ${friends} friends.`);
  }
}

const mango = new User({ name: "Mango", age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends
// console.log(mango);

const poly = new User({ name: "Poly", age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends
// console.log(poly);