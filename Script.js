"use strict";

/*obj = {
    name: "John",
    age: 35,
    sayHello () {
        alert(`Hello : ${this.name}`);
    },
}

obj.sayHello();*/
//Рекурсия
//Задача 1

/*function sumTo (n) {
    let result = 0;
    for (let i = 0; i <= n; i++){
        result += i;
    }
    return result
}*/

/*function sumTo (n) {
    if (n == 1) {
        return n
    }
    else {
        return n + sumTo(n-1)
    }
}*/

/*function sumTo (n) {
    return ((n+1) / 2) * n
}

alert(sumTo(100));*/

//Задача 2

/*function factorial (n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * factorial(n-1)
    }
}

alert(factorial(5));*/

//Задача 3

/*function fib (n) {
    if (n == 1 || n == 2) {
        return 1
    }
    else {
        return fib(n-1) + fib(n-2)
    }
}

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert (fib(77));*/

//Задача 4

/*let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

function printList(list) {
    alert (list.value);

    if (list.next) {
        printList(list.next);
    }
}

printList(list);*/

//Замыкание

//Задача 1

/*function sum (a) {
  return function sum (b) {
    return a + b;
  }
}

alert(sum(3)(5));*/

//Задача 2

/*function inBetween (a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray (array) {
  return function (x) {
    return array.includes(x);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); //1, 2*/

//Задача 3

/*let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField (field) {
  return (a, b) => a[field] > b[field] ? 1 : -1
}

users.sort(byField('name'));
users.sort(byField('age'));

users.forEach(user => console.log(user.name));*/

//Задача 4

/*function makeArmy() {
  let shooters = [];
  
  for (let i = 0; i < 10; i++) {
    let shooter = function() {
      alert(i);
    };
    shooters.push(shooter);
  }
  
  return shooters;
}

let army = makeArmy();
army[0]();
army[1](); 
army[2]();*/

//NFE

//Задача 1

/*function makeCounter () {
  let count = 0;

  function counter() {
    count ++;
  }
  
  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter  = makeCounter ();

console.log(counter());
console.log(counter());

counter.set(10);
console.log(counter())*/

//Задача 2

/*function sum (a) {

  sum = 0;

  function f (b) {
    sum += b;
    return f
  };

  f.toString = function () {
    return sum
  };
  
  return f
}

alert(sum(2)(3)(5));*/

//Планирование: setTimeout, setInterval

//Задача 1

/*function printNumbers (from, to) {

  let curent = from;

  let timerId = setInterval(function() {
    alert(curent);

    if (curent == to) {
      clearInterval(timerId);
    }

    curent ++;
  }, 1000)
}

function printNumbers (from, to) {
  let curent = from;

  let timerId = setTimeout (function run() {
    alert (curent);

    if (curent < to) {
      timerId = setTimeout(run, 1000)
    }

    curent ++;
  }, 1000)
}

printNumbers(2, 7);*/

// Декораторы и переадресация вызова, call/apply

//Задача 1

/*function work(a, b) {
  console.log( a + b );
}

function spy (func) {
  function wrapper (...args) {
    work.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log( 'call:' + args.join() );
}*/

// Задача 2

/*function f(x) {
  alert(x);
}

function delay (func, ms) {

  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс*/

//Задача 3

/*function alertf(x) {
  alert(x);
}

function debounce (func, ms) {
  let timeout;

  return function () {
    clearTimeout;
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

const f = debounce(alertf, 1000);
f("a")
setTimeout( () => alertf("b"), 200);
setTimeout( () => alertf("c"), 500);*/

//Задача 4

/*function f(x) {
  console.log(x);
}

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f1000 = throttle(f, 2000);

f1000(1);
f1000(2);
f1000(3);*/

//Прототипное наследование

//Задача 4

/*let hamster = {

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
    stomach: [],
  __proto__: hamster
};

let lazy = {
    stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach );*/

// F.prototype

//Задача 2

/*function Object (name) {
  this.name = name;
}

let obj = new Object('John');

let obj2 = new obj.constructor('Pete');

alert(obj2.name)*/

// Встроенные прототипы

//Задача 1

/*function f() {
  alert("Hello!");
}

Function.prototype.defer = function (ms) {
  setTimeout (this , ms);
}

f.defer(1000);*/

// Задача 2

/*function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function (ms) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
};

f.defer(1000)(1, 2);*/

// Методы прототипов, объекты без свойства __proto__

//Задача 1

/*let dictionary = Object.create(null, {
  toString:{
    value () {
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key);
}

alert(dictionary);*/

/*(function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                      
Rabbit.prototype.sayHi(); 
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();*/

// Класс: базовый синтаксис

// Задача 1

/*class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();*/

// Наследование классов

