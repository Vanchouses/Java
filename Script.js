'use strict';

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
