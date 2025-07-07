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