/*class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run (speed) {
    this.speed = speed;
    alert (`${this.name} бежит со скоростью ${this.speed} км/ч`);
  }

  stop () {
    this.speed = 0;
    alert(`${this.name} остановился`);
  }
}

class Rabbit extends Animal {

  constructor (name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  hide () {
    alert(`${this.name} прячется`);
  }

  stop () {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit('Белый кролик', 20);

rabbit.run(5);
rabbit.stop();
console.log(rabbit.earLength);*/

// Задача 1

/*class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);*/

// Задача 2

/*class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor ({ template, precision = 1000 }) {
    super({template});
    this.precision = precision;
  }

  start () {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision) ;
  }
}

let clock = new ExtendedClock({template: 'h:m:s'});

clock.start();*/

// Статические свойства и методы

/*class Article {
  constructor (title, date) {
    this.title = title;
    this.date = date;
  }

  static compare (articalA, articalB) {
    return articalA.date - articalB.date;
  }

  static creatTodays () {
    return new this ('React', new Date())
  }
}

let articles = [
  new Article('HTML', new Date (2019, 1, 1)),
  new Article('CSS', new Date (2019, 0, 1)),
  new Article('JavaScript', new Date (2019, 11, 1))
];

articles.sort(Article.compare);
let todayArticle = Article.creatTodays();

alert(articles[0].title);
alert(todayArticle.title);*/

// Задача 1

/*class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') );*/

// Приватные и защищённые методы и свойства

/*class CofeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error ("Отрицательное количество воды");
    this._waterAmount = value;
  }

  get waterAmount (){
    return this._waterAmount  
  }

  constructor (power) {
    this._power = power;
  }

  get power() {
    return this._power
  }
}

let cofeeMachine = new CofeeMachine(100);

alert(`Мощность: ${cofeeMachine.power}W`);*/

/*class CoffeeMachine {

  #waterAmount = 200;

  get waterAmount () {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount);*/

// Проверка класса: "instanceof"

// class Rabbit {}
// let rabbit = new Rabbit ();

// alert (rabbit instanceof Rabbit);

// class Animal {
//   static [Symbol.hasInstance](obj) {
//     if (obj.canEat) return true
//   }
// }

// let obj = {canEat: true};
// alert(obj instanceof Animal);

// Примеси

// let sayHiMixin = {

//   sayHi () {
//     alert(`Привет ${this.name}`);
//   },

//   sayBye () {
//     alert(`Пока ${this.name}`);
//   }
// };

// class User {
//   constructor (name){
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User("Петя").sayHi();

/*let eventMixin = {

  on (eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  off (eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1)
      }
    }
  },

  trigger (eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return;
    }

    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
}

class Menu {
  choose (value) {
    this.trigger("select", value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", value => alert(`Выбранное значение ${value}`));

menu.choose("JavaScript");*/

// Обработка ошибок, "try..catch"

// let json = "Неправельный JSON с сервера";

// try {
//   JSON.parse(json);
// } catch (err) {
//   alert("Нам не удалось получить данные с сервера, попробуем повторить запрос");
//   alert(err);
// }

// let json = '{"age": 45}';

// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имеени");
//   }
// } catch (e) {
//   alert("JSON Error : " + e.message);
// }

// Пользовательские ошибки, расширение Error

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("Нет свойства: " + property);
//     this.name = "PropertyRequiredError";
//     this.property = property;
//   }
// }

// function readuser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     throw new PropertyRequiredError("Нет поля age!");
//   }

//   if (!user.name) {
//     throw new PropertyRequiredError("Нет поля name!");
//   }

//   return user;
// }

// try {
//   let user = readuser('{"age": 30}');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     alert("Нееккоректные данные: " + err.message);
//     alert(err.name);
//     alert(err.property);
//   } else if (err instanceof SyntaxError) {
//     alert("JSON ошибка синьаксиса :" + err.message);
//   } else {
//     throw err;
//   }
// }

// class ReadError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = "ReadError";
//   }
// }

// class ValidationError extends Error {
//   /*...*/
// }
// class PropertyRequiredError extends ValidationError {
//   /* ... */
// }

// function validateUser(user) {
//   if (!user.age) {
//     throw new PropertyRequiredError("age");
//   }

//   if (!user.name) {
//     throw new PropertyRequiredError("name");
//   }
// }

// function readUser(json) {
//   let user;

//   try {
//     user = JSON.parse(json);
//   } catch (err) {
//     if (err instanceof SyntaxError) {
//       throw new ReadError("Синтаксическая ошибка", err);
//     } else {
//       throw err;
//     }
//   }

//   try {
//     validateUser(user);
//   } catch (err) {
//     if (err instanceof ValidationError) {
//       throw new ReadError("Ошибка валидации", err);
//     } else {
//       throw err;
//     }
//   }
// }

