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