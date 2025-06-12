obj = {
    name: "John",
    age: 35,
    sayHello () {
        alert(`Hello : ${this.name}`);
    },
}

obj.sayHello();