// try {
//   readUser("{bad json}");
// } catch (e) {
//   if (e instanceof ReadError) {
//     alert(e);
//     // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
//     alert("Исходная ошибка: " + e.cause);
//   } else {
//     throw e;
//   }
// }

// задача 1

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message);
//     this.name = "FormatError";
//   }
// }

// let err = new FormatError("ошибка форматирования");

// alert(err.message); // ошибка форматирования
// alert(err.name); // FormatError
// alert(err.stack); // stack

// alert(err instanceof FormatError); // true
// alert(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)

// Введение: колбэки

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   script.onerror = () =>
//     callback(new Error(`Не удалось загрузить скрипт ${src}`));
//   document.head.append(script);
// }

// loadScript("http://127.0.0.1:5500/index.html", (script) => {
//   alert(`${script.src}`);
//   alert("_");
// });

// Промисы

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });

// promise.then(
//   function (result) {
//     /*Выполнит если промис успешно завершится */
//   },
//   function (error) {
//     /*Выполнит при завершении с ошибкой */
//   }
// );

// Случай без ошибки
// let promise = new Promise(function (resolve, relect) {
//   setTimeout(() => {
//     resolve("done");
//   }, 1000);
// });

// promise.then(
//   (result) => alert(result),
//   (error) => alert(error)
// );

// Случай с ошибкой

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Woops")), 4000);
// });

// promise.finally(alert("Промис завершен"));

// promise.then(
//   (result) => alert(result),
//   (error) => alert(error)
// );

// promise.catch(alert); // Для обработки только ошибок

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => alert(`${script.src} загружен!`),
//   (error) => alert(`Ошибка : ${error.message}`)
// );

// promise.then((script) => alert("Ещё один обработчик..."));

// Задача 1

// function delay(ms) {
//   // return new Promise(function (resolve) {
//   //   setTimeout(resolve, ms);
//   // });
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Задача 2

// function showCircle(cx, cy, radius) {
//   let div = document.createElement("div");
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + "px";
//   div.style.top = cy + "px";
//   div.className = "circle";
//   document.body.append(div);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + "px";
//       div.style.height = radius * 2 + "px";

//       div.addEventListener("transitionend", function handler() {
//         div.removeEventListener("transitionend", handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }

// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add("message-ball");
//     div.append("Привет, мир!");
//   });
// }

// Цепочка промисов

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     alert(result);
//     return result * 2;
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     alert(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     alert(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     alert(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     alert(result);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   });

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// loadScript("/article/promise-chaining/one.js")
//   .then(function (script) {
//     return loadScript("/article/promise-chaining/two.js");
//   })
//   .then(function (script) {
//     return loadScript("/article/promise-chaining/three.js");
//   })
//   .then(function (script) {
//     // вызовем функции, объявленные в загружаемых скриптах,
//     // чтобы показать, что они действительно загрузились
//     one();
//     two();
//     three();
//   });

// fetch("/article/promise-chaining/user.json")
//   // .then в коде ниже выполняется, когда удалённый сервер отвечает
//   .then(function (response) {
//     // response.text() возвращает новый промис,
//     // который выполняется и возвращает полный ответ сервера,
//     // когда он загрузится
//     return response.text();
//   })
//   .then(function (text) {
//     // ...и здесь содержимое полученного файла
//     alert(text); // {"name": "iliakan", isAdmin: true}
//   });

// // Запрашиваем user.json
// fetch("/article/promise-chaining/user.json")
//   // Загружаем данные в формате json
//   .then((response) => response.json())
//   // Делаем запрос к GitHub
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   // Загружаем ответ в формате json
//   .then((response) => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then((githubUser) => {
//     let img = document.createElement("img");
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

// Promise API

// ***Promise.all***

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).then(alert);

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// let requests = urls.map((url) => fetch(url));

// Promise.all(requests).then((responses) =>
//   responses.forEach((response) => alert(`${response.url}: ${response.status}`))
// );

// let names = ["iliakan", "remy", "jeresig"];

// let requests = names.map((name) =>
//   fetch(`https://api.github.com/users/${name}`)
// );

// Promise.all(requests)
//   .then((responses) => {
//     for (let response of responses) {
//       alert(`${response.url}: ${response.status}`);
//     }

//     return responses;
//   })
//   .then((responses) => Promise.all(responses.map((r) => r.json())))
//   .then((users) => users.forEach((user) => alert(user.name)));

// ***Promise.allSettled

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   results.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       alert(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       alert(`${urls[num]}: ${result.reason}`);
//     }
//   });
// });

// ***Полифил Promise.allSettled***

// if(!Promise.allSettled) {
//   Promise.allSettled = function(promises) {
//     return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//       status: 'fulfilled',
//       value: value
//     }), error => ({
//       status: 'rejected',
//       reason: error
//     }))));
//   };
// }
