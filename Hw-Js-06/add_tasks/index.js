'use strict';

// task 1

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/
function Account (login, email) {
  this.login = login;
  this.email = email;
  Account.prototype.getInfo = function (){
      console.log('Login:' , this.login);
      console.log('Email:' ,this.email);
    };

}

const account = new Account('Mangozedog', 'mango@dog.woof');
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const girl = new Account('Michelle', 'michelle@gmail.com');
girl.getInfo();

const boy = new Account('William', 'william@gmail.com');
boy.getInfo();

console.log(Account.prototype.getInfo); // function



// task 2

/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//   constructor(str) {
//     this._value = new Array(str);
//     // this._value = str;
//   }
//   get value() {
//     this._value;
//   };
  
//   append(str) {
//     this._value.push(str);
//     // return this._value + str;
//   }

//   prepend(str) {
//     this._value.unshift(str);
//     // return this._value + str;
//   }
  
//   pad(str) {
//     this._value.unshift(str);
//     this._value.push(str);
//     this._value = this._value.join(''); 
//   }
  
// }

// const builder = new StringBuilder('.');
// console.log(builder);

// builder.append('^'); 
// console.log(builder._value); // '.^'
 
// builder.prepend('^'); 
// console.log(builder._value); // '^.^'

// builder.pad('='); 
// console.log(builder._value); // '=^.^='




// task 3
/*
 * Напиши класс Car с указанными свойствами и методами
*/

// class Car {
//     constructor({ maxSpeed = 0 }) {
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
//   }
  
// class Car {
//     constructor({ speed, maxSpeed = 0, running, distance}) {
//       this.speed = speed;
//       this.maxSpeed = maxSpeed;
//       this.running = false;
//       this.distance = 0;
//     }
//           turnOn() {
//             this.running = true;
//           }
        
//           turnOff() {
//             // this.running = false;
//           }
        
//           accelerate(spd) {
//             if (spd <= this.maxSpeed) {
//               this.speed = spd;
//             }
//             return this.speed;
//           }
        
//           decelerate(spd) {
//             if(spd < this.maxSpeed && spd > 0){
//               this.speed = spd;
//             }
//             return this.speed;
//           }
        
//           drive(hours) {
//             if (this.running) {
//               this.distance = hours * this.speed;
//             }
//             return this.distance;
//           }


//   }
//     const car = new Car({ maxSpeed: 100 });
//     car.turnOn();
//     car.turnOff();
//     car.accelerate(40);
//     car.decelerate(70);
//     car.drive(2);
//     console.log(car);
  




// task 4
/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/
// class Car {
//     constructor({ maxSpeed = 0, speed, running, distance}) {
//       this.maxSpeed = maxSpeed;
//       this.speed = speed;
//       this.running = false;
//       this.distance = 0;
//     }
//       turnOn() {
//         this.running = true;
//       }
    
//       turnOff() {
//         // this.running = false;
//       }
    
//       accelerate(spd) {
//         if (spd <= this.maxSpeed) {
//           this.speed = spd;
//         }
//         return this.speed;
//       }
    
//       decelerate(spd) {
//         if(spd < this.maxSpeed && spd > 0){
//           this.speed = spd;
//         }
//         return this.speed;
//       }
    
//       drive(hours) {
//         if (this.running) {
//           this.distance = hours * this.speed;
//         }
//         return this.distance;
//       }
//       getSpecs(obj) {
//           console.log(obj);
//       }
//   }

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100



// task 5

/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/
// class Car {
//     constructor({ maxSpeed = 0, price}) {
//       this.maxSpeed = maxSpeed;
//       this.price = price;
//     }
//     get value () {
//       return this.price;
//     }
//     set value (price) {
//       this.price = price;
//     }
//   }

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000
// console.log(car);