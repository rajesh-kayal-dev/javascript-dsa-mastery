function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`hello this is ${this.name}`);
}

const rajesh = new Person("Rajesh");

rajesh.greet();